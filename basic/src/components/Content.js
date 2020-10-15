import React, { Component } from 'react'; //react라는 라이브러리에서 component를 로딩

class Content extends Component {
    render() {
      return (
        <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
        </article>
      );
    }
}

export default Content;