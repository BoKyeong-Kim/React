import React, { Component } from 'react';

class ResponseCheck extends Component {
    state = {
        state : 'waiting', //배경에 대한 상태
        message : '클릭해서 시작하세요',
        result : [],
    };

    /*
    timeout; //렌더링을 하고싶지 않으면 이러한 방식으로 만들어줘야한다.
    startTime; 
    endTime;
    */

    onClickScreen = () => {
        const { state, message, result } = this.state //구조분해
        if (state === 'waiting') {
            this.setState({
               state : 'ready',
               message : '초록색이 되면 클릭하세요.'
            });
            this.timeout = setTimeout(() => {
                this.setState({
                    state : 'now',
                    message : '지금 클릭'                
                });
                //this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); //2초 ~ 3초 랜덤
        } else if (state === 'ready') { //성급하게 클릭
            //clearTimeout(this.timeout); //초기화 시켜줘야함
            this.setState({
                state : 'waiting',
                message : '너무 성급하시군요! 초록색이 된 후에 클릭하세요.'
            })
        } else if (state === 'now') { // 반응속도 체크
            //this.endTime = new Date();
            this.setState((prevState) => {
                return {
                state : 'waiting',
                message : '클릭해서 시작하세요.',
                result : [...prevState.result, this.endTime - this.startTime],
                }
            })

        }

    }

    onReset = () => {
        this.setState({
            result : [],
        })
    }

    renderAverage = () => {
        const { result } = this.state;
        return result.length === 0
            ? null
            : <>
                <div>평균시간 : {result.reduce((a,c) => a+c) / result.length}ms</div>
                <button onClick={this.onReset}>리셋</button>
            </>
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
