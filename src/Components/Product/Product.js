import React, { Component } from "react"
import axios from "axios"

export default class Product extends Component {
    constructor() {
        super()

this.state = {

}

    }


deleteProduct() {
 axios.delete(`/api/product/${this.props.inventoryArray2.id}`);
 this.props.getInventory()
}
    render() {
        
        return (
            <div className="product">
                <img src={this.props.inventoryArray2.img} alt="product"/>
                <div className="words">
                    <h2>{this.props.inventoryArray2.name}</h2>
                    <h3>${this.props.inventoryArray2.price}</h3>
                </div>
                <div>
                    <button onClick={ () => this.deleteProduct()}>Delete</button>
                    <button onClick={() => this.props.updateSelectedProduct(this.props.inventoryArray2.id, this.props.inventoryArray2.name, this.props.inventoryArray2.img, this.props.inventoryArray2.price)}>Edit</button>
                </div>
            </div>
        )
    }
}