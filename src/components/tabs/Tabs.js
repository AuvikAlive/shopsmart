import React, { Component } from 'react'
import TabsWrapper from './TabsWrapper'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import TitleWrapper from './TitleWrapper'
import Index from './Index'
import Title from './Title'
import TabContent from './TabContent'

class MyTab extends Component {
  state = { tabIndex: 0 }

  onTabSelect = tabIndex => this.setState({ tabIndex })

  render() {
    const { tabIndex } = this.state
    return (
      <TabsWrapper>
        <Tabs selectedIndex={tabIndex} onSelect={this.onTabSelect}>
          <TabList>
            <Tab>REGISTER</Tab>
            <Tab>USE</Tab>
            <Tab>RELAX</Tab>
          </TabList>

          <TabPanel>
            <TitleWrapper>
              <Index>0{tabIndex + 1}</Index>
              <Title>Register or Login</Title>
            </TitleWrapper>
            <TabContent>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </TabContent>
          </TabPanel>
          <TabPanel>
            <TitleWrapper>
              <Index>0{tabIndex + 1}</Index>
              <Title>Use</Title>
            </TitleWrapper>
            <TabContent>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </TabContent>
          </TabPanel>
          <TabPanel>
            <TitleWrapper>
              <Index>0{tabIndex + 1}</Index>
              <Title>Relax</Title>
            </TitleWrapper>
            <TabContent>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </TabContent>
          </TabPanel>
        </Tabs>
      </TabsWrapper>
    )
  }
}

export default MyTab
