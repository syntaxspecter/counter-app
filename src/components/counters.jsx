import React, { Component } from 'react';
import Counter from './counter';
import './css/counters.css';

class Counters extends React.Component {
    state = {
        counters: [
            {id : 1, value : 0},
            {id : 2, value : 0},
            {id : 3, value : 0},
            {id : 4, value : 0}
        ]
    }
    render() { 
        return (
        <div id='container'>{this.state.counters.map (counter => <Counter key={counter.id}></Counter>)}</div>
        );
    }
}
 
export default Counters;