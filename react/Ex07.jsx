import { useState } from "react";
import list from "./ex06_sample";

function Ex07() {
  const [info, setInfo] = useState({});

  const obj = {};
  list.forEach((v, i) => {
    obj[v] = false;
  });

  const handleInfo = (e) => {
    const { value, checked } = e.target;

    setInfo(obj);
    setInfo((data) => ({ ...data, [value]: checked }));
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "15px", textAlign: "center" }}>
        예제 7: 체크박스
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {list.map((v, i) => {
          return (
            <label
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: "8px 12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                color: "#333",
                marginBottom: "5px",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
              }}
            >
              <input
                type="checkbox"
                name="one"
                value={v}
                checked={info[v]}
                onChange={handleInfo}
                style={{ marginRight: "8px" }}
              />
              {v}
            </label>
          );
        })}
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ddd",
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        선택된 상태: {JSON.stringify(info)}
      </div>
    </div>
  );
}

export default Ex07;
