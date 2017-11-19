import styled from 'styled-components'

const TitleText = styled.p`
  @media (orientation: portrait) {
    font-size: 8vw;
    margin: 4vw 0;
  }

  @media (orientation: landscape) {
    font-size: 2vw;
    margin: 1vw 0;
  }
`

export default TitleText
