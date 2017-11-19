import styled from 'styled-components'

const Subtitle = styled.div`
  text-align: center;
  color: ${props => props.theme.gray};

  @media (orientation: portrait) {
    font-size: 4vw;
  }

  @media (orientation: landscape) {
    font-size: 1vw;
    margin-top: 3.66vw;
  }
`
export default Subtitle
