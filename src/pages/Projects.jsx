import React, { Component } from 'react'

import Navigation from "../components/navigation/Navigation"
import Footer from "../components/footer/Footer"
import Card from "../components/card/Card"


export default class Projects extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <main>
            <h1>Projects Page</h1>
            <p>
              Hereess ourse bueateallses projestess that wee workws verryeess hards ons
              <br/>
              Please enjoyses
            </p>
            <Card icon="server" title="Wills Media Server" butt="WMS Project Page" buttLink="/projects/WillsMediaServer"/>
            <Card icon="gamepad" title="TapZ Incremental" butt="TapZ Project Page" buttLink="/projects/TapZ-Incremental"/>
            <Card icon="adjust" title="Seneca Dark Mode" butt="SDM Project Page" buttLink="/projects/Seneca-Dark-Mode"/>
        </main>
        <Footer/>
      </>
    )
  }
}
