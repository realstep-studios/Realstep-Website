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
        </main>
        <Footer/>
      </>
    )
  }
}
