import React, { Component } from "react"
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()

this.state = {
    userInput: "",
    userInput2: 0,
    userInput3: ""
}
this.handleClick = this.handleClick.bind(this)

    }
    
    componentDidMount() {
        if (this.props.location.pathname === '/add') {
            axios.get(`/api/product/${3}`).then( res => {
                this.setstate({
                    userInput: res.data[0].name,
                    userInput2: res.data[0].price,
                    userInput3: res.data[0].img
                })
            })
        }
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
        axios.post("/api/product", body).then( () => {
           this.props.history.push("/") 
        })}

    updateProduct(id, name, price, img) {
        const body = {name, price, img}
        axios.put(`/api/product/${id}`, body)
        .then( () => {
            this.props.history.push("/")
        })
    }   

    render() {
        
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
                    this.setState({userInput: "", userInput2: 0, userInput3: ""})}}
                    >Add to Inventory
                    </button>
                </div>
            </div>
        )
    }}