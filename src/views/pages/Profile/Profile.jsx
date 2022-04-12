import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import {
  useGetProfileQuery,
  useGetTradeHistoryQuery,
} from '../../../app/services/authApi'
import { AppContext } from '../../../context/AppProvider'
import { useAppSelector } from '../../../app/hook'
import logo from '../../../assets/images/logo.png'
import './styles.scss'
import { Skeleton } from 'antd'

export default function Profile() {
  const { userId } = useAppSelector((state) => state.auth)
  const { data } = useGetProfileQuery(`ddapp/account/info/${userId}`)

  const { setIsDepositVisible, setIsWithdrawVisible } = useContext(AppContext)

  const handleOpenModalDeposit = () => {
    setIsDepositVisible(true)
  }

  const handleOpenModalWithdraw = () => {
    setIsWithdrawVisible(true)
  }

  const tradeHistory = useGetTradeHistoryQuery('/ddapp/account/trade-history')

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

              <div className="profile-action">
                <button className="deposit" onClick={handleOpenModalDeposit}>
                  deposit
                </button>
                <button className="withdraw" onClick={handleOpenModalWithdraw}>
                  withdraw
                </button>
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
              <div className="desc">
                {tradeHistory?.data?.length > 0 &&
                  tradeHistory?.data.map((item) => (
                    <div className="item" key={item.transId}>
                      <div>Action</div>
                      {item.action>0?(<div>Deposit</div>):(<div>Withdraw</div>)}
                      <div>Status</div>
                      {item.status==0?(<div><p id="FailNoti">Fail</p></div>): item.status==1?(<div><p id="SucessNoti">Sucess</p></div>):(<div><p id="WaitNoti">Waiting</p></div>)}
                      <div>Amount</div>
                      <div>{item.token}</div>
                      <div>Time</div>
                      <div>{item.createdAt}</div>
                      <div>transId</div>
                      <div>{item.transId}</div>
                    </div>
                  ))}
              </div>
            </Skeleton>
          </div>
        </div>
      </section>
    </article>
  )
}
