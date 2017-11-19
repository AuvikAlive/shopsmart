import styled from 'styled-components'

const Index = styled.div`
  color: ${props => props.theme.lightGray};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;

  @media (orientation: portrait) {
    left: 50%;
    transform: translate3d(-50%, -30%, 0);
    font-size: 12vw;
  }

  @media (orientation: landscape) {
    left: -30px;
    font-size: 3vw;
  }
`
export default Index
