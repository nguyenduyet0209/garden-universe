import React from 'react'
import { Section } from 'react-fullpage'

import {
  FaTwitterSquare,
  FaTelegramPlane,
  FaYoutube,
  FaFacebookMessenger,
} from 'react-icons/fa'

import TitleSection from '../../components/TitleSection'
import logo from '../../../assets/images/logo.png'
import imgParter from '../../../assets/images/img-partner.png'

export default function PartnerSection() {
  return (
    <Section>
      <div className="section partners-section">
        <div className="container">
          <TitleSection text="Partners" />
          <div className="partner-list">
            <img src={imgParter} alt="" />
            <img src={imgParter} alt="" />
            <img src={imgParter} alt="" />
            <img src={imgParter} alt="" />
            <img src={imgParter} alt="" />
            <img src={imgParter} alt="" />
            <img src={imgParter} alt="" />
            <img src={imgParter} alt="" />
            <img src={imgParter} alt="" />
            <img src={imgParter} alt="" />
          </div>
        </div>
        <div className="section-footer">
          <div className="container">
            <div className="box-footer">
              <div className="footer-logo">
                <img src={logo} alt="" />
              </div>
              <div className="footer-reserved">
                <p>Secured By:</p>
                <p>Copyright @ 2021 Fantasy BOW</p>
                <p>Labs. All Rights Reserved</p>
              </div>
              <div className="footer-socia">
                <ul>
                  <li>
                    <a href="#">
                      <FaTwitterSquare />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTelegramPlane />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebookMessenger />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
