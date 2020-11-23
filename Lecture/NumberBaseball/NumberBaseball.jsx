import React , { Component, createRef } from 'react';
import Try from './Try';

function getNumbers() { //숫자 4개를 겹치지않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i=0; i < 4 ;i += 1){
        const chosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        array.push(chosen);
    }
    return array;
} 

class NumberBaseball extends Component {
    state = {
        result : '',
        value : '',
        answer : getNumbers(), // ex.[1,3,5,7]
        tries : [], //push 쓰지않도록 유의
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.value === this.state.answer.join('')){
            this.setState((prevState) => { //옛날 state로 현재 state를 만들때 prevState 사용
                return{
                    result : '홈런!',
                    tries : [...prevState.tries, { try : value, result:'홈런!'}]
                }
            })
            alert('게임을 다시 시작합니다!')
            this.setState({
                value : '',
                answer : getNumbers(),
                tries : []
            });
        } else { //답 틀렸을 경우
            const answerArray = this.state.value.split('').map((v)=>parseInt(v));
            let strike = 0;
            let ball = 0;
            if(this.state.value.length >= 9) { //10번 이상 틀렸을 떄 
                this.setState({
                    result : `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다.`
                })
                alert('게임을 다시 시작합니다!')
                this.setState({
                    value : '',
                    answer : getNumbers(),
                    tries : []
                })
                this.inputRef.current.focus();
            } else {
                for(let i=0; i<4;i+=1) {
                    if(answerArray[i]===this.state.answer[i]){
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState((prevState) => {
                    return {
                        tries : [...prevState.tries, { try: this.state.value, result:`${strike} 스트라이크, ${ball} 볼입니다.`}],
                        value : '',
                    }
                });
                this.inputRef.current.focus();
            }
        }
    };

    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({
             value : e.target.value
        })
    };

    inputRef = createRef();

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.inputRef} maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v,i) => {
                        return(
                            <Try key={`${i + 1}차 시도 : `} tryInfo={v} />
                        )
                    })}
                </ul>
            </>
        )
    }
    
}

export default NumberBaseball;