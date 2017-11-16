import React from 'react'
import styled from 'styled-components'
import LeftHeaderWidget from '../leftHeaderWidget/LeftHeaderWidget'
import RightHeaderWidget from '../rightHeaderWidget/RightHeaderWidget'

const HeaderSection = styled.div`
  position: relative;
  width: 100vw;
  height: 40vw;
`

export default () => (
  <HeaderSection>
    <LeftHeaderWidget />
    <RightHeaderWidget />
  </HeaderSection>
)
