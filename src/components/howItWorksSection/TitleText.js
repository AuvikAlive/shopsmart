import styled from 'styled-components'

const TitleText = styled.div`
  text-align: center;
  color: ${props => props.theme.gray};

  @media (orientation: portrait) {
    font-size: 8vw;
    margin-top: 2vw;
  }

  @media (orientation: landscape) {
    font-size: 2vw;
    margin-top: 0.5vw;
  }
`
export default TitleText
