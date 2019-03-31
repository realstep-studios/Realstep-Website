import React, { Component } from 'react'


export default class Icon extends Component {
    render() {
        if (this.props.brand) {
            return (
                <i className={ "icon fab fa-stack-1x fa-inverse fa-" + this.props.icon }></i>
            )
        } else {
            return (
                <i className={ "icon fa fa-stack-1x fa-inverse fa-" + this.props.icon }></i>
            )
        }
    }
}
