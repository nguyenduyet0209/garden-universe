import Web3 from 'web3'
import BUSD from '../abis/busd.json'

export async function DepositWeb3({
  provider,
  ethAddress,
  price,
  BUSDAddress,
  idoReceiveAddress,
  setIsLoading,
  depositWithHash,
  setIsSuccess,
  setContentSuccess,
}) {
  try {
    setIsLoading(true)
    const web3 = new Web3(provider)
    const priceInt = price.split('.')[0]
    const busdAddress = BUSDAddress
      ? BUSDAddress
      : '0x1432f7ca55175aff2755794fe79c134e4aa6aca6'
    const receiveAddress = idoReceiveAddress
      ? idoReceiveAddress
      : '0x727409884a349815d15D1047FB79c27850fe005F'

    const tokenInst = new web3.eth.Contract(BUSD, busdAddress)
    tokenInst.methods
      .transfer(receiveAddress, web3.utils.toWei(priceInt, 'ether'))
      .send({ from: ethAddress })
      .on('receipt', async (hash) => {
        const resultDepositWithHash = await depositWithHash({
          payload: { hash: hash.transactionHash },
        })
        if (resultDepositWithHash.data) {
          setIsLoading(false)
          setContentSuccess(resultDepositWithHash.data.success)
          setIsSuccess(true)
        }
      })
      .on('error', (error) => {
        console.log(error)
        setIsLoading(false)
      })
  } catch (error) {
    console.log(error)
    setIsLoading(false)
  }
}
