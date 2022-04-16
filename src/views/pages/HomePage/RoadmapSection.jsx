import React from 'react'
import { Section } from 'react-fullpage'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import { useViewport } from '../../../hooks/useViewport'
import TitleSection from '../../components/TitleSection'

export default function RoadmapSection() {
  const viewPort = useViewport()
  const isMobile = viewPort.width <= 768

  return (
    <Section>
      <div className="section roadmap-section">
        <div className="container container-vertical-center">
          <TitleSection text="Roadmap" />
          {isMobile ? (
            <div className="slide-roadmap">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={false}
                pagination={{ type: 'fraction', clickable: true }}
              >
                <SwiperSlide>
                  <div className="slide-roadmap-item">
                    <h3 className="title">Q 2</h3>
                    <div className="content">
                      <ul>
                        <li>Skygarden game</li>
                        <li>Crafting items</li>
                        <li>Maket/Shop/Trade</li>
                        <li>Breeding</li>
                        <li>Pet</li>
                        <li>Connecting/Social</li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-roadmap-item">
                    <h3 className="title">Q 3</h3>
                    <div className="content">
                      <ul>
                        <li>Fruits of war</li>
                        <li>Garden aquarium</li>
                        <li>Mine zone</li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-roadmap-item">
                    <h3 className="title">Q 4</h3>
                    <div className="content">
                      <ul>
                        <li>Entire gameplay</li>
                        <li>New feature updates</li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          ) : (
            <div className="box-roadmap">
              <div className="roadmap-item">
                <h3 className="title">Q 2</h3>
                <div className="content">
                  <ul>
                    <li>Skygarden game</li>
                    <li>Crafting items</li>
                    <li>Maket/Shop/Trade</li>
                    <li>Breeding</li>
                    <li>Pet</li>
                    <li>Connecting/Social</li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-item">
                <h3 className="title">Q 3</h3>
                <div className="content">
                  <ul>
                    <li>Fruits of war</li>
                    <li>Garden aquarium</li>
                    <li>Mine zone</li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-item">
                <h3 className="title">Q 4</h3>
                <div className="content">
                  <ul>
                    <li>Entire gameplay</li>
                    <li>New feature updates</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
