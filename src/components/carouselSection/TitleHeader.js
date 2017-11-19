import styled from 'styled-components'

const TitleHeader = styled.div`
  text-align: center;
  color: ${props => props.theme.dark};

  @media (orientation: portrait) {
    font-size: 8vw;
    margin-top: 2vw;
  }

  @media (orientation: landscape) {
    font-size: 2vw;
    margin-top: 0.5vw;
  }
`
export default TitleHeader
