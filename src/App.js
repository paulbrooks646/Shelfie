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
      inventoryArray: [],
      selectedProduct: {}
    }

    this.getInventory = this.getInventory.bind(this)
    this.updateSelectedProduct = this.updateSelectedProduct.bind(this)
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
 })}

 updateSelectedProduct(productToBeEdited) {
   this.setState({
     selectedProduct: productToBeEdited
   })
 }

  render() {
    
    
    return (
      <div className="main">
        <Header/>
        <div className="middle">
          <Dashboard inventoryArray={this.state.inventoryArray} getInventory={this.getInventory} updateSelectedProduct={this.updateSelectedProduct}/>
          <Form getInventory={this.getInventory} selectedProduct={this.state.selectedProduct}/>
        </div> 
      </div>
    )
  }
}
