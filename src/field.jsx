import React, { Component } from 'react'

export default class Field extends Component {
    constructor(props) {
        super(props)
        this.state = { value: this.props.initialValue }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label><br />
                <input type="text" onChange={this.changeHandler} value={this.state.value} />
            </div>
        )
    }
}