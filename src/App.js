import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Portfolio from './Component/Portfolio';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
       <Portfolio/>
    </BrowserRouter>
    
  )
}

export default App;
