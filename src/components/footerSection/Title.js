import styled from 'styled-components'

const Title = styled.div`
  color: ${props => props.theme.dark};

  @media (orientation: portrait) {
    font-size: 4vw;
    margin: 4vw 0;
  }

  @media (orientation: landscape) {
    font-size: 1vw;
    margin-bottom: 1vw;
  }
`
export default Title
