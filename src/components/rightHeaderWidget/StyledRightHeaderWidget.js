import styled from 'styled-components'
import { red } from '../../theme'

const StyledRightHeaderWidget = styled.div`
  background: ${red};

  @media (orientation: portrait) {
  }

  @media (orientation: landscape) {
    width: calc(100vw - 36.33vw);
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
`

export default StyledRightHeaderWidget
