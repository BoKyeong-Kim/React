import React, { Component } from 'react';

class Try extends Component {
    render() {
        return(
            <il>
                <b>{this.props.value.fruit}</b> - {this.props.index}
                <div>컨텐츠1</div>
                <div>컨텐츠2</div>
                <div>컨텐츠3</div>
            </il>
        )
    }
}

export default Try;