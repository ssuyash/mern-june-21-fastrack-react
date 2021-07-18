import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greet extends Component {

    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            name:"suyash"
        }
    }

    changeNameState = ()=>{
        this.setState({name:"mohit"})
    }
    
    render() {
        return (
            <div>
                Good Morning {this.props.name}
               <h2> {this.state.name} </h2>
               <button onClick={this.changeNameState}>click</button>
            </div>
        );
    }
}

 Greet.propTypes = {
     name: PropTypes.number,
 }

export default Greet;




//rcc => class based component
//rfc => functional components
//rconst => costructor