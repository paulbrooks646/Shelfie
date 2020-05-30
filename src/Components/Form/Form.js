import React, { Component } from "react"

export default class Form extends Component {
    constructor() {
        super()

this.state = {
    userInput: "",
    userInput2: 0,
    userInput3: ""
}
this.handleClick = this.handleClick.bind(this)
this.hamdleClick2 = this.handleClick2.bind(this)
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
        this.setState({userInput: "", userInput2: 0, userInput3: ""})
    }
    handleClick2() {
       
    }
    // axios.post() {

    // }

    render() {
        return (
            <div className="form">
                <div className="picture"></div>
                <div className="central">
                <h3>Image URL:</h3>
                <input id="myInput" value={this.state.userInput3} onChange={e =>this.handleChange3(e.target.value)}/>
                <h3>Product Name:</h3>
                <input id="myInput" value={this.state.userInput} onChange={e => this.handleChange1(e.target.value)}/>
                <h3>Price:</h3>
                <input id="myInput" value={this.state.userInput2} onChange={e => this.handleChange2(e.target.value)}/>
                </div>
                <div className="buttons">
                <button onClick={this.handleClick}>Cancel</button>
                <button onClick={() => this.props.postRequest(this.state.userInput, this.state.userInput2, this.state.userInput3)}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}