import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
// import WalletConnectProvider from '@walletconnect/web3-provider'
import { Spin } from 'antd'
import { Header } from 'react-fullpage'
import { FaAlignJustify, FaSignOutAlt, FaTimes } from 'react-icons/fa'

import { useAppDispatch, useAppSelector } from '../../app/hook'
import { menuList } from '../../utils/constants'

import { onLoginWithWalletConnect } from '../../web3-connect/walletConnect'
import detectProvider from '../../web3-connect/detectProvider'
import { resetSession } from '../../utils/sesstionStorage'
import {
  resetAuth,
  resetIsConnecting,
  setIsConnecting,
} from '../../app/slices/authSlice'
import { Link } from 'react-router-dom'

//  Create WalletConnect Provider
// const provider = new WalletConnectProvider({
//   rpc: {
//     56: 'https://bsc-dataseed.binance.org/',
//   },
// })

//  Enable session (triggers QR Code modal)
// await provider.enable();

export default function HeaderCPN() {
  const dispatch = useAppDispatch()
  const { ethAddress, isConnecting } = useAppSelector((state) => state.auth)

  // scroll to hero after refresh
  const myLink = useRef(null)
  useEffect(() => {
    if (myLink) {
      myLink.current.click()
    }
  }, [myLink])

  // control menu mobile
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const handleOpenMenu = (e) => {
    e.preventDefault()
    setIsOpenMenu(true)
  }
  const handleCloseMenu = () => {
    setIsOpenMenu(false)
  }

  // connect metamark or wallet connect
  // const [isConnecting, setIsConnecting] = useState(false)
  const onLoginHandlerWithMetaMark = async () => {
    try {
      dispatch(setIsConnecting())
      const provider = detectProvider()
      if (provider) {
        if (provider !== window.ethereum) {
          console.error(
            'Not window.ethereum provider. Do you have multiple wallet installed ?'
          )
        }
        // setIsConnecting(true)
        await provider.request({
          method: 'eth_requestAccounts',
        })
        // setIsConnecting(false)
      }
      onLoginWithWalletConnect({ provider, dispatch })
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(resetIsConnecting())
    }
  }

  const onHandleDisconnect = () => {
    resetSession()
    dispatch(resetAuth())
  }

  // const onLoginHandlerWithWalletConnect = async () => {
  //   const provider = new WalletConnectProvider({
  //     rpc: {
  //       56: 'https://bsc-dataseed.binance.org/',
  //     },
  //     infuraId: '27e484dcd9e3efcfd25a83a78777cdf1',
  //   })
  //   console.log(provider)
  //   await provider.enable()
  //   onLoginWithWalletConnect({ provider, dispatch })
  // }

  return (
    <Header>
      <div className="container">
        <div className="open-menu text-center">
          {!isOpenMenu && (
            <button onClick={handleOpenMenu}>
              <FaAlignJustify />
            </button>
          )}
        </div>
        <ul className={isOpenMenu ? `main-menu active` : 'main-menu'}>
          <li style={{ display: 'none' }}>
            <a href="#hero" ref={myLink}>
              hero
            </a>
          </li>
          <li className="close-menu">
            <button onClick={handleCloseMenu}>
              <FaTimes />
            </button>
          </li>
          {menuList.map((item) =>
            item.subMenu ? (
              <li key={item.id}>
                <a href="javascript:void(0)">{item.name}</a>
                <ul className="sub-menu">
                  {item.subMenu.map((sub) => (
                    <li key={sub.id}>
                      <a
                        target="_blank"
                        href="https://magicisland.nhatduyet.me/"
                        rel="noreferrer"
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.id}>
                <a href={`#${item.name}`} onClick={handleCloseMenu}>
                  {item.name}
                </a>
              </li>
            )
          )}

          <li className="eth-address">
            {ethAddress ? (
              <>
                <a href="javascript:void(0)">{ethAddress}</a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <a href="javascript:void(0)" onClick={onHandleDisconnect}>
                      <FaSignOutAlt /> Disconnect
                    </a>
                  </li>
                </ul>
              </>
            ) : (
              <Spin spinning={isConnecting}>
                <a
                  href="javascript:void(0)"
                  onClick={onLoginHandlerWithMetaMark}
                >
                  Connect Wallet
                </a>
              </Spin>
            )}
          </li>
        </ul>
      </div>
    </Header>
  )
}

HeaderCPN.propTypes = {
  onLogin: PropTypes.func,
}
