# [React] 실습코드 1 (Ex01 ~ Ex07)
> **학습 목표 흐름**: 브라우저 로컬 스토리지 제어(Ex01 ~ 03) ➡️ 인풋 데이터를 다루는 가변 연산 실습(Ex04) ➡️ 셀렉터, 라디오, 체크박스 등 핵심 HTML 입력 폼 요소의 리액트 상태 동기화 기법 완벽 정복(Ex05~07).

---

## 📌 Ex01. LocalStorage 기초 실습
> **수업 방향**: 브라우저의 기본 영구 저장소인 **로컬 스토리지(LocalStorage)의 데이터 CRUD(생성/읽기/수정/삭제) 연동**을 실습합니다.

*   **핵심 학습 개념**:
    *   **객체 직렬화/역직렬화**: 리액트 상태 배열을 로컬 스토리지에 문자열로 변환하여 밀어 넣는 `JSON.stringify`와, 스토리지로부터 복원해 올 때 객체로 변환해 주는 `JSON.parse` 기법을 배웁니다.
    *   **로컬 스토리지 연동 API**: 데이터를 저장(`setItem`), 조회(`getItem`), 항목 삭제(`removeItem`), 완전 리셋(`clear`)하는 기본 명령어의 특징을 활용합니다.
    *   **삭제 & 필터 연동**: 특정 데이터 항목의 삭제 버튼 클릭 시, 고유 ID값을 추적하여 상태 배열을 필터링(`filter`)해 준 뒤 로컬 스토리지를 동기화시키는 기본 CRUD 흐름을 이해합니다.

---

## 📌 Ex02. LocalStorage 테마 설정 기억
> **수업 방향**: 유저가 수동으로 설정한 라이트/다크 테마 설정을 브라우저 새로고침이나 재방문 시에도 유실하지 않고 **안정적으로 복원하는 UX 기법**을 배웁니다.

*   **핵심 학습 개념**:
    *   **초기값 지연 선언(Lazy State Initialization)**:
        *   `useState(() => localStorage.getItem("theme") ?? "light")`와 같이 초기값 위치에 콜백 함수를 제공하여 컴포넌트 렌더링마다 스토리지를 조회하지 않고 최초 마운트 때 단 한 번만 조회하도록 성능을 고려해 설계하는 법을 학습합니다.
    *   **테마 변경 토글 제어**: 사용자가 테마를 누를 때 상태 업데이트와 로컬 스토리지 기록을 핸들러 함수 내부에서 수동으로 동시에 실행하는 절차적 코드를 다룹니다.

---

## 📌 Ex03. useEffect를 활용한 스토리지 자동 동기화
> **수업 방향**: Ex02의 절차적 코드 단점을 극복하고, **상태 변화를 감지하여 스토리지를 자동으로 동기화하는 반응형 프로그래밍(Side Effect)**을 적용합니다.

*   **핵심 학습 개념**:
    *   **useEffect의 반응형 패턴**: 테마 상태(`theme`)가 변경될 때마다 자동으로 발동하는 부작용(Side Effect) 함수를 등록합니다.
    *   **관심사 분리**: 이벤트 핸들러(`toggle`)에서는 단순 상태 스위칭에만 집중하게 하고, 스토리지 저장은 `useEffect`가 의존성 배열(`[theme]`) 감시를 통해 전담하도록 역할을 깔끔하게 위임하는 클린 코드 구조를 익힙니다.

---

## 📌 Ex04. Input 요소를 이용한 실시간 계산기
> **수업 방향**: 유저가 텍스트 입력 폼 창에 기입하는 데이터를 리액트에서 가로채고 **입력과 동시에 실시간 연산되는 다이내믹 UI**를 만듭니다.

*   **핵심 학습 개념**:
    *   **다중 입력(Multiple Inputs) 관리**: 두 개의 별도 상태(`in1`, `in2`)를 이용하여 인풋 요소를 개별 제어하는 법을 실습합니다.
    *   **타입 안전 변환**: 인풋 문자열 데이터를 연산을 위해 숫자형 데이터(`parseInt`)로 타입 변경하여 가감승제 연산을 수행합니다.
    *   **평가식 가드 렌더링**: 입력값 둘 다 유효하게 존재할 때만(`in1 && in2 && ...`) 계산 패널이 생겨나는 조건부 노출 가드 처리를 실습합니다.

