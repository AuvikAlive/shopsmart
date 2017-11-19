import styled from 'styled-components'

const TabsWrapper = styled.div`
  @media (orientation: portrait) {
    position: relative;
    font-size: 4vw;
  }

  @media (orientation: landscape) {
    position: absolute;
    top: 14.33vw;
    right: 25vw;
    width: 25.33vw;
    font-size: 1vw;
  }

  .react-tabs__tab-list {
    list-style: none;
    margin: 0;
    padding: 0;

    @media (orientation: portrait) {
      text-align: center;
    }

    li {
      display: inline-block;
      border-top: 2px solid ${props => props.theme.gray};
      border-bottom: 2px solid ${props => props.theme.gray};
      color: ${props => props.theme.gray};
      cursor: pointer;
      outline: none;

      @media (orientation: portrait) {
        width: 80%;
        margin: 3vw 0;
        padding: 2vw 4vw;
      }

      @media (orientation: landscape) {
        padding: 0.5vw 1vw;
      }
    }

    .react-tabs__tab--selected {
      border-color: ${props => props.theme.red};
    }
  }
`
export default TabsWrapper
