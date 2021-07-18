import React, {Component} from 'react'
import Greet from './Greet'

// export default function App(){
//   return (
//     <h1>App Component</h1>
//   )
// }

// export default App;


export default class App extends Component{
  render(){
    let name = "yash"
    let isLogin = false
    let users = [
      {name:"yash"},
      {name:"mohit"}
    ]

    
    return (
      <React.Fragment>
        
        
        <Greet name="suyash">
         <h1>Priyanka</h1>
        </Greet>

        {/* <Greet name="MOHIT"/> */}


        <h1 className="">App Component</h1>
        {/* {isLogin ? <h1 htmlFor="">Hello {name}</h1> : <h1>Please Login</h1>} */}
        { isLogin &&  <h1 htmlFor="">Hello {name}</h1> }
        
        <input type="text" htmlFor="email" ></input>
        

        <ul>
          {users.map(user=><h1 key={user.name} >{user.name}</h1>)}
        </ul>
      </React.Fragment>
    )   
  }
}