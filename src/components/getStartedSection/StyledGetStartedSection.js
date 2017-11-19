import styled from 'styled-components'

const StyledGetStartedSection = styled.div`
  background: ${props => props.theme.red};
  color: white;
  text-align: center;

  @media (orientation: portrait) {
    padding: 15vw 5vw;
  }

  @media (orientation: landscape) {
    height: 21.66vw;
    padding: 4.66vw 27.2vw;
  }
`
export default StyledGetStartedSection
