import { SectionsContainer } from 'react-fullpage'

import HeaderCPN from '../../components/HeaderCPN'
import HeroSection from './HeroSection'
import StorySection from './StorySection'
import GameplaySection from './GameplaySection'
import NftItemsSection from './NftItemsSection'
import RoadmapSection from './RoadmapSection'
import TeamSection from './TeamSection'
import AdvisorsSection from './AdvisorsSection'
import PartnerSection from './PartnerSection'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './style.scss'

export default function HomePage() {
  const options = {
    sectionClassName: 'section',
    anchors: [
      'hero',
      'story',
      'gameplay',
      'nftitems',
      'roadmap',
      'team',
      'advisor',
      'partners',
    ],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    sectionPaddingTop: '0',
    sectionPaddingBottom: '0',
    arrowNavigation: false,
  }

  return (
    <>
      <HeaderCPN />
      <SectionsContainer {...options}>
        <HeroSection />
        <StorySection />
        <GameplaySection />
        <NftItemsSection />
        <RoadmapSection />
        <TeamSection />
        <AdvisorsSection />
        <PartnerSection />
      </SectionsContainer>
    </>
  )
}
