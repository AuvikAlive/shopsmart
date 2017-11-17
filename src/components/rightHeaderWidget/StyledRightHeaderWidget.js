import styled from 'styled-components'

const StyledRightHeaderWidget = styled.div`
  background: ${props => props.theme.red};

  @media (orientation: portrait) {
    display: none;
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
