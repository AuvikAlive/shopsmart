import styled from 'styled-components'
import whiteLogo from './white-logo.png'

const StyledWhiteLogo = styled.div`
  background-image: url(${whiteLogo});
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: 50%;
  position: absolute;

  @media (orientation: portrait) {
    width: 80vw;
    height: 17.86vw;
    top: 2.5vw;
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
