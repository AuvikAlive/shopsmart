import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink)`
  color: ${props => props.theme.gray};
  text-decoration: none;
  display: block;

  @media (orientation: portrait) {
    margin: 2vw 0;
  }

  @media (orientation: landscape) {
    font-size: 0.9vw;
    margin: 0.5vw 0;
    text-align: left;
  }
`

export default Link
