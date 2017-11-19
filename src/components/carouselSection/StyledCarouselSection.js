import styled from 'styled-components'

const StyledCarouselSection = styled.div`
  width: 100%;

  @media (orientation: portrait) {
    padding: 15vw 5vw;
  }

  @media (orientation: landscape) {
    height: 56vw;
    background: ${props => props.theme.grayBackground};
    padding: 7.73vw;
  }
`
export default StyledCarouselSection
