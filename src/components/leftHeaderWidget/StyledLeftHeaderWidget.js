import styled from 'styled-components'
import background from './womam-holding-phone.png'

const StyledLeftHeaderWidget = styled.div`
  @media (orientation: portrait) {
    display: none;
  }
  @media (orientation: landscape) {
    width: 36.33vw;
    height: 100%;
    background: url(${background});
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export default StyledLeftHeaderWidget
