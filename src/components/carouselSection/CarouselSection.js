import React from 'react'
import StyledCarouselSection from './StyledCarouselSection'
import SubtitleFooter from './SubtitleFooter'
import SubtitleHeader from './SubtitleHeader'
import TitleHeader from './TitleHeader'
import TitleFooter from './TitleFooter'
import Carousel from '../carousel/Carousel'

const CarouselSection = () => (
  <StyledCarouselSection>
    <SubtitleHeader>ONLINE CAPABILITIES &amp; ANALYTICS</SubtitleHeader>
    <TitleHeader>
      Enhance your customers instore shop at specifics products or places
    </TitleHeader>

    <Carousel>
      <img src="http://via.placeholder.com/220x350" alt="slide" />
      <img src="http://via.placeholder.com/220x350" alt="slide" />
      <img src="http://via.placeholder.com/220x350" alt="slide" />
      <img src="http://via.placeholder.com/220x350" alt="slide" />
      <img src="http://via.placeholder.com/220x350" alt="slide" />
      <img src="http://via.placeholder.com/220x350" alt="slide" />
    </Carousel>

    <TitleFooter>Product, Customer &amp; Staff Location</TitleFooter>
    <SubtitleFooter>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout
    </SubtitleFooter>
  </StyledCarouselSection>
)

export default CarouselSection
