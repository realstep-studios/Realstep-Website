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
          <Card title="Projects" body="Herease uses can findes alles foi good pojeees=fss and plays us good gamess" butt="Projects" icon="gamepad" path="/projects"/>
          <Card title="About Us" body="We is good company, pay uus doo stuff pls. we get good advertismentes. pls emplyyye us" butt="About" icon="users" path="/about"/>
          <Card title="Contact Us" body="hear u can msgeage usses and get usses to doos syah voek for good moneieees" butt="Contact" icon="at" path="/contact"/>
        </main>
        <Footer/>
      </>
    )
  }
}
