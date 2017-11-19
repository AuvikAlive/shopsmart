import styled from 'styled-components'
import buttonCommon from './buttonCommon'
import leftArrow from './left-arrow.png'

const PrevButton = styled.div`
  ${buttonCommon};
  left: -35%;
  background-image: url(${leftArrow});

  @media (orientation: portrait) {
  }

  @media (orientation: landscape) {
  }
`
export default PrevButton
