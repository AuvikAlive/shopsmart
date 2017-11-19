// @flow

import React from 'react'
import { connect } from 'react-redux'
import { toggleMenu } from '../../store/actions/actions'
import NavMenu from './NavMenu'

const NavMenuContainer = props => <NavMenu {...props} />

const mapStateToProps = state => {
  const { menuItems, menuActive } = state.menu
  return {
    menuItems,
    isActive: menuActive
  }
}

const mapDispatchToProps = {
  toggleMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuContainer)
