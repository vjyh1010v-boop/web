import { useState, useRef, useEffect } from "react";
import mybox from "./Ex12.module.css";

function Ex12() {
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    "반가워요",
    "감사합니다",
    "아름다우세요",
    "그런 소리 많이 듣습니다.",
    "솔찍하시네요.",
  ]);

  const inputRef = useRef(null);
  const chatboxRef = useRef(null);
  const timerRef = useRef(null);

  const handleInp = (e) => setMessage(e.target.value);
  const focusInput = () => {
    inputRef.current.focus();
    setMessage("");
  };

  const addMessage = () => {
    setMessages((prev) => [...prev, message]);
    setMessage("");
  };

  const MoveScroll = () => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  };
  useEffect(MoveScroll, [messages]);

  const startTimer = () => {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => setSeconds((prev) => prev + 1), 1000);
  };
  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <>
      <h1>12. useRef 자주쓰는 3가지</h1>
      <p>
        <em>
          useRef는 input 포커스, 스크롤 이동, 타이머 id 저장처럼 화면 상태가
          아닌 값을 다룰 때 사용한다.
        </em>
      </p>
      <hr />
      <section style={{ backgroundColor: "beige", marginBottom: "24px" }}>
        <h2>1. 버튼을 누르면 input으로 커서 보내기</h2>
        <button onClick={focusInput}>input 포커스</button>
      </section>
      <section style={{ backgroundColor: "#f8d0d0", marginBottom: "24px" }}>
        <h2>2. 채팅창에 추가하기</h2>
        <span>{message}</span>
        <br />
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={handleInp}
          onKeyDown={(e) => {
            if (e.key == "Enter") addMessage();
          }}
          placeholder="메세지를 입력하세요."
        />
        <button onClick={addMessage}>메세지추가</button>
      </section>
      <section>
        <h2>3. 채팅창 아래로 스크롤하기</h2>
        <button onClick={MoveScroll}>아래로</button>
        <div className={mybox.box} ref={chatboxRef}>
          {messages.map((v, i) => {
            return <p key={i}>{v}</p>;
          })}
        </div>
      </section>
      <section>
        <h2>4. setInterval id 값 저장하기</h2>
        <p>타이머:{seconds}</p>
        <button onClick={startTimer}>시작</button>
        <button onClick={stopTimer}>정지</button>
        <hr />
        <em>
          timerRef.current에는 interval id가 저장된다. 이 값은 화면에 보여줄
          값이 아니므로 state가 아니라 ref에 보관
        </em>
      </section>
    </>
  );
}
export default Ex12;
