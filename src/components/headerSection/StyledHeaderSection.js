import styled from 'styled-components'

const StyledHeaderSection = styled.div`
  width: 100vw;
  position: relative;

  @media (orientation: portrait) {
    background: ${props => props.theme.red};
    height: 40vw;
  }

  @media (orientation: landscape) {
    height: 40vw;
  }
`
export default StyledHeaderSection
