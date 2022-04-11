import React from 'react'
import { Section } from 'react-fullpage'

import TitleSection from '../../components/TitleSection'

import imgLeftStory from '../../../assets/images/img-left-story.png'
import imgStory from '../../../assets/images/img-story.png'

export default function StorySection() {
  return (
    <Section>
      <div className="section section-general story-section">
        <img className="img-left-section" src={imgLeftStory} alt="" />
        <div className="container container-vertical-center">
          <TitleSection text="Story" />
          <div className="box-general">
            <div className="img-general">
              <img src={imgStory} alt="" />
            </div>
            <div className="general-desc">
              <h3 className="title">PvP - GUILD WAR</h3>
              <div className="desc">
                MAGIC ISLAND là một vùng đất thần kỳ và nó nằm ở trong tâm trí
                của chính chúng ta, nơi đây bạn sẽ không có sự thay đổi nào về
                tuổi tác - Một lần nữa, bạn được quay trở lại với tâm trí của
                một đứa trẻ. Bạn có thể tự do vui chơi, tự do khám phá, tự do
                sáng tạo, tạo dựng nên một xứ sở thần tiên của chính mình.
                <br />
                Hãy cùng các nhân vật trong game khám phá xứ sở của MAGIC!
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
