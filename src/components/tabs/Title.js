import styled from 'styled-components'

const Title = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media (orientation: portrait) {
    left: 50%;
    transform: translateX(-50%);
  }

  @media (orientation: landscape) {
    left: 0;
  }
`
export default Title
