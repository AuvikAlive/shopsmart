import styled from 'styled-components'

const StyledUpgradeAppSection = styled.div`
  background: ${props => props.theme.grayBackground};
  position: relative;

  @media (orientation: portrait) {
    padding: 15vw 5vw;
    text-align: center;
  }

  @media (orientation: landscape) {
    height: 39.2vw;
    padding: 4.66vw 13vw;
  }
`
export default StyledUpgradeAppSection
