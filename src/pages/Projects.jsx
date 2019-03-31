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
              Check out our projects below. You can interact with them on the github pages and also look at prototypes of each project.
              <br/><br/>
              <i>Psssst I would recommend TapZ </i>
            </p>

            <Card icon="server" title="Wills Media Server" butt="WMS Project Page" path="/projects/WillsMediaServer"/>
            
            <Card icon="gamepad" title="TapZ Incremental" butt="TapZ Project Page" path="/projects/TapZ-Incremental"/>
            
            <Card icon="adjust" title="Seneca Dark Mode" butt="SDM Project Page" path="/projects/Seneca-Dark-Mode"/>
        </main>
        
        <Footer/>
      </>
    )
  }
}
