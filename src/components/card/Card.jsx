import React, { Component } from 'react'
import { Link } from "react-router-dom"

import Icon from "../icon/Icon"

import "./card.css"

export default class Card extends Component {
    render() {
        return (
            <section className="card">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-square fa-stack-2x"></i>
                    <Icon icon={ this.props.icon } brand={ this.props.brand }/>
                </span>
                <h3>{ this.props.title }</h3>
                <p>{ this.props.body }</p>
                <button>
                    <Link to={this.props.buttLink}>{ this.props.butt }</Link>
                </button>
            </section>
        )
    }
}
