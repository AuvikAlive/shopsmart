import styled from 'styled-components'

const StyledHeaderTextWidget = styled.div`
  position: absolute;
  color: white;

  @media (orientation: portrait) {
    width: 80vw;
    left: 10vw;
    top: 150vw;
    text-align: center;
  }

  @media (orientation: landscape) {
    width: 29.66vw;
    top: 20vw;
    right: 19.33vw;
  }
`

export default StyledHeaderTextWidget
