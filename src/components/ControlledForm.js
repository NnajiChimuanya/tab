import React, { Component } from 'react';


class ControlledForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    state = {
        value : ""
    }

    handleSubmit(e) {
        e.preventDefault()
        alert(`A name ${this.state.value} was submitted`)

    }

    handleChange(e) {
        this.setState({
            value : e.target.value
        })
    }
    render() { 
        return (
           <>
             <form onSubmit={this.handleSubmit}>
                <label>
                    Name : <input type='text' value={this.state.value} onChange={this.handleChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>

            
           </>

            
        );
    }
}
 
export default ControlledForm;