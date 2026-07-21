import { useState } from "react";

function Ex10() {
  const [inData, setIndata] = useState("");
  const [arr, setArr] = useState([]);
  const handleInput = (e) => setIndata(e.target.value);
  const handleAdd = () => {
    setArr([...arr, inData]);
    setIndata("");
  };
  const handleDel = () => {
    setArr([]);
  };

  return (
    <>
      <h1>10. ToDoList 만들기</h1>
      <label htmlFor="inin">배열요소입력 : </label>
      <input type="text" id="inin" onChange={handleInput} value={inData} />
      <br />
      <button onClick={handleAdd}>추가</button>
      <button onClick={handleDel} disabled={arr.length <= 0}>
        모두삭제
      </button>
      <hr />
      <div>{inData}</div>
      <hr />
      {/* <div>{arr}</div> */}
      {arr.map((v, i) => {
        return (
          <div key={i}>
            <input type="checkbox" />
            {`${i + 1}번째 / ${v}`}
          </div>
        );
      })}
      <pre>{`도전사항:
      1. 엔터로 입력가능
      2. CSS꾸미기
      3. 체크박스로 완료는 줄긋기
      4. Localstroage 에 저장/ 읽기 기능을 넣어서 새로고침시에도 삭제되지 않게 하기
      `}</pre>
    </>
  );
}
export default Ex10;
