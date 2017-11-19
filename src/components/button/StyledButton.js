import styled from 'styled-components'

const StyledButton = styled.button`
  background: transparent;
  color: white;
  outline: none;
  border: 1px solid white;
  border-radius: 0.2vw;
  cursor: pointer;

  @media (orientation: portrait) {
    font-size: 5vw;
  }

  @media (orientation: landscape) {
    font-size: 1vw;
    padding: 0.5vw 1.5vw;
  }
`
export default StyledButton
