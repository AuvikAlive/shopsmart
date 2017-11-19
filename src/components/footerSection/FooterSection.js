import React from 'react'
import StyledFooterSection from './StyledFooterSection'
import RedLogo from '../redLogo/RedLogo'
import QuickLinks from './QuickLinks'
import HelpAndSupport from './HelpAndSupport'
import Trademark from './Trademark'

const FooterSection = () => (
  <StyledFooterSection>
    <RedLogo />
    <QuickLinks />
    <HelpAndSupport />
    <Trademark />
  </StyledFooterSection>
)

export default FooterSection
