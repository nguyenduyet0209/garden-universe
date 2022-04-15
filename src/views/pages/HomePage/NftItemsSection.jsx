import React, { useState } from 'react'
import { Section } from 'react-fullpage'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Navigation, Pagination, A11y } from 'swiper'

import {
  nftAnimalList,
  nftBasinList,
  nftPlantList,
} from '../../../utils/constants'
import TitleSection from '../../components/TitleSection'

export default function NftItemsSection() {
  const [tab, setTab] = useState('basin')
  const onClickTab = (e) => {
    setTab(e.target.dataset.id)
  }

  return (
    <Section>
      <div className="section nft-item-section">
        <div className="container container-vertical-center">
          <TitleSection text="NFT Items" />
          <div className="tab-title-ntf">
            <button
              className={tab === 'basin' ? 'active' : ''}
              onClick={onClickTab}
              data-id="basin"
              disabled={tab === 'basin' ? true : false}
            >
              Hệ thống chậu
            </button>
            <button
              className={tab === 'animal' ? 'active' : ''}
              onClick={onClickTab}
              data-id="animal"
              disabled={tab === 'animal' ? true : false}
            >
              Thú bắt sâu
            </button>
            <button
              className={tab === 'plant' ? 'active' : ''}
              onClick={onClickTab}
              data-id="plant"
              disabled={tab === 'plant' ? true : false}
            >
              Cây đặc biệt
            </button>
          </div>
          <div className="tab-content-nft">
            {tab === 'basin' && (
              <div className="tab-basin">
                <div className="slide-basin reset-slide">
                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ type: 'fraction', clickable: true }}
                  >
                    {nftBasinList.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="slide-item">
                          <div className="image">
                            <img src={`/images/basin/${item.image}`} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            )}

            {tab === 'animal' && (
              <div className="tab-basin">
                {nftAnimalList.length > 0 ? (
                  <div className="slide-basin reset-slide">
                    <Swiper
                      modules={[Navigation, Pagination, A11y]}
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation
                      pagination={{ type: 'fraction', clickable: true }}
                    >
                      {nftAnimalList.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="slide-item">
                            <div className="image">
                              <img
                                src={`/images/animal/${item.image}`}
                                alt=""
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                ) : (
                  <div className="coming-soon">Coming soon</div>
                )}
              </div>
            )}

            {tab === 'plant' && (
              <div className="tab-basin">
                <div className="slide-basin reset-slide">
                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ type: 'fraction', clickable: true }}
                  >
                    {nftPlantList.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="slide-item">
                          <div className="image">
                            <img src={`/images/plant/${item.image}`} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
