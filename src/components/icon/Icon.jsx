import React, { Component } from 'react'


export default class Icon extends Component {
    render() {
        if (this.props.brand) {
            return (
                <span className="fa-stack fa-4x">
                    <i className="fas fa-square fa-stack-2x"></i>
                    <i className={ "icon fab fa-stack-1x fa-inverse fa-" + this.props.icon }></i>
                </span>
            )
        } else {
            return (
                <span className="fa-stack fa-4x">
                    <i className="fas fa-square fa-stack-2x"></i>
                    <i className={ "icon fa fa-stack-1x fa-inverse fa-" + this.props.icon }></i>
                </span>
            )
        }
    }
}
