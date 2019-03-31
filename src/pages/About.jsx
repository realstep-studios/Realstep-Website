import React, { Component } from 'react'

import Navigation from "../components/navigation/Navigation"
import Footer from "../components/footer/Footer"
import Card from "../components/card/Card"

export default class About extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <main>
          <h1>About Page</h1>

          <Card title="Productive Owner" icon="user-tie">
            <i><h4>William Neild</h4></i>
            <p>You can be friends with him if u want.</p>
          </Card>       

          <Card title="Less Productive Owner" icon="smile-beam">
            <i><h4>Zack Jagger</h4></i>
            <p>He is a very cool man!</p>
          </Card>   
        </main>
        <Footer/>
      </>
    )
  }
}
