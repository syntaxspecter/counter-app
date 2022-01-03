import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Counters from "./components/counters";

class App extends React.Component {
  state = {
    counters: [
        {id : 1 , value : 0},
        {id : 2 , value : 0},
        {id : 3 , value : 0},
        {id : 4 , value : 0}
    ] 

}

handleDelete = (counterId) => 
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
        <h1>Practicing React</h1>
        <Counters counters = {this.state.counters} onReset ={this.handleReset} onIncrement = {this.handleIncrement} onDelete = {this.handleDelete}></Counters>
      </React.Fragment>
    
    );
  }
}
 
export default App;

