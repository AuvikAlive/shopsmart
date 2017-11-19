import styled from 'styled-components'

const CarouselWrapper = styled.div`
  position: relative;

  @media (orientation: portrait) {
    left: 0;
    margin: 8vw 0;
    width: 70%;
    left: 15%;
  }

  @media (orientation: landscape) {
    width: 90%;
    margin: 2vw 0;
    left: 50%;
    transform: translateX(-50%);
  }
`
export default CarouselWrapper
