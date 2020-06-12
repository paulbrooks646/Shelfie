import React, { Component } from "react"
import Product from "../Product/Product.js"
//import axios from "axios"

export default class Dashboard extends Component {
    constructor() {
        super()
this.state = {
}
    }

   

    render() {
      
    const newArray = this.props.inventoryArray.map((e, index) => 
            <Product key={index} inventoryArray2={this.props.inventoryArray[index]} getInventory={this.props.getInventory} updateSelectedProduct={this.props.updateSelectedProduct}/>    
            )
        return (
            <div>{newArray}</div>
        )
    }
}