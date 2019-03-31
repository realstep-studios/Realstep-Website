import React, { Component } from 'react'

import Navigation from "../components/navigation/Navigation"
import Footer from "../components/footer/Footer"
import Card from "../components/card/Card"

export default class TapZ extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <main>
          <h1>TapZ Incremental Project</h1>

          <Card title="Game Basics" url="https://tapz.realstep.co.uk/" butt = "Join the fight!" icon="gamepad">
            <p>
              Blah blah blah kill zombs tyhey die go boom yey breins n mony
            </p>
          </Card>

          <Card title="Latest update" url="https://github.com/wsngamerz/TapZ-Incremental" butt = "Learn more" icon="pen">
            <p>
              I haven't done anything on it in 7 years cos i am lazy
            </p>
          </Card> 

        </main>
        <Footer/>
      </>
    )
  }
}
