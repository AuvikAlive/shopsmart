import React from 'react'
import StyledHeaderSection from './StyledHeaderSection'
import LeftHeaderWidget from '../leftHeaderWidget/LeftHeaderWidget'
import RightHeaderWidget from '../rightHeaderWidget/RightHeaderWidget'
import WhiteLogo from '../whiteLogo/WhiteLogo'

const HeaderSection = () => (
  <StyledHeaderSection>
    <LeftHeaderWidget />
    <RightHeaderWidget />
    <WhiteLogo />
  </StyledHeaderSection>
)

export default HeaderSection
