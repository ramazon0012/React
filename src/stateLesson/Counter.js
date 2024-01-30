import React from 'react';
import './main.css'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <>
                <button onClick={(e) => this.increment(e)}>+</button>
                <button onClick={(e) => this.decrement(e)}>-</button>
                <button onClick={(e) => this.reset(e)}>reset</button>
                <h1>Count {this.state.count}</h1>
            </>
        )
    }
}

export default Counter;