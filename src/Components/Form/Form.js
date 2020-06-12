import React, { Component } from "react"
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()

this.state = {
    editProductId: null,
    userInput: "",
    userInput2: 0,
    userInput3: "",
    product: []
}
this.handleClick = this.handleClick.bind(this)

    }
    componentDidUpdate(prevProps) {
        if(prevProps.selectedProduct !== this.props.selectedProduct) {
            this.setState({
                editProductId: this.props.selectedProduct
            })
        }
        this.changeProduct()
    }
    
    handleChange1(val) {
        this.setState({userInput: val})
    }
    handleChange2(val) {
        this.setState({userInput2: val})
    }
    handleChange3(val) {
        this.setState({userInput3: val})
    }
    handleClick() {
        this.setState({userInput: "", userInput2: 0, userInput3: "", editProductId: null})
    }
    addProduct(name, price, img) {
        const body = {name, price, img}
        axios.post("/api/product", body).then(res => {
          this.setState({
            inventoryArray: res.data
          })
        })}
    changeProduct() {
        axios.get(`/api/product/${this.props.selectedProduct}`)
        .then( res => {
            this.setState({
                userInput: res.data[0].name,
                 userInput2: res.data[0].price,
                 userInput3: res.data[0].img
            })
        })
    } 
    updateProduct() {
        
    }   

    render() {
        if (this.state.editProductId === null) {
        return (
            <div className="form">
                <div className="picture">
                    <img className="preview" src={this.state.userInput3} alt="Preview"/>
                </div>
                <div className="central">
                    <h3>Image URL:</h3>
                    <input 
                        id="myInput3" 
                        value={this.state.userInput3} onChange={e =>this.handleChange3(e.target.value)}/>
                    <h3>Product Name:</h3>
                    <input 
                        id="myInput1" 
                        value={this.state.userInput} onChange={e => this.handleChange1(e.target.value)}/>
                    <h3>Price:</h3>
                    <input 
                        id="myInput2" 
                        value={this.state.userInput2} onChange={e => this.handleChange2(e.target.value)}/>
                </div>
                <div className="buttons">
                    <button onClick={this.handleClick}>Cancel</button>
                    <button onClick={() =>{ this.addProduct(this.state.userInput, this.state.userInput2, this.state.userInput3)
                    this.setState({userInput: "", userInput2: 0, userInput3: ""})
                    this.props.getInventory()}}
                    >Add to Inventory
                    </button>
                </div>
            </div>
        )
    } else { return ( <div className="form">
    <div className="picture">
        <img className="preview" src={this.state.userInput3} alt="Preview"/>
    </div>
    <div className="central">
        <h3>Image URL:</h3>
        <input 
            id="myInput3" 
            value={this.state.userInput3} onChange={e =>this.handleChange3(e.target.value)}/>
        <h3>Product Name:</h3>
        <input 
            id="myInput1" 
            value={this.state.userInput} onChange={e => this.handleChange1(e.target.value)}/>
        <h3>Price:</h3>
        <input 
            id="myInput2" 
            value={this.state.userInput2} onChange={e => this.handleChange2(e.target.value)}/>
    </div>
    <div className="buttons">
        <button onClick={this.handleClick}>Cancel</button>
        <button onClick={() => this.updateProduct()}>Save Changes</button>
    </div>
</div>

    ) 

    }
}}