// @flow

import React from 'react'
import StyledNavMenu from './StyledNavMenu'
import Link from './Link'
import SignInLink from './SignInLink'
import GetStartedButton from './GetStartedButton'

type Props = {
  isActive: boolean,
  toggleMenu: () => void,
  menuItems: Array<{
    name: string
  }>
}

const NavMenu = (props: Props) => {
  const { isActive, toggleMenu, menuItems } = props

  return (
    <StyledNavMenu isActive={isActive}>
      {menuItems.map((item, index) => {
        switch (item.name) {
          case 'Sign In':
            return (
              <SignInLink onClick={toggleMenu} to="/" key={item.name}>
                {item.name.toLocaleUpperCase()}
              </SignInLink>
            )

          case 'Get Started':
            return (
              <GetStartedButton onClick={toggleMenu} to="/" key={item.name}>
                {item.name.toLocaleUpperCase()}
              </GetStartedButton>
            )

          default:
            return (
              <Link onClick={toggleMenu} to="/" key={item.name}>
                {item.name.toLocaleUpperCase()}
              </Link>
            )
        }
      })}
    </StyledNavMenu>
  )
}

export default NavMenu
