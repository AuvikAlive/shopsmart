// @flow

import React from 'react'
import { connect } from 'react-redux'
import { toggleMenu } from '../../store/actions/actions'
import HamburgerButton from './HamburgerButton'

const HamburgerContainer = props => <HamburgerButton {...props} />

const mapStateToProps = state => ({
  isActive: state.menu.menuActive
})

const mapDispatchToProps = {
  toggleMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerContainer)
