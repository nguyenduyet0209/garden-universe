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
                slidesPerView={1.15}
                navigation={false}
                pagination={{ type: 'fraction', clickable: true }}
              >
                <SwiperSlide>
                  <div className="slide-roadmap-item">
                    <h3 className="title">Quý 2</h3>
                    <div className="content">
                      <ul>
                        <li>Game Skygarden</li>
                        <li>Chế tạo vật phẩm</li>
                        <li>Maket/Shop/Trade</li>
                        <li>Nuôi gia súc</li>
                        <li>Pet (thú cưng)</li>
                        <li>Connecting/Social</li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-roadmap-item">
                    <h3 className="title">Quý 3</h3>
                    <div className="content">
                      <ul>
                        <li>Củ quả đại chiến</li>
                        <li>Vườn thủy cung</li>
                        <li>Khu mỏ</li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-roadmap-item">
                    <h3 className="title">Quý 4</h3>
                    <div className="content">
                      <ul>
                        <li>Hoàn thiện gameplay</li>
                        <li>Cập nhật các tính năng mới</li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          ) : (
            <div className="box-roadmap">
              <div className="roadmap-item">
                <h3 className="title">Quý 2</h3>
                <div className="content">
                  <ul>
                    <li>Game Skygarden</li>
                    <li>Chế tạo vật phẩm</li>
                    <li>Maket/Shop/Trade</li>
                    <li>Nuôi gia súc</li>
                    <li>Pet (thú cưng)</li>
                    <li>Connecting/Social</li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-item">
                <h3 className="title">Quý 3</h3>
                <div className="content">
                  <ul>
                    <li>Củ quả đại chiến</li>
                    <li>Vườn thủy cung</li>
                    <li>Khu mỏ</li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-item">
                <h3 className="title">Quý 4</h3>
                <div className="content">
                  <ul>
                    <li>Hoàn thiện gameplay</li>
                    <li>Cập nhật các tính năng mới</li>
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
