import React, { Component } from 'react'

import Navigation from "../components/navigation/Navigation"
import Footer from "../components/footer/Footer"

export default class WMS extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <main>
          <h1>WillsMediaServer Project</h1>
        </main>
        <Footer/>
      </>
    )
  }
}
