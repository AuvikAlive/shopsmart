import styled from 'styled-components'

const Position = styled.div`
  color: ${props => props.theme.gray};

  @media (orientation: portrait) {
    text-align: left;
  }

  @media (orientation: landscape) {
  }
`
export default Position
