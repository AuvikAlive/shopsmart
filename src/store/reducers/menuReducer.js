// @flow

import { TOGGLE_MENU } from '../actions/constants'

type State = {
  menuActive: boolean,
  menuItems: Array<{
    name: string,
    isActive: boolean
  }>
}

type Action = {
  type: TOGGLE_MENU
}

export const initialState = {
  menuActive: false,
  menuItems: [
    { name: 'Products', isActive: true },
    { name: 'Resources', isActive: false },
    { name: 'Support', isActive: false },
    { name: 'Sign In', isActive: false },
    { name: 'Get Started', isActive: false }
  ]
}

const menuReducer = (state: State = initialState, action: Action) =>
  action.type === TOGGLE_MENU
    ? { ...state, menuActive: !state.menuActive }
    : state

export default menuReducer
