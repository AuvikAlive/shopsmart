import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import store from '../../store/store'
import theme from '../../theme'
import HeaderSection from '../headerSection/HeaderSection'
import CarouselSection from '../carouselSection/CarouselSection'
import UpgradeAppSection from '../upgradeAppSection/UpgradeAppSection'
import HowItWorksSection from '../howItWorksSection/HowItWorksSection'
import TestimonialsSection from '../testimonialsSection/TestimonialsSection'
import GetStartedSection from '../getStartedSection/GetStartedSection'
import FooterSection from '../footerSection/FooterSection'

const App = () => (
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <HeaderSection />
          <CarouselSection />
          <UpgradeAppSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <GetStartedSection />
          <FooterSection />
        </div>
      </ThemeProvider>
    </Router>
  </Provider>
)

export default App