---

## 📌 Ex05. 셀렉터(Selector) 연동과 동적 매핑
> **수업 방향**: HTML 드롭다운 목록 상자(`<select>`, `<option>`)의 값을 리액트의 `state`에 엮는 법과 **선택된 코드를 바탕으로 한 시각적 동적 스타일 갱신**을 연습합니다.

*   **핵심 학습 개념**:
    *   **드롭다운 동적 드로잉**: 배열로 기획된 도시 정보 객체를 `city.map()`을 이용해 `<option>` 노드로 변환하고 바인딩하는 기법을 실습합니다.
    *   **셀렉터 바인딩**: 선택된 값(`e.target.value`)을 상태(`sel`)와 연동하여 셀렉터 양방향 데이터 일관성을 구현합니다.
    *   **시각적 액티브(Active) 처리**: 현재 선택 코드값(`sel === "051"`)에 맞춰 해당하는 지역 카드 컴포넌트에 배경 오라 색상과 `selected` 하이라이트 클래스를 선언적으로 대입합니다.

---

## 📌 Ex06. 라디오(Radio) 버튼 다중 객체 매핑
> **수업 방향**: 단일 선택만 허용하는 **라디오 버튼 그룹(`name="one"`)의 특성을 유지하며 복수의 상태 목록을 똑똑하게 관리하는 기법**을 탐구합니다.

*   **핵심 학습 개념**:
    *   **상태 계산 변형**: 클릭된 라디오 버튼의 키워드(`value`)를 기준으로 해당 언어는 `true`로 설정하고 나머지는 전부 `false`로 돌리는 여러 가지 방법(forEach 루프, reduce 축약, functional state update)을 비교 분석합니다.
    *   **computed property name 문법**: 객체 상태 갱신 시 변경되는 키를 동적으로 치환하는 리액트의 핵심 업데이트 패턴인 `setInfo(data => ({ ...data, [value]: checked }))`를 이해합니다.

---

## 📌 Ex07. 체크박스(Checkbox) 다중 선택 제어
> **수업 방향**: 여러 개의 옵션을 동시에 다중 선택 가능한 **체크박스 요소들의 선택 조합 상태를 단일 오브젝트 구조로 통합 제어**하는 법을 실습합니다.

*   **핵심 학습 개념**:
    *   **완전 제어 체크박스**: 각 체크박스의 체크 여부를 스토리지나 상태 객체의 키와 직접 결합(`checked={info[v]}`)하여 완벽히 제어되는 입력(Controlled Input) 형태로 만듭니다.
    *   **다중 온/오프 상태 누적**: 여러 요소를 자유롭게 키고 끌 때 변경 내역을 단일 오브젝트 맵(`{ "HTML": true, "CSS": false, ... }`)으로 안정적으로 갱신하고, 그 결과를 `JSON.stringify(info)`로 디버깅하는 최적 상태 설계를 습득합니다.



```jsx
/* main.jsx */
// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </StrictMode>,
);

```

```jsx
/*App.jsx*/
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Ex01 from "./pages/Ex01";
import Ex02 from "./pages/Ex02";
import Ex03 from "./pages/Ex03";
import Ex04 from "./pages/Ex04";
import Ex05 from "./pages/Ex05";
import Ex06 from "./pages/Ex06";
import Ex07 from "./pages/Ex07";

function App() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/ex01">예제1</Link> |{" "}
      <Link to="/ex02">예제2</Link> | <Link to="/ex03">예제3</Link> |{" "}
      <Link to="/ex04">예제4</Link> | <Link to="/ex05">예제5</Link> |{" "}
      <Link to="/ex06">예제6</Link> | <Link to="/ex07">예제7</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ex01" element={<Ex01 />}></Route>
        <Route path="/ex02" element={<Ex02 />}></Route>
        <Route path="/ex03" element={<Ex03 />}></Route>
        <Route path="/ex04" element={<Ex04 />}></Route>
        <Route path="/ex05" element={<Ex05 />}></Route>
        <Route path="/ex06" element={<Ex06 />}></Route>
        <Route path="/ex07" element={<Ex07 />}></Route>
      </Routes>
    </>
  );
}

export default App;

```




