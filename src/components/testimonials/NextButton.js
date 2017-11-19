import styled from 'styled-components'
import buttonCommon from './buttonCommon'
import rightArrow from './right-arrow.png'

const NextButton = styled.div`
  ${buttonCommon};
  background-image: url(${rightArrow});

  @media (orientation: portrait) {
    right: -20%;
  }

  @media (orientation: landscape) {
    right: -10%;
  }
`
export default NextButton
