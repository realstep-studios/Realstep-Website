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
          <Card title="Email us" body="You can drop us an e-mail at: info@realstep.co.uk" butt="Email Us" url="mailto:info@realstep.co.uk" icon="envelope"/>
          <Card title="Github" body="On a per-project basis, you can leave an issue on the issues page on github" butt="Github" url="https://github.com/realstep-studios" icon="github" brand/>
        </main>
        <Footer/>
      </>
    )
  }
}
