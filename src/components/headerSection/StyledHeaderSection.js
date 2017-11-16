import styled from 'styled-components'
import { red } from '../../theme'

const StyledHeaderSection = styled.div`
  width: 100vw;

  @media (orientation: portrait) {
    background: ${red};
    height: 40vw;
  }

  @media (orientation: landscape) {
    position: relative;
    height: 40vw;
  }
`
export default StyledHeaderSection
