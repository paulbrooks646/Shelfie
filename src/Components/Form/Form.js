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
            <div>
                <input id="myInput" value={this.state.userInput} onChange={e => this.handleChange1(e.target.value)}/>
                <input id="myInput" value={this.state.userInput2} onChange={e => this.handleChange2(e.target.value)}/>
                <input id="myInput" value={this.state.userInput3} onChange={e =>this.handleChange3(e.target.value)}/>
                <button onClick={this.handleClick}>Cancel</button>
                <button onClick={() => this.props.postRequest(this.state.userInput, this.state.userInput2, this.state.userInput3)}>Add to Inventory</button>
            </div>
        )
    }
}