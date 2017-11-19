import styled from 'styled-components'

const Subtitle = styled.div`
  text-align: center;

  @media (orientation: portrait) {
    font-size: 4vw;
    margin-top: 4vw;
    margin-bottom: 8vw;
  }

  @media (orientation: landscape) {
    font-size: 1vw;
    margin-top: 1vw;
    margin-bottom: 2vw;
  }
`
export default Subtitle
