import React, { Component } from 'react'; //react라는 라이브러리에서 component를 로딩

class Toc extends Component {
    render() {
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        i = i + 1; 
      }
      return(
        <nav>
              <ul>
                  {lists}
              </ul>
        </nav>
      );
    }
  }

// 외부에서 사용하기 위함
export default Toc; 