import { useState } from "react";

function Ex02() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "light",
  );

  const toggle = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <div className="app">
        <header className="app-header">
          <div className="eyebrow" style={{ color: "var(--accent)" }}>
            PKNU 2026 - React 예제
          </div>
          <h1
            style={{
              color: "var(--text-main)",
              fontSize: "1.5rem",
              marginBottom: "0.5rem",
            }}
          >
            02. LocalStorage 를 이용한 테마색 설정 기억하기
          </h1>
          <p className="description" style={{ color: "var(--text-sub)" }}>
            웹사이트를 방문할 때마다 테마가 변경되지 않도록 저장하는 예제입니다.
          </p>
        </header>

        <main className="example-grid">
          <article className="example-card">
            <div className="card-title-row">
              <span className="file-badge">상태</span>
              <h2>현재 테마</h2>
            </div>
            <p className="description">
              {theme === "dark" ? "대중모드" : "주간모드"}
            </p>
            <div className="result-box">
              <div
                className={theme === "light" ? "light-mode" : "dark-mode"}
                style={{
                  backgroundColor: theme === "light" ? "#ffffff" : "#0d1117",
                  color: theme === "light" ? "#3fb950" : "var(--text-main)",
                  borderColor: theme === "light" ? "#c0c5ce" : "var(--border)",
                }}
              >
                <h2
                  style={{
                    color: theme === "light" ? "var(--text-main)" : "#ffffff",
                  }}
                >
                  {theme === "light" ? "☀️ 주간모드" : "🌃 야간모드"}
                </h2>
              </div>
            </div>
          </article>

          <article className="example-card">
            <div className="card-title-row">
              <span className="file-badge">제어</span>
              <h2>테마 변경</h2>
            </div>
            <div className="control-group">
              <button
                onClick={toggle}
                className="primary-button"
                style={{ color: theme === "light" ? "#3fb950" : "#f85149" }}
              >
                {theme === "light"
                  ? "🌙 야간모드로 변경"
                  : "☀️ 주간모드로 변경"}
              </button>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}

export default Ex02;
