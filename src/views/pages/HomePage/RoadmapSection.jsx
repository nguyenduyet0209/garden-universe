import React from 'react'
import { Section } from 'react-fullpage'

import TitleSection from '../../components/TitleSection'

export default function RoadmapSection() {
  return (
    <Section>
      <div className="section roadmap-section">
        <div className="container container-vertical-center">
          <TitleSection text="Roadmap" />
          <div className="box-roadmap">
            <div className="roadmap-item">
              <h3 className="title">tháng 3</h3>
              <div className="content">
                - Bán gói Start
                <br />
                - Mở các slot ươm
                <br />
                - Có thể ươm/trồng/thu hoạch
                <br />- Hoàn thiện các tính năng game v1.0
              </div>
            </div>
            <div className="roadmap-item">
              <h3 className="title">tháng 4</h3>
              <div className="content">
                - Bán box pet
                <br />
                - Ra mắt vật nuôi và các trang trại chăn nuôi
                <br />
                - Ra mắt nhà máy sản xuất / chế biến
                <br />- Củ quả đại chiến
              </div>
            </div>
            <div className="roadmap-item">
              <h3 className="title">tháng 5</h3>
              <div className="content">- Vườn thủy cung</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
