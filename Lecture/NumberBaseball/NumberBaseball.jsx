import React , { Component } from 'react';
import Try from './Try';

function getNumbers() { //숫자 4개를 겹치지않고 랜덤하게 뽑는 함수
}

class NumberBaseball extends Component {
    state = {
        result : '',
        value : '',
        answer : getNumbers(),
        tries : [],
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log(this.state.value);

    };

    onChangeInput = (e) => {
        this.setState({ value : e.target.value})
    };

    fruits = [
        { fruit : '사과' , taste : '맛있다' },
        { fruit : '바나나' , taste : '달다' },
        { fruit : '귤' , taste : '시다' },
        { fruit : '배' , taste : '시원하다' },
    ];

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map((v,i) => {
                        return(
                            <Try key={v.fruit + v.taste} value={v} index={i}/>
                        )
                    })}
                </ul>
            </>
        )
    }
    
}

export default NumberBaseball;