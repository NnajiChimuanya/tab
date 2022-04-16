import React, { Component } from 'react';


class ControlledTextarea extends Component {
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
        console.log(` ${this.state.value} was submitted`)

    }

    handleChange(e) {
        this.setState({
            value : e.target.value
        })
    }
    render() { 
        return(<>
            <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.value} onChange={this.handleChange} />
                <button type='submit'>Submit article</button>
            </form>
            
        </>)
    }
}
 
export default ControlledTextarea;