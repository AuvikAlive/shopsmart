import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from '../../store/store'
import theme from '../../theme'
import HeaderSection from '../headerSection/HeaderSection'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HeaderSection />
    </ThemeProvider>
  </Provider>
)

export default App
