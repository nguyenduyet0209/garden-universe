import React from 'react'
import { Section } from 'react-fullpage'

import TitleSection from '../../components/TitleSection'

import imgLeftStory from '../../../assets/images/img-left-story.png'

export default function StorySection() {
  return (
    <Section>
      <div className="section section-general story-section">
        <img className="img-left-section" src={imgLeftStory} alt="" />
        <div className="container container-vertical-center">
          <TitleSection text="Story" />
          <div className="box-general">
            <div className="img-general">
              <img src="/images/image-story.png" alt="" />
            </div>
            <div className="general-desc">
              <h3 className="title">Garden Universe</h3>
              <div className="desc">
                The Garden Universe is a magical land in our own minds where you
                won&apos;t change your age - Once again, you&apos;re back in the
                mind of a child. You are free to have fun, explore, be creative,
                and create your own wonderland. Let&apos;s go on an adventure
                with the game characters in the land of GardenUniverse!
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
