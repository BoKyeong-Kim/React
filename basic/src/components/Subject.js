import React, { Component } from 'react'; //react라는 라이브러리에서 component를 로딩

class Subject extends Component {
    render() {
      return (
        <header>
              <h1><a href="/">{this.props.title}</a></h1>
              {this.props.sub}
        </header>
      );
    }
  }

export default Subject;