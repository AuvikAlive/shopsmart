import styled from 'styled-components'

const TabContent = styled.div`
  color: ${props => props.theme.gray};

  @media (orientation: portrait) {
    text-align: center;
    font-size: 3.6vw;
  }

  @media (orientation: landscape) {
    font-size: 0.9vw;
  }
`
export default TabContent
