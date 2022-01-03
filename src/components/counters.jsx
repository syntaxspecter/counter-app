import React, { Component } from 'react';
import Counter from './counter';
import './css/counters.css';

class Counters extends React.Component {
   

    render() { 
        return (
            <React.Fragment>
             <button onClick={this.props.onReset} className="btn btn-secondary m-2">Reset</button>
             <div id='container'>
               {this.props.counters.map 
                  (counter => <Counter onDelete={this.props.onDelete} key={counter.id} onIncrement={this.props.onIncrement} counter = {counter}></Counter>)}
             </div>
            </React.Fragment>
        
        );
    }
}
 
export default Counters;