import styled from 'styled-components'

const StyledFooterSection = styled.div`
  background: ${props => props.theme.grayBackground};
  color: ${props => props.theme.gray};

  @media (orientation: portrait) {
    padding: 15vw 5vw;
    text-align: center;
  }

  @media (orientation: landscape) {
    height: 21.66vw;
    padding: 4.66vw 12.86vw;
    display: flex;
    justify-content: space-around;
    font-size: 0.9vw;
  }
`
export default StyledFooterSection