첨부파일 : ex01 - 07, home

---

# [React] 실습코드 2 (Ex08 ~ Ex10)

> **학습 목표 흐름**: 다양한 리액트 스타일링 기법(Ex08) ➡️ 대용량 리스트 데이터 필터링 및 조건부 UI 분기(Ex09) ➡️ 제어 컴포넌트를 이용한 사용자 상호작용 및 ToDoList 상태 CRUD 구현(Ex10)으로 이어지는 리액트 기초 다지기 과정.

---

## 📌 Ex08. 다양한 스타일링(Styling) 기법 적용
> **수업 방향**: 리액트 컴포넌트에 디자인을 입히는 **다양한 스타일링 옵션을 비교 분석**하고, 컴포넌트별 스타일 스코프 충돌을 해결하는 방법을 학습합니다.

*   **핵심 학습 개념**:
    *   **인라인 객체 스타일링**: JS 객체 문형식으로 스타일을 직접 작성(`style={mystyle1}`)하는 문법과, 스프레드 연산자(`...`)를 이용해 기존 스타일을 상속받아 일부분만 오버라이딩하는 최적화 패턴을 실습합니다.
    *   **전역 CSS Import**: 일반적인 클래스 이름(`className="box1"`)을 통한 고전적 디자인 바인딩을 적용합니다.
    *   **CSS Modules 해결책**: 파일명이 `.module.css`로 명명된 독립 스타일시트를 호출하여 클래스 명 충돌(Namespace Clashing)을 원천 차단하는 기법(`mystyle2.box1`)과, 하이픈이 포함된 클래스명을 위한 브래킷 표기법(`mystyle2["box1-new"]`)을 다룹니다.

---

## 📌 Ex09. 조건부 렌더링과 동적 리스트(List & Filter)
> **수업 방향**: 배열 데이터를 화면에 그려주는 **반복문 처리 패턴**과, 특정 사용자 필터 조건에 맞춰 **UI를 유연하게 분기하는 실습**을 진행합니다.

*   **핵심 학습 개념**:
    *   **데이터 필터링(`filter()`) 연동**: 체크박스 선택 여부(`onlyPassed`) 상태에 따라 기존 원본 배열 데이터를 합격 기준(60점 이상) 데이터로 실시간 교체해 주는 필터 알고리즘을 구현합니다.
    *   **고유 Key Prop 지정**: `students.map(...)` 루프를 돌려 리스트 아이템을 동적 생성할 때 리액트 렌더링 최적화의 필수 조건인 고유 `key`(`key={student.id}`) 주입 이유를 이해합니다.
    *   **단축 평가(`&&`)와 삼항 연산자 조건부 분기**:
        *   체크박스가 켜졌을 때만 축하 서브 컴포넌트를 노출하는 단축 평가(`onlyPassed && <Inp />`) 구현.
        *   학생의 성적에 따라 동적으로 스타일 클래스를 변경(`score >= 60 ? pass : fail`)하는 동적 스타일 토글 적용.

---

## 📌 Ex10. ToDoList 기초 구현 (제어 컴포넌트 & 불변성)
> **수업 방향**: 사용자 입력값 제어(Two-Way Binding)의 기초를 다지고, **리액트에서 배열의 상태를 안전하게 수정(불변성 유지)하는 CRUD 기본기**를 배웁니다.

