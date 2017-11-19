import styled from 'styled-components'
import buttonCommon from './buttonCommon'
import leftArrow from './left-arrow.png'

const PrevButton = styled.div`
  ${buttonCommon};

  background-image: url(${leftArrow});

  @media (orientation: portrait) {
    left: -20%;
  }

  @media (orientation: landscape) {
    left: -10%;
  }
`
export default PrevButton
