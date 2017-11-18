import styled from 'styled-components'
import background from './white-phone.png'

const StyledMiddleHeaderWidget = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  @media (orientation: portrait) {
    width: 50vw;
    height: 100vw;
    top: 35vw;
    left: 25vw;
  }

  @media (orientation: landscape) {
    width: 16.33vw;
    height: 33.33vw;
    top: 11vw;
    left: 28.13vw;
  }
`
export default StyledMiddleHeaderWidget
