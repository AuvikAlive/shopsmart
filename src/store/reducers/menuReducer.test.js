import menuReducer, { initialState } from './menuReducer'
import { toggleMenu } from '../actions/actions'

test('menuReducer returns initial state when type does not match', () => {
  const state = menuReducer(undefined, {})
  const expectedState = initialState

  expect(state).toEqual(expectedState)
})

test('menuReducer reuturns toggled menuActive state', () => {
  const state = menuReducer(initialState, toggleMenu())
  const expectedState = { ...initialState, menuActive: true }

  expect(state).toEqual(expectedState)
})
