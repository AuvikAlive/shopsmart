import styled from 'styled-components'

const StyledNavMenu = styled.nav`
  position: absolute;
  background: ${props => props.theme.red};
  color: white;
  display: flex;

  @media (orientation: portrait) {
    top: 20vw;
    left: 0;
    width: 100%;
    height: 200vw;
    flex-direction: column;
    padding-top: 10vw;
    transition: transform 0.175s ease-out;
    transform: translateX(-100%);
    ${props => (props.isActive ? 'transform: translateX(0)' : '')};
  }

  @media (orientation: landscape) {
    width: 48.66vw;
    top: 3vw;
    right: 13vw;
    justify-content: space-around;
    align-items: center;
  }
`
export default StyledNavMenu
