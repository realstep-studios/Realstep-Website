import React, { Component } from 'react'

import "./parallax.css"

export default class Parallax extends Component {
  render() {
    return (
      <div class = "parallax" style = {{backgroundImage: "url('" + this.props.url + "')", minHeight: this.props.height + "vh"} }></div>
    )
  }
}
