import styled from 'styled-components'
import background from './red-phone.png'

const RedPhone = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;

  @media (orientation: portrait) {
    position: relative;
    width: 50%;
    height: 100vw;
    left: 25%;
    margin-top: 10vw;
  }

  @media (orientation: landscape) {
    position: absolute;
    width: 16.33vw;
    height: 33.33vw;
    top: 10.3vw;
    left: 28.13vw;
  }
`
export default RedPhone
