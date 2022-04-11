import React from 'react'
import { Section } from 'react-fullpage'

import logo from '../../../assets/images/logo.png'
import imgHero from '../../../assets/images/img-hero.png'

export default function HeroSection() {
  return (
    <Section>
      <div className="hero-section">
        <img className="logo" src={logo} />
        <img className="img-hero" src={imgHero} />
        <button className="btn-download">download</button>
      </div>
    </Section>
  )
}
