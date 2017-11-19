import styled from 'styled-components'
import background from './upgrade-app-background.jpg'

const StyledUpgradeAppSection = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  color: white;

  @media (orientation: portrait) {
    padding: 15vw 5vw;
    text-align: center;
  }

  @media (orientation: landscape) {
    height: 30.26vw;
    padding: 4.66vw 13vw;
  }
`
export default StyledUpgradeAppSection
