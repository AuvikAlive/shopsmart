import styled from 'styled-components'

const StyledHeaderSection = styled.div`
  width: 100%;
  position: relative;

  @media (orientation: portrait) {
    background: ${props => props.theme.red};
    height: 225vw;
  }

  @media (orientation: landscape) {
    height: 40vw;
  }
`
export default StyledHeaderSection
