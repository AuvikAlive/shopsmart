import styled from 'styled-components'

const TitleWrapper = styled.div`
  position: relative;

  @media (orientation: portrait) {
    height: 40vw;
  }

  @media (orientation: landscape) {
    height: 10vw;
  }
`
export default TitleWrapper
