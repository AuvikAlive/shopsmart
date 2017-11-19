import styled from 'styled-components'

const StyledButton = styled.a`
  background: transparent;
  color: white;
  outline: none;
  border: 1px solid white;
  cursor: pointer;

  @media (orientation: portrait) {
    font-size: 5vw;
    padding: 2vw 6vw;
    border-radius: 1vw;
  }

  @media (orientation: landscape) {
    font-size: 1vw;
    padding: 0.5vw 1.5vw;
    border-radius: 0.2vw;
  }
`
export default StyledButton
