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
    }


    fruit = [
        { fruits : '사과' , taste : '맛있다' },
        { fruits : '바나나' , taste : '달다' },
        { fruits : '귤' , taste : '시다' },
        { fruits : '배' , taste : '시원하다' },
    ]

    onSubmitForm = () => {

    }

    onChangeInput = () => {

    }


    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {this.fruit.map((v,i) => {
                        return(
                            <Try value={v} index={i}/>
                        )
                    })}
                </ul>
            </>
        )
    }
    
}

export default NumberBaseball;