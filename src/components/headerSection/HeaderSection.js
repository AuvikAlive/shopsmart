import React from 'react'
import StyledHeaderSection from './StyledHeaderSection'
import LeftHeaderWidget from '../leftHeaderWidget/LeftHeaderWidget'
import RightHeaderWidget from '../rightHeaderWidget/RightHeaderWidget'
import HamburgerButton from '../hamburgerButton/HamburgerButtonContainer'
import WhiteLogo from '../whiteLogo/WhiteLogo'
import MiddleHeaderWidget from '../middleHeaderWidget/MiddleHeaderWidget'
import HeaderTextWidget from '../headerTextWidget/HeaderTextWidget'

const HeaderSection = () => (
  <StyledHeaderSection>
    <LeftHeaderWidget />
    <RightHeaderWidget />
    <HamburgerButton />
    <WhiteLogo />
    <MiddleHeaderWidget />
    <HeaderTextWidget />
  </StyledHeaderSection>
)

export default HeaderSection
