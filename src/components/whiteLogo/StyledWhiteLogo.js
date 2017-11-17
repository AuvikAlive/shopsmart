import styled from 'styled-components'
import whiteLogo from './white-logo.png'

const StyledWhiteLogo = styled.div`
  background-image: url(${whiteLogo});
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: 50%;
  position: absolute;

  @media (orientation: portrait) {
    width: 80%;
    height: 100%;
    top: 0;
    right: 0;
  }

  @media (orientation: landscape) {
    width: 17vw;
    height: 4vw;
    top: 1.73vw;
    left: 11vw;
  }
`
export default StyledWhiteLogo
