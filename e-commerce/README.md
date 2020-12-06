## e-commerce web shop clone coding
- [adrianhajdin님의 project_e_commerce 참고](https://github.com/adrianhajdin/project_e_commerce)

<br>

### setting
- `npx create-react-app ./` : 초기화
- `npm install @material-ui/core @material-ui/icons @chec/commerce.js`
- `npm install @stripe/react-stripe-js @stripe/stripe-js react-router-dom react-hook-form`
- src폴더에 파일들을 지워준다.

<br>

### product
<div align="center"><img src="./img/product(1).png" width="900px" height="450px" alt="structure"></img></div>

<br>

### import
- App.js에서 component를 import 할때, 1번 방법보다 2번 방법을 사용하는게 간단하다.
- 하지만 2번방법을 사용하기 위해서는 component폴더에 index.js 파일을 생성해주어야한다.

```
1)
import Products from './components/Products/Products';
import NavBar from './components/NavBar/NavBar';
```

```
2)
import { Products, NavBar } from './components/';
```

<br>

### Navbar
- Navbar와 Shopping cart 생성

<div align="center"><img src="./img/Navbar(1).png" width="900px" height="450px" alt="structure"></img></div>


- 하지만 현재는 Navbar가 product를 가리고 있는 문제가 있음
    - product의 style 추가
    - main 태그의 className을 classes.content로 지정
    - div 태그의 className을 classes.toolbar로 지정
<div align="center"><img src="./img/Navbar(2).png" width="900px" height="450px" alt="structure"></img></div>

<br>

### lib/commerce.js
: 실제 제품을 가져올 수 있는 레이아웃 생성
- 새로운 인스턴스를 생성해준다.
- 매개변수를 저장하려면 Public Key를 저장해야한다.
```
import Commerce from '@chec/commerce.js';

export const commerce = new Commerce();
```

- https://commercejs.com/docs/에 계정을 등록하고, 로그인한 뒤 API키를 받는다.
- Developer >> setttings 
- .env파일을 만들어 key를 액세스 해준다.


<br>
