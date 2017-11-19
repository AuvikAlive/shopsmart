import React from 'react'
import StyledSocialLinks from './StyledSocialLinks'
import Link from './Link'
import facebook from './social-facebook-circle.png'
import twitter from './social-twitter-circle.png'
import googleplus from './social-googleplus-circle.png'
import linkedin from './social-linkedin-circle.png'
import youtube from './social-youtube-circle.png'

const SocialLinks = () => (
  <StyledSocialLinks>
    <Link to="/">
      <img src={facebook} alt="" />
    </Link>
    <Link to="/">
      <img src={twitter} alt="" />
    </Link>
    <Link to="/">
      <img src={googleplus} alt="" />
    </Link>
    <Link to="/">
      <img src={linkedin} alt="" />
    </Link>
    <Link to="/">
      <img src={youtube} alt="" />
    </Link>
  </StyledSocialLinks>
)

export default SocialLinks
