import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"yash",
             email:""
        }
    }

    handleUserName = (event)=>{
        let username =  event.target.value
        this.setState({username})

    }
    
    render() {
        return (
            <div>
                <input type="text" 
                    value={this.state.username}
                    onChange={this.handleUserName}
                ></input><br/>


                <input
                    value={this.state.email}
                    onChange={(e)=>this.setState({email:e.target.value})}
                />

                {this.state.username}
                <button type="button">save</button>

                
            </div>
        )
    }
}
