import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SignInLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: block;
  text-align: center;

  @media (orientation: landscape) {
    font-size: 1vw;
  }

  @media (orientation: portrait) {
    border-top: 1px solid white;
    font-size: 5vw;
    padding: 3.5vw;
  }
`

export default SignInLink
