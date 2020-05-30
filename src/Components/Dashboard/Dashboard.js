import React, { Component } from "react"
import Product from "../Product/Product.js"

export default class Dashboard extends Component {
    constructor() {
        super()
this.state = {

}

    }

    render() {
    const newArray = this.props.inventoryArray.map((e, index) => {
            return (<Product key={index} inventoryArray2={this.props.inventoryArray[index]}/>

            )
        })
        return (
            <div>{newArray}</div>
        )
    }
}