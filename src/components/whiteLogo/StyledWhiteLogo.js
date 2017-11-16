import styled from 'styled-components'
import whiteLogo from './white-logo.png'

const StyledWhiteLogo = styled.div`
  background-image: url(${whiteLogo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  @media (orientation: portrait) {
    width: 80%;
    height: 100%;
  }

  @media (orientation: landscape) {
    width: 17vw;
    height: 4vw;
    position: absolute;
    top: 1.73vw;
    left: 11vw;
  }
`
export default StyledWhiteLogo
