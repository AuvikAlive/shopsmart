import React from 'react'
import StyledHeaderSection from './StyledHeaderSection'
import LeftHeaderWidget from '../leftHeaderWidget/LeftHeaderWidget'
import RightHeaderWidget from '../rightHeaderWidget/RightHeaderWidget'
import HamburgerButton from '../hamburgerButton/HamburgerButtonContainer'
import WhiteLogo from '../whiteLogo/WhiteLogo'

const HeaderSection = () => (
  <StyledHeaderSection>
    <LeftHeaderWidget />
    <RightHeaderWidget />
    <HamburgerButton />
    <WhiteLogo />
  </StyledHeaderSection>
)

export default HeaderSection
