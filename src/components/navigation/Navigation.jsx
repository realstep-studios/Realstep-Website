import React, { Component } from 'react'
import { Link } from "react-router-dom"

import "./navigation.css"

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropBtn')) {
        let dropdowns = document.getElementsByClassName("dropdownContent")
        let i
        
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i]
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show')
          }
        }
      }
}
  }
  
  render() {
    return (
      <nav className="navigation">
        <Link as="a" to="/">Realstep</Link>

        <section className="dropdown">
        <a onClick={ this.projectsDropdown } className="dropBtn">Projects</a>
          <section id="projectsDropdown" className="dropdownContent">
            <Link as="a" to="/projects/WillsMediaServer">Wills Media Server</Link>
            <Link as="a" to="/projects/TapZ-Incremental">TapZ</Link>
            <Link as="a" to="/projects/Seneca-Dark-Mode">Seneca Dark Mode</Link>
          </section>
        </section>
        
        <Link as="a" to="/contact">Contact</Link>
        <Link as="a" to="/about">About</Link>
      </nav>
    )
  }

  projectsDropdown() {
    document.getElementById("projectsDropdown").classList.toggle("show");
  }
}
