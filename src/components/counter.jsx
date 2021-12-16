import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/counter.css';

class Counter extends React.Component {
    state=
    {
     count : 0 ,
     tags : ["tag1" , "tag2" , "tag3"]
    };

    consolePrint = () =>
    {
        this.setState({count:this.state.count + 1});
        console.log(this.state.count);
    }

    formatCounter()
    {
        if (this.state.count===0) return "Zero";
        return this.state.count;
    }

    
    render() { 

        return (
            <div>
               <span className ={this.getBadge()}>{this.formatCounter()}</span>   
               <button className='btn btn-secondary m-2' onClick={this.consolePrint}>Increase</button>
            </div>
     ); 
    }

    getBadge()
    {
        return (this.state.count===0) ? "label" : "badge badge-secondary m-2" ;
      
    }
   
}
 
export default Counter;