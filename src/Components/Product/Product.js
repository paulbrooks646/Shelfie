import React, { Component } from "react"

export default class Product extends Component {
    constructor() {
        super()

this.state = {

}

    }

    render() {
        console.log(this.props.inventoryArray2.id)
        return (
            <div className="product"><img src={this.props.inventoryArray2.img} alt="product"/><div className="words"><h2>{this.props.inventoryArray2.name}</h2><h3>${this.props.inventoryArray2.price}</h3></div><button onClick={this.props.deleteProduct(this.props.inventoryArray2.id)}>Delete</button>
            </div>
        )
    }
}