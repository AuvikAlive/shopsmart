import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import store from '../../store/store'
import theme from '../../theme'
import HeaderSection from '../headerSection/HeaderSection'
import CarouselSection from '../carouselSection/CarouselSection'

const App = () => (
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <HeaderSection />
          <CarouselSection />
        </div>
      </ThemeProvider>
    </Router>
  </Provider>
)

export default App
