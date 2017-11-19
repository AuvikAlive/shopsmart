import styled from 'styled-components'

const Title = styled.div`
  text-align: center;
  color: white;

  @media (orientation: portrait) {
    font-size: 8vw;
    margin-top: 4vw;
  }

  @media (orientation: landscape) {
    font-size: 2vw;
    margin-top: 1vw;
  }
`
export default Title
