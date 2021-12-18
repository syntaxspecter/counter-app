import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/counter.css';

class Counter extends React.Component {
    



    formatCounter()
    {
        if (this.props.counter.value===0) return "Zero";
        return this.props.counter.value;
    }

    
    render() { 

        
        return (
            <div>
               <span className ={this.getBadge()}>{this.formatCounter()}</span>   
               <button className='btn btn-secondary m-2' onClick={ () => this.props.onIncrement(this.props.counter)}>Increase</button>
               <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
     ); 
    }

    getBadge()
    {
        return (this.props.counter.value===0) ? "label" : "badge badge-secondary m-2" ;
      
    }
   
}
 
export default Counter;