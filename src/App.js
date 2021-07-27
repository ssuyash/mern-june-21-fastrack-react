import React, { Component } from 'react'
import Child from './Child'


export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isShown:false,
      count:0,
      name:"Priyanka",
    }

    console.log("APP : costructor")
  }


  static getDerivedStateFromProps(props, state){
    console.log("APP : getDerivedStateFromProps")
    let {count} = state
    return {count:5} //state
    //return null
  }  
  

  componentDidMount(){
    console.log("APP : componentDidMount")
    //we can change in state    
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("APP : shouldComponentUpdate")
    return true
  }


  getSnapshotBeforeUpdate(prevProps, nextState){
    console.log("APP : getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("APP : componentDidUpdate")

  }
  
  render() {  

    console.log("APP : render")
    return (
      <div>  
        Parent : {this.state.name}      
        <button onClick={()=>this.setState({isShown:true})}>show</button>
        {this.state.isShown && <Child name={this.state.name} />}
        <button onClick={()=>this.setState({name:"Suyash"})}>Change Name</button>
      </div>
    )
  }
}
