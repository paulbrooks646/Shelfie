import React, { Component } from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard.js"
import Form from "./Components/Form/Form.js"
import Header from "./Components/Header/Header.js"
import axios from "axios"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      inventoryArray: []
    }

    this.getInventory = this.getInventory.bind(this)

  }

  componentDidMount() {
    
    this.getInventory()
 }

getInventory() {
  axios
  .get("/api/inventory").then((res) => {
    this.setState({
      inventoryArray: res.data
    })
 })
 .catch(() => {
  alert('failed to retrieve')})}

  render() {
    
    
    return (
      <div className="main">
        <Header/>
        <div className="middle">
          <Dashboard inventoryArray={this.state.inventoryArray} getInventory={this.getInventory}/>
          <Form getInventory={this.getInventory}/>
        </div> 
      </div>
    )
  }
}
