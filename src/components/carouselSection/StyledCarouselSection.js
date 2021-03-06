import styled from 'styled-components'

const StyledCarouselSection = styled.div`
  width: 100%;
  background: ${props => props.theme.grayBackground};

  @media (orientation: portrait) {
    padding: 15vw 5vw;
  }

  @media (orientation: landscape) {
    height: 56vw;
    padding: 7.73vw;
  }
`
export default StyledCarouselSection