*   **핵심 학습 개념**:
    *   **제어 컴포넌트(Controlled Input)**: 인풋 창의 입력 데이터(`value`)와 핸들러(`onChange`)를 리액트의 `state`와 동기화시켜 실시간으로 폼 데이터 흐름을 추적합니다.
    *   **스프레드 연산자를 통한 배열 추가**: 원본 배열 상태를 직접 오염(Push)시키지 않고, 불변성 유지를 위해 깊은 복사 복제본과 신규 입력을 합치는 `setArr([...arr, inData])` 연산자를 구현합니다.
    *   **상태 기반 속성(Attribute) 제어**: 등록된 할 일 목록 개수(`arr.length`)를 실시간 추적하여, 삭제할 대상이 없는 경우 "모두삭제" 버튼을 비활성화(`disabled={arr.length <= 0}`)하는 동적 속성 조작을 연습합니다.
    *   **도전 과제 제안**: 엔터키 입력 바인딩, 체크박스 선택 시 취소선 긋기, `localStorage` 연동을 통한 브라우저 새로고침 데이터 보존 등 한 단계 높은 미션을 해결하기 위한 기본 환경을 설계합니다.


```jsx
/* main.jsx */
// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </StrictMode>,
);

```

```jsx
/*App.jsx*/
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Ex08 from "./pages/Ex08";
import Ex09 from "./pages/Ex09";
import Ex10 from "./pages/Ex10";
import Ex11 from "./pages/Ex11";

function App() {
  return (
    <>
      <Link to="/ex08">예제8</Link> | <Link to="/ex09">예제09</Link> |{" "}
      <Link to="/ex10">예제10</Link> | <Link to="/ex11">예제11</Link>
      <Routes>
        <Route path="/ex08" element={<Ex08 />}></Route>
        <Route path="/ex09" element={<Ex09 />}></Route>
        <Route path="/ex10" element={<Ex10 />}></Route>
        <Route path="/ex11" element={<Ex11 />}></Route>
      </Routes>
    </>
  );
}

export default App;

```

첨부파일 : ex08-10
---

# [React] 실습코드 3 (Ex11 ~ Ex12)
> **학습 목표 흐름**: 조건부 렌더링 방식에 따른 컴포넌트 생명주기 및 리소스 정리(Ex11) ➡️ 렌더링에 영향을 주지 않는 데이터 저장 및 DOM 직접 접근을 위한 `useRef` 실무 패턴 완벽 정복(Ex12)으로 이어지는 리액트의 핵심 생태계 제어 방법론 학습.

---

## 📌 Ex11. 컴포넌트 생존 및 생명주기 테스트
> **수업 방향**: 컴포넌트의 마운트(Mount), 언마운트(Unmount) 개념을 배우고, **조건부 렌더링 방식에 따른 리소스 누수(Memory Leak)와 메모리 관리의 중요성**을 체험합니다.

*   **핵심 학습 개념**:
    *   **조건부 렌더링(`&&`) vs CSS 가리기(`display: none`)**:
        *   `show && <Child />`: 상태가 `false`가 되면 컴포넌트가 완전히 파괴(언마운트)되어 메모리에서 삭제됩니다.
        *   `display: show ? 'block' : 'none'`: 화면에서만 숨겨질 뿐 컴포넌트 객체와 그 안의 타이머 등은 백그라운드에서 계속 살아 숨쉬며 자원을 소비합니다.
    *   **useEffect Cleanup을 통한 리소스 해제**:
        *   의존성 배열(`[count]`)이 바뀔 때마다 기존 타이머를 `clearInterval(timer)`로 파괴하고 새 타이머를 바인딩하는 불변 청소 패턴을 학습합니다.
        *   컴포넌트가 완전히 파괴(언마운트)될 때 백그라운드 타이머를 정상 종료시켜 주는 클린업 리턴 함수(Cleanup Function)가 왜 누수 방지에 필수적인지 직접 확인합니다.

---

## 📌 Ex12. useRef 자주 쓰는 4가지 핵심 패턴
> **수업 방향**: 값이 변경되어도 화면이 다시 그려지지 않는(재렌더링 방지) **순수 변수 보관소 기능**과, 리액트에서 **실제 HTML DOM 요소에 직접 접근할 때 사용하는 `useRef`**의 실무 시나리오를 완성합니다.

