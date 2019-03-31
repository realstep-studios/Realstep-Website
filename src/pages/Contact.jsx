import React, { Component } from 'react'

import Navigation from "../components/navigation/Navigation"
import Card from "../components/card/Card"
import Footer from "../components/footer/Footer"

export default class Contact extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <main>
          <h1>Contact Page</h1>
        </main>
        <Footer/>
      </>
    )
  }
}
