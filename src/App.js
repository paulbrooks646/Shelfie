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
    this.componentDidMount = this.componentDidMount.bind(this)
    this.addProduct = this.addProduct.bind(this)

  }
  componentDidMount() {
    axios.get("/api/inventory").then((res) => {
      this.setState({ inventoryArray: res.data })
    })
      .catch(() => {
        alert('failed to retrieve')
      })
  }
  addProduct(name, price, img){
    const body = {name, price, img}
    axios.post("/api/product", body).then(res => {
      this.setState({inventoryArray: res.data})
      this.componentDidMount()
    })
    .catch(() => {
      alert('failed to create')})
  
  }

  render() {
    return (
      <div className="main">
        <Header />
        <div className="middle">
          <Dashboard inventoryArray={this.state.inventoryArray} />
          <Form postRequest={this.addProduct} getRequest={this.componentDidMount}/>
        </div>
        
      </div>
    )
  }
}
