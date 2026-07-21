import { useState } from "react";

function Ex04() {
  const [in1, setIn1] = useState("");
  const [in2, setIn2] = useState("");

  const handleIn1 = (e) => setIn1(e.target.value);
  const handleIn2 = (e) => setIn2(e.target.value);

  return (
    <div className="app">
      <header className="app-header">
        <div className="eyebrow">PKNU 2026 - React 예제</div>
        <h1>04. Input 을 이용한 실시간 계산</h1>
        <p className="description">
          입력 값은 자동으로 계산되며, 유효한 숫자만 입력할 수 있습니다.
        </p>
      </header>

      <main className="example-grid">
        <article className="example-card">
          <div className="card-title-row">
            <span className="file-badge">상태</span>
            <h2>실시간 계산</h2>
          </div>
          <p className="description">
            두 입력 값을 선택하면 자동으로 연산된 결과가 표시됩니다.
          </p>

          <div className="control-group">
            <label>
              <span className="text-main">1 번째 숫자</span>
            </label>
            <input
              type="text"
              onChange={handleIn1}
              placeholder="숫자 입력"
              value={in1}
              className="input"
            />
          </div>

          <div className="control-group">
            <label>
              <span className="text-main">2 번째 숫자</span>
            </label>
            <input
              type="text"
              onChange={handleIn2}
              placeholder="숫자 입력"
              value={in2}
              className="input"
            />
          </div>

          {in1 && in2 && (
            <div className="result-box">
              <div className="text-main">
                {parseInt(in1)} + {parseInt(in2)} ={" "}
                {parseInt(in1) + parseInt(in2)}
              </div>
              <div className="text-main">
                {parseInt(in1)} - {parseInt(in2)} ={" "}
                {parseInt(in1) - parseInt(in2)}
              </div>
              <div className="text-main">
                {parseInt(in1)} × {parseInt(in2)} ={" "}
                {parseInt(in1) * parseInt(in2)}
              </div>
              <div className="text-main">
                {parseInt(in1)} ÷ {parseInt(in2)} ={" "}
                {parseInt(in1) / parseInt(in2)}
              </div>
            </div>
          )}
        </article>
      </main>
    </div>
  );
}

export default Ex04;
