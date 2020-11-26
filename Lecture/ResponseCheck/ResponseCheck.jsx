import React, { Componenet } from 'react';
import { throws } from 'assert';

class ResponseCheck extends Componenet {
    state = {
        state : 'waiting', //배경에 대한 상태
        message : '클릭해서 시작하세요.',
        result : [],
    };

    onClickScreen = () => {

    }

    renderAverage = () => {
        const { result } = this.state;
        return result.length === 0
            ? null
            : <div>평균시간 : {result.reduce((a,c) => a+c) / result.length}ms</div>
    }

    render() { //render 안에서는 for이랑 if를 못쓴다.
        const { state, message } = this.state
        return(
            <>
            <div
            id = "screen"
            className = {state}
            onClick={this.onClickScreen}
            >
            {message}
            </div>
            {this.renderAverage()}
            </>
        )
    }
    
}

export default ResponseCheck;
