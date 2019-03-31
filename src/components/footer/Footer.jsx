import React, { Component } from 'react'
import { Link } from "react-router-dom"

import "./footer.css"

export default class Footer extends Component {
    render() {
        return (
            <footer>      
                <nav>
                    <Link as="a" to="/">Realstep</Link>
                    <Link as="a" to="/projects">Projects</Link>
                    <Link as="a" to="/contact">Contact</Link>
                    <Link as="a" to="/about">About</Link>
                </nav>
                <p>
                    &copy; Realstep Studios 2017 - 2019
                </p>
            </footer>
        )
    }
}
