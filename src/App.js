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
  }
  componentDidMount() {
    axios.get("/api/inventory").then((res) => {
      this.setState({ inventoryArray: res.data })
      console.log(res.data)
      console.log(this.state.inventoryArray)
    })
      .catch(() => {
        alert('failed to retrieve')
      })
  }

  render() {
    return (
      <div>
        <Dashboard />
        <Form />
        <Header />
      </div>
    )
  }
}
