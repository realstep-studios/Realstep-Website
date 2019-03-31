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
            Hello and welcome to our website!
            <br/>
            Here you will be able to explore all of our ongoing projects.
          </p>
          
          <Card title="Projects" butt="Projects" icon="gamepad" path="/projects">
            <p>Here are some of our projects including the fan favourite.... TapZ!!!</p>
          </Card>
          
          <Card title="About Us" butt="About" icon="users" path="/about">
            <p>We are a small group of peoples. Click below to find out more</p>
          </Card>
          
          <Card title="Contact Us" butt="Contact" icon="at" path="/contact">
            <p>Want to contact us for any reason? Make sure to e-mail us.</p>
          </Card>

        </main>
        
        <Footer/>
      </>
    )
  }
}
