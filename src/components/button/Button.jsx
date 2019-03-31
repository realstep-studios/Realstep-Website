import React, { Component } from 'react'
import { Link } from "react-router-dom"


export default class Button extends Component {
  render() {
        if (this.props.path) {
            return (
                <button>
                    <Link to={this.props.path}>{ this.props.butt }</Link>
                </button>
            )
        } else if (this.props.url) {
            return (
                <button>
                    <a href={ this.props.url }>{ this.props.butt }</a>
                </button>
            )
        } else {
            return null
        }
  }
}
