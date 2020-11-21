import React, { Component } from 'react';

class Try extends Component {
    render() {
        const { tryInfo } = this.props;
        return(
            <il>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </il>
        )
    }
}

/* memo를 쓰면 재렌더링
const Try = memo(({tryInfo}) => {
    return(
       <li>
           <div>{tryInfo.try}</div>
           <div>{tryInfo.result}</div>
       </li>
    )
})*/

export default Try;