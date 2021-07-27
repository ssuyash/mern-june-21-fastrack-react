import React, { Component } from 'react'
import axios from 'axios'
import Loader from './Loader'


export default class Todos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos:[],
             isLoading:false
        }
    }

    fetchData = ()=>{
        this.setState({isLoading:true})
        const url = "https://jsonplaceholder.typicode.com/todos/"

        axios.get(url).then((res)=>{            
            this.setState({todos:res.data, isLoading:false})
        }).catch(err=>{
            console.log(err)
            this.setState({isLoading:false})
        })
    }

    componentDidMount(){
        this.fetchData()
    }

    render() {
        
        let ul = (<ul>
            {this.state.todos.map(todo=><li key={todo.id}>{todo.title}</li>)}
        </ul>)

        return (
            <div>
                {this.state.isLoading ? <Loader/> : ul}
                <button onClick={this.fetchData}>Fetch From Server</button>                
            </div>
        )
    }
}
