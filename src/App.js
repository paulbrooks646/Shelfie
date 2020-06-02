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

    this.getRequest = this.getRequest.bind(this)

  }

getRequest() {
  axios.get("/api/inventory").then((res) => {
    this.setState({
      inventoryArray: res.data
    })
 })
 .catch(() => {
  alert('failed to retrieve')})}



 componentDidMount() {
   this.getRequest()
  }
 
 
  
  render() {
    
    return (
      <div className="main">
        <Header/>
        <div className="middle">
          <Dashboard inventoryArray={this.state.inventoryArray}/>
          <Form getRequest={this.getRequest} postRequest={this.addProduct}/>
        </div> 
      </div>
    )
  }
}
