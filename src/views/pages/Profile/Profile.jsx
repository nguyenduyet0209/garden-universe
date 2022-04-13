import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Skeleton } from 'antd'

import {
  useGenerateAccountGameMutation,
  useGetAccountGameQuery,
  useGetProfileQuery,
  useGetTradeHistoryQuery,
} from '../../../app/services/authApi'
import { AppContext } from '../../../context/AppProvider'
import { useAppSelector } from '../../../app/hook'
import logo from '../../../assets/images/logo.png'

import './styles.scss'

export default function Profile() {
  const { userId, allow_deposit, allow_withdraw } = useAppSelector(
    (state) => state.auth
  )

  const { data } = useGetProfileQuery(`ddapp/account/info/${userId}`)

  const { setIsDepositVisible, setIsWithdrawVisible } = useContext(AppContext)

  const handleOpenModalDeposit = () => {
    setIsDepositVisible(true)
  }

  const handleOpenModalWithdraw = () => {
    setIsWithdrawVisible(true)
  }

  const tradeHistory = useGetTradeHistoryQuery('/ddapp/account/trade-history')
  const accountGame = useGetAccountGameQuery('/game/me/info')

  const [generateAccountGame] = useGenerateAccountGameMutation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleGenerateAccountGame = async () => {
    const dataGenerate = await generateAccountGame({
      payload: {},
    })
    if (dataGenerate.data) {
      setUsername(dataGenerate.data.username)
      setPassword(dataGenerate.data.password)
    }
  }
  useEffect(() => {
    if (
      accountGame?.data?.account?.userName ||
      accountGame?.data?.account?.passwordRaw
    ) {
      handleGenerateAccountGame()
    }
  }, [])

  return (
    <article className="profile">
      <section className="profile-header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
      </section>

      <section className="infomation">
        <div className="container">
          <div className="profile-content">
            <h3 className="title">Information</h3>
            <div className="desc">
              <div className="item">
                <div>ID</div>
                <div>{data?.account?.id}</div>
              </div>
              <div className="item">
                <div>Eth Address</div>
                <div>{data?.account?.ethAddress}</div>
              </div>
              <div className="item">
                <div>Balance</div>
                <div>{data?.account?.tokenBalance}</div>
              </div>
              <div className="item">
                <div>Username</div>
                <div>
                  {accountGame?.data?.account?.userName
                    ? accountGame?.data?.account?.userName
                    : username}
                </div>
              </div>
              <div className="item">
                <div>Password</div>
                <div>
                  {accountGame?.data?.account?.passwordRaw
                    ? accountGame?.data?.account?.passwordRaw
                    : password}
                </div>
              </div>

              <div className="profile-action">
                {allow_deposit && allow_deposit == '1' && (
                  <button className="deposit" onClick={handleOpenModalDeposit}>
                    deposit
                  </button>
                )}

                {allow_withdraw && allow_withdraw == '1' && (
                  <button
                    className="withdraw"
                    onClick={handleOpenModalWithdraw}
                  >
                    withdraw
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="transaction">
        <div className="container">
          <div className="profile-content">
            <h3 className="title">Transaction</h3>
            <Skeleton loading={tradeHistory.isLoading} active>
              <div className="box-transition">
                <div className="desc desc-transition">
                  {tradeHistory?.data?.length > 0 &&
                    tradeHistory?.data.map((item) => (
                      <div className="item" key={item.transId}>
                        <div>Action</div>
                        {item.action > 0 ? (
                          <div>Deposit</div>
                        ) : (
                          <div>Withdraw</div>
                        )}
                        <div>Status</div>
                        {item.status == 0 ? (
                          <div id="FailNoti">Fail</div>
                        ) : item.status == 1 ? (
                          <div id="SucessNoti">Sucess</div>
                        ) : (
                          <div id="WaitNoti">Waiting</div>
                        )}
                        <div>Amount</div>
                        <div>{item.token}</div>
                        <div>Time</div>
                        <div>{item.createdAt}</div>
                        <div>transId</div>
                        <div>{item.transId}</div>
                      </div>
                    ))}
                </div>
              </div>
            </Skeleton>
          </div>
        </div>
      </section>
    </article>
  )
}
