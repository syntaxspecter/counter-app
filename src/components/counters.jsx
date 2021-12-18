import React, { Component } from 'react';
import Counter from './counter';
import './css/counters.css';

class Counters extends React.Component {
    state = {
        counters: [
            {id : 1 , value : 0},
            {id : 2 , value : 0},
            {id : 3 , value : 0},
            {id : 4 , value : 0}
        ]
    }

    handleEvent = (counterId) => 
    {
            const counters = this.state.counters.filter(c => c.id != counterId);
            this.setState({counters});
    }

    handleReset = () =>
    {
        const counters = this.state.counters.map(c => {c.value = 0 ; return c ;});
        this.setState({counters});
    }

    handleIncrement = counter =>
    {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});

    }

    render() { 
        return (
            <React.Fragment>
             <button onClick={this.handleReset} className="btn btn-secondary m-2">Reset</button>
             <div id='container'>
               {this.state.counters.map 
                  (counter => <Counter onDelete={this.handleEvent} key={counter.id} onIncrement={this.handleIncrement} counter = {counter}></Counter>)}
             </div>
            </React.Fragment>
        
        );
    }
}
 
export default Counters;