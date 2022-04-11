import React from 'react'
import { Section } from 'react-fullpage'

import TitleSection from '../../components/TitleSection'
import imgTeam from '../../../assets/images/img-team.png'
import { teamList } from '../../../utils/constants'

export default function TeamSection() {
  return (
    <Section>
      <div className="section team-section">
        <div className="container container-vertical-center">
          <TitleSection text="Team" />
          <div className="box-team">
            {teamList.map((item) => (
              <div className="team-item" key={item.id}>
                <div className="about">
                  <h3 className="title">{item.fullname}</h3>
                  <p>{item.position}</p>
                </div>
                <div className="avatar">
                  <img src={imgTeam} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
