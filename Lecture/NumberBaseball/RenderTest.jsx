import React, { PureComponent } from 'react';

class Test extends PureComponent {
    state = {
        counter : 0,
        string : 'hello',
        number : 1,
        boolean : true,
        object : {},
        array : [],
    }

    onClick = () => {
        //const array = this.state.array; 
        //this.state.array.push(5); 
        //새로운 array를 만들고싶으면 위 방법이 아니라 아래의 방법을 사용해야함.
        this.setState({
            array: [...this.state.array, 1],
        });
    }

    render() {
        console.log('렌더링', this.state);
        return(
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )

    }
}

export default Test;