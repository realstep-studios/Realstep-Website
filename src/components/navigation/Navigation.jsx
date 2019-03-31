import React, { Component } from 'react'
import { Link } from "react-router-dom"

import "./navigation.css"

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <Link as="a" to="/">Realstep</Link>
        <Link as="a" to="/projects">Projects</Link>
        <Link as="a" to="/contact">Contact</Link>
        <Link as="a" to="/about">About</Link>
      </nav>
    )
  }
}
