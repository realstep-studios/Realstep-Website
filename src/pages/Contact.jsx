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
          <h1>Contact</h1>
          <Card title = "Email us" body = "You can drop us an e-mail at: info@realstep.co.uk" butt = "Placeholder" buttLink = "" icon='envelope' faSuffix=""/>
          <Card title = "Github" body = "On a per-project basis, you can leave an issue on the issues page on github" butt = "Placeholder" buttLink = "" icon='github'/>
        </main>
        <Footer/>
      </>
    )
  }
}
