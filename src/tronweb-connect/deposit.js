import TRC20 from '../abis/trc20.json'
import { MAIN_CONTRACT, ADDRESS_RECEIVER_DEPOSIT } from '../utils/constants'

export async function DepositWeb3({
  ethAddress,
  price,
  LumiAddress,
  idoReceiveAddress,
  setIsLoading,
  depositWithHash,
  setIsSuccess,
  setContentSuccess,
}) {
  try {
    setIsLoading(true)
    const tronWeb = window.tronWeb
    const priceInt = price.split('.')[0]
    const lumiAddress = LumiAddress ? LumiAddress : MAIN_CONTRACT
    const receiveAddress = idoReceiveAddress
      ? idoReceiveAddress
      : ADDRESS_RECEIVER_DEPOSIT
    const tokenInst = await tronWeb.contract(TRC20, lumiAddress)
    const decimals = await tokenInst.decimals().call()
    const decimalToken = tronWeb.toBigNumber(10).pow(decimals)
    const priceBC = tronWeb.toBigNumber(priceInt).multipliedBy(decimalToken)
    try {
      const hash = await tokenInst
        .transfer(receiveAddress, priceBC.toString())
        .send({ from: ethAddress })
      const resultDepositWithHash = await depositWithHash({
        payload: { hash: hash },
      })
      if (resultDepositWithHash.data) {
        setIsLoading(false)
        setContentSuccess(resultDepositWithHash.data.success)
        setIsSuccess(true)
      }
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  } catch (error) {
    console.log(error)
    setIsLoading(false)
  }
}
