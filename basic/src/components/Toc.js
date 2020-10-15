import React, { Component } from 'react'; //react라는 라이브러리에서 component를 로딩

class Toc extends Component {
    render() {
      return(
        <nav>
              <ul>
                  <li><a href="1.html">HTML</a></li>
                  <li><a href="2.html">CSS</a></li>
                  <li><a href="3.html">JavaScript</a></li>
              </ul>
        </nav>
      );
    }
  }

// 외부에서 사용하기 위함
export default Toc; 