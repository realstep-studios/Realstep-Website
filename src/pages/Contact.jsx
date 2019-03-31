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

          <Card title="Email us" butt="Email Us" url="mailto:info@realstep.co.uk" icon="envelope">
            <p>You can drop us an e-mail at: <s>info@realstep.co.uk</s></p>
          </Card>
          
          <Card title="Github" butt="Github" url="https://github.com/realstep-studios" icon="github" brand>
            <p>On a per-project basis, you can leave an issue on the issues page on github</p>
          </Card>
        </main>
        
        <Footer/>
      </>
    )
  }
}
