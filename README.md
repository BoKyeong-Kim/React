# React


### Basic
- 영상 : [생활코딩 React 강의](https://www.youtube.com/watch?v=nvRlr_qPfBc&list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi&index=4)

<br>

- install

```
npx create-react-app basic
cd basic
npm run start
```
위와 같이 설치해주고 실행하면 새창이 띄워지면서 웹서버를 확인할 수 있다.

<br>

React는 src폴더안에서 다뤄야한다.
진입파일 : index.js
 - document.getElementById('root') : index.html안에 id가 root인 태그를 선택


<br>

아래의 두 코드는 같다.
위 수업에서는 class 방식을 사용

- function type
```javascript
import React from 'react';
import './App.css';
function App() {
    return (
        <div className="App">

        </div>
    );
}
export default App;
```

- class type
```javascript
import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
            
            </div>
        );
    }
}

export default App;
```

<br>

- example
<div align="center"><img src="./img/react_basic_1.png" width="700px" height="450px" alt="structure"></img></div>

index.js에서 App.js를 import해서 사용

<br>

<div align="center"><img src="./img/react_basic_2.png" width="700px" height="450px" alt="structure"></img></div>

App.js의 App function을 수정하여 동작하는것 자체를 변경해서 사용한다.


<br>

<div align="center"><img src="./img/react_basic_3.png" width="700px" height="450px" alt="structure"></img></div>

index.css로 디자인 할 수 있으며
index.js로 불러온 `import 여기 from './App';` 이 부분과 하위 부분  `<여기 />`내의 명칭이 같아야한다.

