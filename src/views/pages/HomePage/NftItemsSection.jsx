import React, { useState } from 'react'
import { Section } from 'react-fullpage'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { nftSlieList } from '../../../utils/constants'
import TitleSection from '../../components/TitleSection'

import imgNftSlide from '../../../assets/images/img-nft-slide.png'

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
              className={tab === 'tree' ? 'active' : ''}
              onClick={onClickTab}
              data-id="tree"
              disabled={tab === 'tree' ? true : false}
            >
              Cây đặc biệt
            </button>
          </div>
          <div className="tab-content-nft">
            {/* animal
          tree */}
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
                    {nftSlieList.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="slide-item">
                          <h3 className="title">{item.name}</h3>
                          <div className="image">
                            <img src={imgNftSlide} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="desc-basin">
                  Tất cả người chơi trong cùng 1 guild sẽ tham gia vào đánh
                  boss. Sau khi kết thúc, phần thưởng sẽ được phân bổ theo %
                  lượng damage người chơi gây ra. tất cả người chơi trong cùng 1
                  guild sẽ tham gia vào đánh boss. Sau khi kết thúc, phần thưởng
                  sẽ được phân bổ theo % lượng damage người chơi gây ra.
                </div>
              </div>
            )}

            {tab === 'animal' && (
              <div className="tab-basin">
                <div className="slide-basin reset-slide">
                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ type: 'fraction', clickable: true }}
                  >
                    {nftSlieList.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="slide-item">
                          <h3 className="title">{item.name}</h3>
                          <div className="image">
                            <img src={imgNftSlide} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="desc-basin">
                  Tất cả người chơi trong cùng 1 guild sẽ tham gia vào đánh
                  boss. Sau khi kết thúc, phần thưởng sẽ được phân bổ theo %
                  lượng damage người chơi gây ra. tất cả người chơi trong cùng 1
                  guild sẽ tham gia vào đánh boss. Sau khi kết thúc, phần thưởng
                </div>
              </div>
            )}

            {tab === 'tree' && (
              <div className="tab-basin">
                <div className="slide-basin reset-slide">
                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ type: 'fraction', clickable: true }}
                  >
                    {nftSlieList.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="slide-item">
                          <h3 className="title">{item.name}</h3>
                          <div className="image">
                            <img src={imgNftSlide} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="desc-basin">
                  Tất cả người chơi trong cùng 1 guild sẽ tham gia vào đánh
                  boss. Sau khi kết thúc, phần thưởng sẽ được phân bổ theo %
                  lượng damage người chơi gây ra. tất cả người chơi trong cùng 1
                  guild sẽ tham gia vào đánh boss.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
