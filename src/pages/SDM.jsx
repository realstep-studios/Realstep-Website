import React, { Component } from 'react'

import Navigation from "../components/navigation/Navigation"
import Footer from "../components/footer/Footer"

export default class SDM extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <main>
          <h1>Seneca Dark Mode Project</h1>
          <Card title = "How to use" body = "This App is currently under developement and will later be made more user friendly. In order to use it for now, copy the following line of code into the inspect element of Seneca... <link rel='stylesheet' type='text/css' href='https://wsngamerz.github.io/Seneca-dark-mode/seneca.dark.css>'" butt = "Learn more" buttLink = "https://github.com/wsngamerz/Seneca-dark-mode" icon = "graduation-cap"/> 
        </main>
        <Footer/>
      </>
    )
  }
}