*   **핵심 학습 개념**:
    *   **1. DOM 노드 포커스 제어 (`inputRef.current.focus()`)**:
        *   특정 이벤트(버튼 클릭 등) 발생 시, 검색창이나 채팅 입력 폼에 포커스(커서)를 자동으로 맞춰주는 실무 UX 필수 코드를 다룹니다.
    *   **2. 엔터키 입력 처리 및 데이터 연동**:
        *   인풋창에서 `onKeyDown` 이벤트를 가로채 엔터키(`Enter`)를 감지했을 때 리스트 상태(`messages`)에 메시지를 동적으로 추가하고 폼을 초기화하는 상태-DOM 융합 패턴을 적용합니다.
    *   **3. 스크롤 자동 내림 제어 (`chatboxRef.current.scrollTop`)**:
        *   새로운 대화 메시지가 등록될 때마다 채팅창 컨테이너의 높이값(`scrollHeight`)을 계산하여 자동으로 가장 하단(최신 대화 영역)으로 스크롤바를 떨어뜨리는 동적 DOM 스타일 조작을 `useEffect` 의존성 조합과 함께 실습합니다.
    *   **4. setInterval 타이머 ID 보관소 (`timerRef.current`)**:
        *   타이머 시작/정지 시 사용하는 `setInterval`의 고유 고리 ID값은 화면에 보여지는 변수가 아니므로 상태(`state`)가 아닌 `ref`에 보관해야 재렌더링에 영향 없이 정밀하게 타이머를 켜고 끌 수 있음을 배웁니다.
        *   타이머가 중복으로 겹쳐 실행되는 버그를 `if (timerRef.current !== null) return;` 방어 코드로 차단하는 법을 실습합니다.


<img width="713" height="271" alt="image" src="https://github.com/user-attachments/assets/51c134a1-ee3d-43ff-a4ef-3a9dbda6cf29" />


<img width="729" height="372" alt="image" src="https://github.com/user-attachments/assets/67dfb9f8-6ce9-4de3-9f03-8c69ea507e8e" />


---

# [React] 실습코드 4 (Ex13 ~ Ex16)

> **학습 목표 흐름**: 비동기 데이터 통신과 로딩 제어(Ex13) ➡️ 대용량 연산 캐싱 최적화(Ex14) ➡️ 고속 이벤트 프레임 스케줄링 최적화(Ex15/15a) ➡️ 실시간 다차원 데이터 상태 및 계산 연동(Ex16)으로 이어지는 단계별 성능 최적화 및 실무 상태 관리 패턴 마스터.

---

## 📌 Ex13. fetch API & 스피너 로딩 처리
> **수업 방향**: 웹 애플리케이션의 필수 요소인 비동기 통신과 네트워크 지연 상황에 대처하는 **사용자 경험(UX) 제어**를 학습합니다.

*   **핵심 학습 개념**:
    *   **비동기 데이터 페칭**: 컴포넌트 마운트 시점에 `useEffect` 내에서 `fetch API`를 활용해 외부 가상 데이터 서버(JSONPlaceholder)에서 리스트 데이터를 안전하게 요청하는 흐름을 익힙니다.
    *   **인위적 지연(Latency Simulation)**: 통신 속도가 빠른 로컬 환경에서 로딩 UI를 눈으로 확인하고 테스트할 수 있도록, `setTimeout`을 통해 3초간 강제로 렉을 유도하는 테스팅 기법을 실습합니다.
    *   **useEffect Cleanup**: 컴포넌트가 언마운트될 때 메모리 누수(Memory Leak)를 유발하지 않도록 `clearTimeout`을 사용해 등록된 타이머를 깨끗이 제거해주는 청소 함수(Cleanup Function)의 필수성을 이해합니다.
    *   **조건부 렌더링에 의한 UX 개선**: 데이터의 유무(`data.length`)에 따라 로딩 중에는 회전하는 **스피너 GIF와 메세지**를 띄우고, 로딩 완료 시 목록을 깔끔하게 뿌려주는 화면 스위칭을 구현합니다.

---

## 📌 Ex14. useMemo() & 렌더링 최적화
> **수업 방향**: React가 상태 변화에 따라 컴포넌트 전체를 재렌더링할 때 발생하는 **불필요한 중복 연산과 화면 버벅임(UI 렉) 문제를 극복**하는 법을 배웁니다.

