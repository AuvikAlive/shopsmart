import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: block;
  text-align: center;

  @media (orientation: portrait) {
    border-top: 1px solid white;
    font-size: 5vw;
    padding: 3.5vw;

    &:last-child {
      border-bottom: 1px solid white;
    }
  }

  @media (orientation: landscape) {
    text-shadow: none;
    transition: color 0.3s;
    position: relative;
    font-size: 1vw;

    &:hover,
    &:focus {
      color: #fff;
      &:before,
      &:after {
        opacity: 1;
        transform: translateY(-1vw);
      }
    }

    &:before,
    &:after {
      position: absolute;
      left: -25%;
      width: 150%;
      height: 2px;
      background: #fff;
      content: '';
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;
    }

    &:before {
      top: 0;
      transform: translateY(-2vw);
    }

    &:after {
      bottom: -1.7vw;
      transform: translateY(0.5vw);
    }
  }
`

export default Link
