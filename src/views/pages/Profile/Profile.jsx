import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/images/logo.png'
// import { AppContext } from '../../../context/AppProvider'
import { AppContext } from '../../../context/AppProvider'
import './styles.scss'

export default function Profile() {
  const { setIsDepositVisible, setIsWithdrawVisible } = useContext(AppContext)

  const handleOpenModalDeposit = () => {
    setIsDepositVisible(true)
  }

  const handleOpenModalWithdraw = () => {
    setIsWithdrawVisible(true)
  }

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
                <div>Item name</div>
                <div>0x4bd996CB5afa2be97a111</div>
              </div>
              <div className="item">
                <div>Balance</div>
                <div>0 Token</div>
              </div>
              <div className="item">
                <div>ID</div>
                <div>ID name</div>
              </div>
              <div className="item">
                <div>Password</div>
                <div>******</div>
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
            <div className="desc"></div>
          </div>
        </div>
      </section>
    </article>
  )
}
