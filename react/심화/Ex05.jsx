import { useState } from "react";

function Ex05() {
  const [sel, setSel] = useState("051");

  const city = [
    { city: "서울", code: "02" },
    { city: "부산", code: "051" },
    { city: "광주", code: "062" },
    { city: "대구", code: "053" },
    { city: "대전", code: "042" },
    { city: "제주", code: "064" },
  ];

  const handleCityClick = (code) => setSel(code);

  return (
    <div className="app">
      <header className="app-header">
        <div className="eyebrow">PKNU 2026 - React 예제</div>
        <h1>05. 셀렉터와 연동</h1>
        <p className="description">
          셀렉터의 값을 클릭하여 선택할 수 있으며, 자동으로 연결됩니다.
        </p>
      </header>

      <main className="example-grid">
        <article className="example-card">
          <div className="card-title-row">
            <span className="file-badge">상태</span>
            <h2>지역 선택</h2>
          </div>
          <p className="description">
            셀렉터는 클릭이 아닌 선택으로 값을 바꿀 수 있습니다.
          </p>

          <div className="result-box">
            <h3>선택된 지역</h3>
            <div
              className={sel === "02" ? "selected" : ""}
              style={{
                backgroundColor:
                  sel === "02"
                    ? "rgba(88, 166, 255, 0.1)"
                    : "rgba(255, 255, 255, 0.05)",
              }}
            >
              <span className="text-main">🏙️ 서울</span>
            </div>
            <div
              className={sel === "051" ? "selected" : ""}
              style={{
                backgroundColor:
                  sel === "051"
                    ? "rgba(88, 166, 255, 0.1)"
                    : "rgba(255, 255, 255, 0.05)",
              }}
            >
              <span className="text-main">🌊 부산</span>
            </div>
            <div
              className={sel === "062" ? "selected" : ""}
              style={{
                backgroundColor:
                  sel === "062"
                    ? "rgba(88, 166, 255, 0.1)"
                    : "rgba(255, 255, 255, 0.05)",
              }}
            >
              <span className="text-main">💎 광주</span>
            </div>
            <div
              className={sel === "053" ? "selected" : ""}
              style={{
                backgroundColor:
                  sel === "053"
                    ? "rgba(88, 166, 255, 0.1)"
                    : "rgba(255, 255, 255, 0.05)",
              }}
            >
              <span className="text-main">🏭 대구</span>
            </div>
            <div
              className={sel === "042" ? "selected" : ""}
              style={{
                backgroundColor:
                  sel === "042"
                    ? "rgba(88, 166, 255, 0.1)"
                    : "rgba(255, 255, 255, 0.05)",
              }}
            >
              <span className="text-main">📍 대전</span>
            </div>
            <div
              className={sel === "064" ? "selected" : ""}
              style={{
                backgroundColor:
                  sel === "064"
                    ? "rgba(88, 166, 255, 0.1)"
                    : "rgba(255, 255, 255, 0.05)",
              }}
            >
              <span className="text-main">🏝️ 제주</span>
            </div>
          </div>

          <div className="control-group">
            <label>
              <span className="text-main">셀렉터 (원클릭 선택)</span>
            </label>
            <select
              value={sel}
              onChange={(e) => setSel(e.target.value)}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid",
                borderColor: "var(--border)",
                color: "var(--text-main)",
                padding: "8px 12px",
                borderRadius: "6px",
              }}
            >
              {city.map((v) => (
                <option key={v.code} value={v.code}>
                  {v.city}
                </option>
              ))}
            </select>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Ex05;
