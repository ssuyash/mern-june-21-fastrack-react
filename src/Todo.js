import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             task:"",
             tasks:[]
        }
    }

    saveTask = ()=>{
        let {task, tasks} = this.state
        let newTask = {taskName:task}
        tasks.push(newTask)
        this.setState({tasks, task:""})
    }
    
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.task}
                    onChange={(e)=>this.setState({task:e.target.value})}
                ></input>
                
                <button onClick={this.saveTask}>Save Task</button>

                <ul>
                    {this.state.tasks.map(task=><li>{task.taskName}</li>)}
                </ul>
                
            </div>
        );
    }
}

export default Todo;