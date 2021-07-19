import React, { Component } from 'react';

class Greetontime extends Component {
    render() {
        return (
            <div>
                Good {this.props.time} {this.props.name}
            </div>
        );
    }
}

export default Greetontime;