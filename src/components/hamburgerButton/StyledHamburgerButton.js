import styled from 'styled-components'

const StyledHamburgerButton = styled.button`
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  outline: none;
  overflow: hidden;

  @media (orientation: portrait) {
    width: 20vw;
    height: 20vw;
    position: absolute;
    left: 0;
    top: 0;
  }

  @media (orientation: landscape) {
    display: none;
  }
`

export default StyledHamburgerButton
