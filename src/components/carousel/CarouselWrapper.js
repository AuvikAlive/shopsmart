import styled from 'styled-components'
import mobile from './mobile-shell.png'

const CarouselWrapper = styled.div`
  position: relative;

  @media (orientation: portrait) {
    width: 50%;
    left: 25%;
    margin: 20vw 0;
  }

  @media (orientation: landscape) {
    width: 15%;
    left: 50%;
    transform: translateX(-50%);
    margin: 7vw 0;
  }

  > div:first-child::before {
    content: '';
    background-image: url(${mobile});
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    position: absolute;
    width: 138%;
    height: 150%;
    left: -19%;
    top: -15%;
  }
`
export default CarouselWrapper
