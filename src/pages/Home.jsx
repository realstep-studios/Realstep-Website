import React, { Component } from 'react'

import Navigation from "../components/navigation/Navigation"
import Card from "../components/card/Card"
import Footer from "../components/footer/Footer"

export default class Home extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <main>
          <h1>Home Page</h1>

          <p>
            Helloses and welcomes to urses very nice websites
            <br/>
            on here you will eba bebles to findes all of our best projects andhardses works
          </p>
          
          <Card title="Projects" butt="Projects" icon="gamepad" path="/projects">
            <p>Herease uses can findes alles foi good pojeees=fss and plays us good gamess</p>
          </Card>
          
          <Card title="About Us" butt="About" icon="users" path="/about">
            <p>We is good company, pay uus doo stuff pls. we get good advertismentes. pls emplyyye us</p>
          </Card>
          
          <Card title="Contact Us" butt="Contact" icon="at" path="/contact">
            <p>hear u can msgeage usses and get usses to doos syah voek for good moneieees</p>
          </Card>

        </main>
        
        <Footer/>
      </>
    )
  }
}
