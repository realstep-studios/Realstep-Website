import React, { Component } from 'react'

import Navigation from "../components/navigation/Navigation"
import Card from "../components/card/Card"
import Footer from "../components/footer/Footer"

export default class TapZ extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <main>
          <h1>TapZ Incremental Project</h1>
        </main>
        <Footer/>
      </>
    )
  }
}
