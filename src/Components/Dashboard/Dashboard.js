import React, { Component } from "react"
import Product from "../Product/Product.js"
import axios from "axios"

export default class Dashboard extends Component {
    constructor() {
        super()
this.state = {
}
    }

   deleteProduct(id) {
    axios.delete(`/api/product/${id}`)
    .then(() => {
       this.props.getInventory() 
    })
    .catch( err => {
        console.log(err)
    })
   }

    render() {
      
    const newArray = this.props.inventoryArray.map((e, index) => 
            <Product key={index} inventoryArray2={this.props.inventoryArray[index]} deleteProduct={this.deleteProduct}/>    
            )
        return (
            <div>{newArray}</div>
        )
    }
}