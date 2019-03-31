import React, { Component } from 'react'
import { Link } from "react-router-dom"

import "./navigation.css"

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropBtn')) {
        var dropdowns = document.getElementsByClassName("dropdownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
}
  }
  
  render() {
    return (
      <nav className="navigation">
        <Link as="a" to="/">Realstep</Link>

        <section class = "dropdown">
        <button onClick = {this.projectsDropdown} class = "dropBtn">Projects</button>
          <section id = "projectsDropdown" class = "dropdownContent">
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
