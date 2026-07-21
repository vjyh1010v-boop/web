import { useState } from "react";

function Ex01() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const loadData = () => {
    const storedData = localStorage.getItem("test1");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  };

  const saveData = () => {
    const jdata = JSON.stringify(data);
    localStorage.setItem("test1", jdata);
  };

  const deleteData = (id) => {
    setData(data.filter((item) => item.id !== id));
    localStorage.removeItem("test1");
  };

  const clearData = () => {
    setData([]);
    localStorage.clear();
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const countItem = () => {
    return data.length;
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
            01. LocalStorage 연습
          </h1>
          <p className="description" style={{ color: "var(--text-sub)" }}>
            데이터 쓰기 / 읽기 기능을 연습하는 예제입니다.
          </p>
        </header>

        <main className="example-grid">
          <article className="example-card">
            <div className="card-title-row">
              <span className="file-badge">데이터</span>
              <h2>현재 데이터</h2>
            </div>
            <p className="description">{countItem()}개의 항목이 있습니다.</p>
            <div className="result-box">
              {filteredData.length === 0 ? (
                <p style={{ color: "var(--text-sub)" }}>데이터가 없습니다.</p>
              ) : (
                <ul style={{ paddingLeft: "1rem" }}>
                  {filteredData.map((item, index) => (
                    <li key={item.id} style={{ marginBottom: "0.75rem" }}>
                      <strong style={{ color: "var(--text-main)" }}>
                        {item.name}
                      </strong>{" "}
                      - {item.comment}
                      <button
                        onClick={() => deleteData(item.id)}
                        className="secondary-button"
                        style={{ marginLeft: "8px" }}
                      >
                        삭제
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>

          <article className="example-card">
            <div className="card-title-row">
              <span className="file-badge">작업</span>
              <h2>CRUD 작업</h2>
            </div>
            <div className="control-group">
              <label>
                <input
                  type="text"
                  placeholder="데이터 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input"
                />
              </label>
            </div>
            <div className="control-group">
              <button
                onClick={saveData}
                className="primary-button"
                style={{ color: "var(--accent)" }}
              >
                💾 저장 (Save)
              </button>
              <button
                onClick={loadData}
                className="secondary-button"
                style={{ color: "var(--text-main)" }}
              >
                📥 불러오기 (Load)
              </button>
              <button
                onClick={clearData}
                className="secondary-button"
                style={{ color: "var(--danger)" }}
              >
                🗑️ 초기화 (Clear)
              </button>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}

export default Ex01;
