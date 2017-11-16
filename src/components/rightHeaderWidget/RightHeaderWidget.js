import styled from 'styled-components'
import { red } from '../../theme'

const RightHeaderWidget = styled.div`
  @media (orientation: portrait) {
    display: none;
  }
  @media (orientation: landscape) {
    width: calc(100vw - 36.33vw);
    height: 100%;
    background: ${red};
    position: absolute;
    top: 0;
    right: 0;
  }
`

export default RightHeaderWidget
