import { useState, useEffect } from "react";

function Ex03() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "light",
  );

  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  const toggle = () =>
    setTheme((what) => (what === "light" ? "dark" : "light"));

  return (
    <>
      {/* Header */}
      <div className="app">
        <header className="app-header">
          <div className="eyebrow">PKNU 2026 - React 예제</div>
          <h1>03. useEffect 활용하기</h1>
          <p className="description">
            테마 변경 시 자동으로 localStorage 에 저장되어 유지됩니다.
          </p>
        </header>

        {/* Main Content */}
        <main className="example-grid">
          <article className="example-card">
            <div className="card-title-row">
              <span className="file-badge">상태</span>
              <h2>현재 테마</h2>
            </div>
            <p className="description">
              테마 변경은 자동적으로 localStorage 에 저장됩니다.
            </p>
            <div className="result-box">
              <div
                className={theme === "light" ? "light-mode" : "dark-mode"}
                style={{
                  backgroundColor: theme === "light" ? "#ffffff" : "#000000",
                  color: theme === "light" ? "#333333" : "#58a6ff",
                }}
              >
                <h2
                  style={{ color: theme === "light" ? "#e6edf3" : "#ffffff" }}
                >
                  {theme === "light" ? "☀️ 주간모드" : "🌃 야간모드"}
                </h2>
              </div>
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

export default Ex03;
