import React, { Component } from "react"
import Product from "../Product/Product.js"
import axios from "axios"

export default class Dashboard extends Component {
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
       })}
   

    render() {

    const newArray = this.state.inventoryArray.map((e, index) => 
            <Product key={index} inventoryArray2={this.state.inventoryArray[index]} getInventory={this.getInventory}/>    
            )
        return (
            <div>{newArray}</div>
        )
    }
}