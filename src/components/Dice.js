import React, { Component } from 'react'
import './dice.css'

class Dice extends Component {

    render() {
        return (

            <i className={`dice fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : null}`}></i>

        )
    }
}

export default Dice
