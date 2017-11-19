import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const GetStartedButton = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: block;
  text-align: center;

  @media (orientation: landscape) {
    border: 1px solid white;
    border-radius: 0.2vw;
    font-size: 1vw;
    padding: 0.5vw 1.5vw;
  }

  @media (orientation: portrait) {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    font-size: 5vw;
    padding: 3.5vw;
  }
`

export default GetStartedButton
