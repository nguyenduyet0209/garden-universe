import React from 'react'
import { Section } from 'react-fullpage'

import TitleSection from '../../components/TitleSection'

import imgGameplay from '../../../assets/images/img-gameplay.png'

export default function GameplaySection() {
  return (
    <Section>
      <div className="section section-general gameplay-section">
        <div className="container container-vertical-center">
          <TitleSection text="Gameplay" />
          <div className="box-general">
            <div className="img-general">
              <img src={imgGameplay} alt="" />
            </div>
            <div className="general-desc">
              <h3 className="title">PvP - GUILD WAR</h3>
              <div className="desc">
                Tất cả người chơi trong cùng 1 guild sẽ tham gia vào đánh boss.
                Sau khi kết thúc, phần thưởng sẽ được phân bổ theo % lượng
                damage người chơi gây ra. tất cả người chơi trong cùng 1 guild
                sẽ tham gia vào đánh boss. Sau khi kết thúc, phần thưởng sẽ được
                phân bổ theo % lượng damage người chơi gây ra.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
