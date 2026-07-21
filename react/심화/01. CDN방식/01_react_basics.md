# React - CDN 방식 실습

## 목적

npm 설치 없이 브라우저에서 바로 React 를 실행하며 기본 개념을 이해하는 실습입니다.

---

## 개념 설명

### CDN 방식이란?

npm 으로 패키지를 설치하지 않고, 웹 브라우저에서 React 라이브러리를 직접 로드하는 방식입니다.

```html
<!-- React & ReactDOM 로드 -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- JSX 컴파일러 (Babel) 로드 -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

### React 컴포넌트란?

컴포넌트는 재사용 가능한 UI 부품입니다.

```javascript
// Counter 컴포넌트 예제
function Counter() {
  let count = 0; // 상태 (state)

  const increment = () => {
    count = count + 1;
  };

  return (
    <div>
      <div className="counter">{count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

### Props

컴포넌트에 전달되는 값입니다.

```javascript
function Greeting(name) {
  return (
    <div>
      <h3>{name} 님, 반갑습니다!</h3>
    </div>
  );
}
```

### State (상태)

컴포넌트의 데이터를 관리합니다.

```javascript
function TodoList() {
  let todos = ["TODO1", "TODO2"]; // 상태

  const addItem = () => {
    todos.push(newItem); // 상태 변경
  };
}
```

---

## 실습 예제

### 1. Counter 컴포넌트

클릭하면 숫자가 증가/감소하는 컴포넌트입니다.

```javascript
function Counter() {
  let count = 0;

  const increment = () => {
    count = count + 1;
  };

  const decrement = () => {
    count = count - 1;
  };

  return (
    <div className="react-box">
      <div className="counter">{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

### 2. Greeting 컴포넌트

이름을 받아 인사말을 표시합니다.

```javascript
function Greeting(name) {
  return (
    <div className="info">
      <h3>{name} 님, 반갑습니다!</h3>
    </div>
  );
}
```

### 3. TodoList 컴포넌트

TODO 항목을 추가/제거할 수 있습니다.

```javascript
function TodoList() {
  let todos = [
    "반영을 주신다면 감사합니다!",
    "코드에 익숙해졌으면 좋겠습니다.",
  ];

  const addItem = () => {
    todos.push(new Task("새로운 작업"));
  };

  const removeItem = (index) => {
    todos.splice(index, 1);
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeItem(index)}>✕</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>+ 추가</button>
    </div>
  );
}
```

---

## 실행 방법

### 방법 1: 브라우저에서 직접 열기

1. `react/01.CDN방식/index.html` 파일을 더블 클릭으로 브라우저로 열기

### 방법 2: 로컬 서버로 시작 (권장)

```bash
cd react/01.CDN방식
npx serve -l
```

브라우저에서 `http://localhost:8080` 에 접속

---

## 확인 방법

1. 브라우저에서 Counter 버튼 클릭 → 숫자가 증가/감소 확인
2. Greeting → 이름이 인사말에 표시 확인
3. TodoList → 추가/제거 버튼 클릭 확인

---

## 핵심 포인트

| 개념          | 설명                              |
| ------------- | --------------------------------- |
| **Component** | 재사용 가능한 UI 부품             |
| **Props**     | 컴포넌트에 전달되는 데이터        |
| **State**     | 컴포넌트의 데이터 관리            |
| **JSX**       | HTML 과 JavaScript 를 혼합한 문법 |
| **React 18**  | 최신 버전 (18.x)                  |

---

## 연습 문제

1. **Counter 확장**: Count 의 초기값을 `useState` 로 변경해보세요.
2. **새 컴포넌트 추가**: 자신의 이름을 받아 인사말을 표시하는 컴포넌트를 추가해보세요.
3. **Todo 수정**: TodoList 에 5 개의 항목을 미리 설정해보세요.

---

## 다음 단계

- **02.CRA 방식**: npm 으로 설치한 React 프로젝트
- **03.VITE 방식**: Vite 를 이용한 빠른 개발 환경
