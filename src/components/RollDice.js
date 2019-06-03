import React from 'react';
import Dice from './Dice';
import './rollDice.css'


class RollDice extends React.Component {

    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    state = {
        dice1: 'one',
        dice2: 'one',
        isRolling: false
    }
    roll = () => {
        // pick 2 new numbers 
        const newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]

        // change the state with new Dice

        this.setState({
            dice1: newDice1,
            dice2: newDice2,
            isRolling: true
        })

        // wait one second and then set rolling to false 

        setTimeout(() => {
            this.setState({ isRolling: false });
        }, 500);

    }

    render() {
        return (
            <div>
                <div className="dice-container">
                    <Dice face={this.state.dice1} rolling={this.state.isRolling} />
                    <Dice face={this.state.dice2} rolling={this.state.isRolling} />
                </div>
                <button className="roll-button" onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
                </button>

            </div>

        )

    }
}

export default RollDice;