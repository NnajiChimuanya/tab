import React, { Component } from 'react';


class ControlledSelect extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    state = {
        value : "Type your text here"
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(` Your option : '${this.state.value}' has been recorded`)

    }

    handleChange(e) {
        this.setState({
            value : e.target.value
        })
    }
    render() { 
        return(<>
           <h1>Select your option :</h1>
           <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option>Nnaji</option>
                    <option>Odogwu</option>
                    <option>McCarthy</option>
                    <option>McClurkin</option>
                </select>

                <button type='submit'>Submit your option</button>
           </form>
            
        </>)
    }
}
 
export default ControlledSelect;