*   **핵심 학습 개념**:
    *   **UI 블로킹 현상 재현**: 루프 연산(10억 번 반복)을 유발하는 아주 무거운 함수를 선언하여 화면의 반응을 일부러 마비시킵니다.
    *   **useMemo를 통한 캐싱**: 관련 없는 입력(예: 숫자 증가/감소)이 바뀔 때 무거운 연산이 재실행되지 않고 메모리에 이미 저장된 이전 결과값(Memoization)을 즉각 재사용하는 방식을 학습합니다.
    *   **의존성 배열(Dependency Array)**: 렉을 유발해야 하는 특정 대상(`text` 상태 입력)이 수정될 때만 무거운 연산이 돌고, 그 외의 상태 변화에서는 캐시가 완벽히 보존되는 의존성 배열 설계 능력을 배양합니다.

---

## 📌 Ex15 & Ex15a. 마우스 좌표 추적 & requestAnimationFrame 최적화
> **수업 방향**: 마우스 이동 이벤트(`onPointerMove`)와 같이 **단시간에 수백 번 쏟아지는 고밀도 이벤트 발생 시 브라우저 주사율에 맞춰 성능을 극대화하는 기법**을 비교 실습합니다.

*   **핵심 학습 개념**:
    *   **Ex15 (기본 좌표 추적)**: React 포인터 이벤트를 통해 영역 안의 상대 좌표(X, Y)를 계산하고, 즉각적으로 `useState`에 담아 마우스를 따라다니는 원형 포인터(글로잉 이펙트)를 가볍게 구현합니다.
    *   **Ex15a (rAF 프레임 스케줄링 최적화)**:
        *   마우스 이동 속도를 React 렌더링 주기가 따라가지 못해 화면이 밀리거나 CPU 점유율이 솟구치는 한계를 극복합니다.
        *   **`useRef`에 값 기록**: 렌더링을 트리거하지 않고 빠르게 값만 적재하는 `useRef`(`positionRef.current`)에 최신 마우스 실시간 위치를 무조건 저장합니다.
        *   **`requestAnimationFrame` 연동**: 브라우저의 다음 화면 갱신 프레임 단위(보통 1초에 60회 혹은 144회)에 맞춰 딱 한 번만 렌더링 상태를 승인하는 효율적인 디바운스/스로틀링과 유사한 고급 동기화 흐름을 체득합니다.

---

## 📌 Ex16. 외부 데이터 임포트 & 실시간 다차원 연산
> **수업 방향**: 실제 이커머스 쇼핑몰 장바구니나 주문서에서 가장 널리 쓰이는 **다중 제품 수량 가변 상태 처리와 전체 실시간 합산 알고리즘**을 완성합니다.

*   **핵심 학습 개념**:
    *   **모듈 데이터 임포트**: 컴포넌트 내부가 아닌 외부 데이터 파일(`ex16.data.js`)에 격리 설계된 대용량 상품 객체 리스트를 `import`하여 테이블 양식으로 자동 구성합니다.
    *   **단일 배열 기반의 수량 관리**: 개별 컴포넌트가 아닌 한 부모 밑에서 모든 행의 수량을 배열 상태(`ea` 상태) 하나로 일괄 매핑하고 관리하는 상태 통합(Lifting State Up) 실무 패턴을 적용합니다.
    *   **불변성을 유지하는 배열 상태 갱신**: 타겟 행의 `id` 혹은 인덱스 정보만을 가져와 불변성 원칙(Spread Operator `...`)을 지키며 수량을 부분 수정하는 조작법을 익힙니다.
    *   **누적 연산(reduce)의 실시간 계산**: 각 상품마다 가진 고유 가격(`price`) × 입력 수량 + 배송비(단, 수량이 1개 이상일 때만 부과) 공식을 실시간으로 더해, 사용자가 수량을 건드릴 때마다 총 합계 금액이 0.1초의 지연도 없이 동적으로 연산되는 프론트엔드 연산 파이프라인을 설계합니다.
