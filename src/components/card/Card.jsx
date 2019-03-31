import React, { Component } from 'react'

import Button from "../button/Button"
import Icon from "../icon/Icon"

import "./card.css"

export default class Card extends Component {
    render() {
        return (
            <section className="card">
                <Icon icon={ this.props.icon } brand={ this.props.brand }/>
                
                <h3>{ this.props.title }</h3>
                <span>{ this.props.children }</span>

                { this.props.butt &&
                    <>
                        { this.props.path ? (
                            <Button butt={ this.props.butt } path={ this.props.path } />
                        ) : (
                            <Button butt={ this.props.butt } url={ this.props.url } />
                        )}
                    </>
                }
            </section>
        )
    }
}
