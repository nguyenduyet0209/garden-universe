import React from 'react'
import { Section } from 'react-fullpage'

import TitleSection from '../../components/TitleSection'

export default function GameplaySection() {
  return (
    <Section>
      <div className="section section-general gameplay-section">
        <div className="container container-vertical-center">
          <TitleSection text="Gameplay" />
          <div className="box-general">
            <div className="img-general">
              <img src="/images/image-gameplay.png" alt="" />
            </div>
            <div className="general-desc">
              <h3 className="title">nursery liningsR</h3>
              <div className="desc">
                The maximum number of nursery linings that may be purchased is
                the same as the maximum number of pots that can currently be
                placed in the cloud layer. As an example: When there is just one
                cloud layer that may be opened, in each cloud layer only a
                maximum of 9 pots can be placed, and a total of 9 nursery
                linings can be purchased.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
