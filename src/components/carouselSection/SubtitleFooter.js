import styled from 'styled-components'

const SubtitleFooter = styled.div`
  text-align: center;
  color: ${props => props.theme.gray};

  @media (orientation: portrait) {
    font-size: 4vw;
  }

  @media (orientation: landscape) {
    font-size: 1vw;
  }
`
export default SubtitleFooter
