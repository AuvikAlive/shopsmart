import styled from 'styled-components'

const Angle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: 100%;
  left: 2%;

  @media (orientation: portrait) {
    border-top: 6vw solid white;
    border-right: 6vw solid transparent;
  }

  @media (orientation: landscape) {
    border-top: 1.5vw solid white;
    border-right: 1.5vw solid transparent;
  }
`
export default Angle
