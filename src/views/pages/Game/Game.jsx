import React from 'react'
import { Link } from 'react-router-dom'
import Unity, { UnityContext } from 'react-unity-webgl'

import { useAppSelector } from '../../../app/hook'

import logo from '../../../assets/images/logo.png'

import './styles.scss'

export default function Game() {
  const name = 'GoldMinerWebGL'
  const { gameVersion } = useAppSelector((state) => state.auth)

  const unityContext = new UnityContext({
    loaderUrl: `${gameVersion}${name}.loader.js`,
    dataUrl: `${gameVersion}${name}.data.gz`,
    frameworkUrl: `${gameVersion}${name}.framework.js.gz`,
    codeUrl: `${gameVersion}${name}.wasm.gz`,
  })

  return (
    <article className="game">
      <section className="game-header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
      </section>
      <section className="game-webgl">
        <Unity unityContext={unityContext} />
      </section>
    </article>
  )
}
