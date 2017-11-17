// @flow

import React from 'react'
import StyledHamburgerButton from './StyledHamburgerButton'
import Box from './Box'
import Bars from './Bars'

type Props = {
  isActive: boolean,
  toggleMenu: () => void
}

const HamburgerButton = (props: Props) => {
  const { isActive, toggleMenu } = props
  return (
    <StyledHamburgerButton onClick={toggleMenu}>
      <Box>
        <Bars isActive={isActive} />
      </Box>
    </StyledHamburgerButton>
  )
}

export default HamburgerButton
