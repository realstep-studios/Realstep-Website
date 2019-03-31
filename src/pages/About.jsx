import React, { Component } from 'react'

import Navigation from "../components/navigation/Navigation"
import Footer from "../components/footer/Footer"

export default class About extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <main>
          <h1>About Page</h1>
        </main>
        <Footer/>
      </>
    )
  }
}
