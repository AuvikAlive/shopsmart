import styled from 'styled-components'

const Bars = styled.span`
  width: 80%;
  height: 10%;
  border-radius: 100vw;
  position: absolute;
  display: block;
  top: 50%;
  left: 5%;
  transition: background-color 0.125s 0.175s ease-in;
  background-color: white;

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
    top: 3.5vw;
    left: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
      top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
  }
  &::after {
    top: -3.5vw;
    right: 0;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
      top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
  }
`

export default Bars
