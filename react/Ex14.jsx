import { useState, useMemo } from "react";

const ShowState = ({ num, text }) => {
  const lag = () => {
    console.warn("과도한 연산 실행중...");
    let x = 0;
    for (let i = 0; i < 1000 * 1000 * 1000; i++) {
      x += i;
    }
    return x;
  };

  const calc = useMemo(() => lag(), [text]);

  return (
    <>
      <p>렉유발: {calc}</p>
      <p>숫자:{num}</p>
      <p>문자:{text}</p>
    </>
  );
};

function Ex14() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  return (
    <>
      <h1>14. useMemo(), 렌더링 최적화</h1>
      <h2>숫자변경</h2>
      {/* <div>{num}</div> */}
      <button onClick={() => setNum((prev) => prev + 1)}> + 증가</button>
      <button onClick={() => setNum((prev) => prev - 1)}> - 감소</button>
      <hr />
      <h2>글자변경</h2>
      {/* <span>{text}</span> */}
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <ShowState num={num} text={text}></ShowState>
    </>
  );
}

export default Ex14;
