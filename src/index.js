import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals'; 
import Counters from './components/counters';
import App from './App';


ReactDOM.render(
   <React.StrictMode>
     <App/>
     <Counters/>
   </React.StrictMode> 
   ,document.getElementById('root')
);

reportWebVitals();
