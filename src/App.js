import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js'
import Routes from './routes'

function App(props) {  
    
    return (
      <div className="main">
        <Header/>
        <div className="middle">
          {Routes}         
        </div> 
      </div>
    )
}

export default App
