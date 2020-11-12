import React, { Component } from 'react';

class Try extends Component {
    render() {
        return(
            <il>
                <div>{this.props.tryInfo.try}</div>
                <div>{this.props.tryInfo.result}</div>
            </il>
        )
    }
}

export default Try;