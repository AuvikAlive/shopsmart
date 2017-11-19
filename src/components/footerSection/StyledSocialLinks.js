import styled from 'styled-components'

const SocialLinks = styled.div`
  display: flex;
  img {
    margin-right: 0.5vw;
  }
  @media (orientation: portrait) {
    justify-content: center;
  }

  @media (orientation: landscape) {
    margin-top: 1vw;
  }
`
export default SocialLinks
