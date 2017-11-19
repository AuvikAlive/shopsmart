import styled from 'styled-components'

const TitleFooter = styled.div`
  text-align: center;
  color: ${props => props.theme.dark};
  font-weight: bold;

  @media (orientation: portrait) {
    font-size: 4vw;
    margin-bottom: 2vw;
  }

  @media (orientation: landscape) {
    font-size: 1vw;
    margin-bottom: 0.5vw;
  }
`
export default TitleFooter
