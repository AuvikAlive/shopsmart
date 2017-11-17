import styled from 'styled-components'

const active = `
  transition-delay: 0s;
  transition-timing-function: ease-out;
  background-color: transparent;
`

const tranformPercent = '150%'

const activeBefore = `
  left: -${tranformPercent};
  top: -${tranformPercent};
  transform: translate3d(${tranformPercent}, ${tranformPercent}, 0) rotate(45deg);
  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const activeAfter = `
  right: -${tranformPercent};
  top: -${tranformPercent};
  transform: translate3d(-${tranformPercent}, ${tranformPercent}, 0) rotate(-45deg);
  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const Bars = styled.span`
  width: 70%;
  height: 7%;
  border-radius: 100vw;
  position: absolute;
  display: block;
  top: 50%;
  left: 10%;
  transition: background-color 0.125s 0.175s ease-in;
  background-color: white;
  ${props => (props.isActive ? active : '')};

  &::before,
  &::after {
    width: 100%;
    height: 100%;
    border-radius: 100vw;
    position: absolute;
    display: block;
    top: 50%;
    content: '';
    display: block;
    background-color: white;
  }

  &::before {
    top: 200%;
    left: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
      top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
    ${props => (props.isActive ? activeBefore : '')};
  }
  &::after {
    top: -200%;
    right: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
      top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
    ${props => (props.isActive ? activeAfter : '')};
  }
`

export default Bars
