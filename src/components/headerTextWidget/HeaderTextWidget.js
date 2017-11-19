import React from 'react'
import StyledHeaderTextWidget from './StyledHeaderTextWidget'
import ShopSmartText from './ShopSmartText'
import TitleText from './TitleText'
import SubtitleText from './SubtitleText'
import Button from '../button/Button'

const HeaderTextWidget = () => (
  <StyledHeaderTextWidget>
    <ShopSmartText>SHOP SMART</ShopSmartText>
    <TitleText>Real-time Shopping Online Experiences</TitleText>
    <SubtitleText>Bridging online and real-time shopping</SubtitleText>
    <Button>SEE THE EXPERIENCE</Button>
  </StyledHeaderTextWidget>
)

export default HeaderTextWidget
