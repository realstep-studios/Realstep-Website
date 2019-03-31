import React, { Component } from 'react'

import Navigation from "../components/navigation/Navigation"
import Card from "../components/card/Card"
import Footer from "../components/footer/Footer"

export default class SDM extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <main>
          <h1>Seneca Dark Mode Project</h1>
          <Card title="How to use" url="https://github.com/wsngamerz/Seneca-dark-mode" icon="graduation-cap" butt="Learn More">
            <p>
              This app is currently under developement and will later be made more user friendly.
              In order to use it for now, copy the following line of code into the inspect element of Seneca.
              <br/>
              <code>
                <span className="tag">&lt;</span><span className="element">link</span> <span className="attribute">rel</span>=&quot;stylesheet&quot; <span className="attribute">type</span>=&quot;text/css&quot; <span className="attribute">href</span>=&quot;https://wsngamerz.github.io/Seneca-dark-mode/seneca.dark.css&quot; <span className="tag">/&gt;</span>
              </code>
            </p>
          </Card> 
        </main>
        <Footer/>
      </>
    )
  }
}
