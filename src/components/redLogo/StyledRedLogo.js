import styled from 'styled-components'
import redLogo from './red-logo.png'

const StyledRedLogo = styled.div`
  background-image: url(${redLogo});
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: 50%;

  @media (orientation: portrait) {
    width: 80%;
    height: 17.86vw;
    position: relative;
    left: 10%;
  }

  @media (orientation: landscape) {
    width: 17vw;
    height: 4vw;
    position: relative;
    top: -1.1vw;
  }
`
export default StyledRedLogo
