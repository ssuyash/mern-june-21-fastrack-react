import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)
        console.log("Child : constructor")
        this.state = {
            name:""
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("Child : getDerivedStateFromProps")
        let newState = {name:props.name}
        return newState
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState, this.state)
        console.log("Child : shouldComponentUpdate")
        if(nextProps.name != this.state.name){
            return true
        }else{
            return false
        }        
      }

      


    render() {
        console.log("Child : render")
        
        return (
            <div>
               <input 
               type="text" 
               name="username" 
               value={this.state.name}                
               onChange={(e)=>this.setState({name:e.target.value})}
               />
              Child  : {this.state.name}
            </div>
        )
    }


    componentDidMount(){
        console.log("Child : componentDidMount")
        
    }
}


//Pure Component