import styled from 'styled-components'
import buttonCommon from './buttonCommon'
import rightArrow from './right-arrow.png'

const NextButton = styled.div`
  ${buttonCommon};
  right: -35%;
  background-image: url(${rightArrow});

  @media (orientation: portrait) {
  }

  @media (orientation: landscape) {
  }
`
export default NextButton
