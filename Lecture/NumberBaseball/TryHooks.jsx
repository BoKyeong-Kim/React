import React from 'react';

const Try = ({ tryInfo }) => { //구조분해 (props로 쓸수도 있음)
    return(
        <il>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </il>
    )
}

export default Try;