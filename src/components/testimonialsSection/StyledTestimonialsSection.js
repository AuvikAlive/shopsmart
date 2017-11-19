import styled from 'styled-components'

const StyledTestimonialsSection = styled.div`
  background: ${props => props.theme.deepBlue};

  @media (orientation: portrait) {
    padding: 15vw 5vw;
    text-align: center;
  }

  @media (orientation: landscape) {
    padding: 4.66vw 13vw;
    height: 38.4vw;
  }
`
export default StyledTestimonialsSection
