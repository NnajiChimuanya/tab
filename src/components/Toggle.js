import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isToggleOn : true
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
       if(this.state.isToggleOn) {
        this.setState({
            isToggleOn : false
        })
       } else{
        this.setState({
            isToggleOn : true
        })
       }
    }
    
    render() {
        return(
            <>
                <button onClick={this.toggle}>
                    {this.state.isToggleOn ? "On" : "Off"}
                </button>
            </>
        )
    }
}

export default Toggle;
