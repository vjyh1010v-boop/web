import { useState } from "react";
import axios from "axios";

const Ex17 = () => {
    const [sdata, setSdata] = useState({ username:"", password:""})
    const [mydata, setMyData] = useState("")
    
    const handleInput = e => {
        setSdata(prev => ({...prev,[e.target.name]:e.target.value}))
    }

    const sendPost = () => {
        axios.post("/data", sdata).then(result => {
            console.log(result.data);
            // 서버로부터 수신한 응답 객체를 보기 좋은 문자열 형태로 저장
            setMyData(`[메시지] ${result.data.message} | [ID] ${result.data.username}`);
        }).catch(err => {
            console.error("통신 에러:", err);
            setMyData("서버 연결 실패. 빌드 후 노드 서버를 실행했는지 확인해 주세요.");
        });
    }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#3b82f6", borderBottom: "2px solid #3b82f6", paddingBottom: "10px" }}>17. Axios로 데이터통신</h1>
      <h2 style={{ color: "#64748b", fontSize: "16px", marginBottom: "20px" }}>nodejs 위에서 build하여 동작</h2>
      
      <div style={{ backgroundColor: "#f8fafc", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ margin: "0 0 10px 0", color: "#1e293b" }}>서버로 보내는 값:</h3>
          <div style={{ display: "grid", gap: "10px", marginBottom: "15px" }}>
            <div>
              <label htmlFor="sendMsg" style={{ display: "inline-block", width: "80px", fontWeight: "bold" }}>메세지:</label>
              <input 
                type="text" 
                id="sendMsg" 
                name="username" 
                onChange={handleInput} 
                value={sdata.username}
                placeholder="아이디 또는 메시지 입력"
                style={{ padding: "6px 10px", borderRadius: "4px", border: "1px solid #cbd5e1", width: "200px" }}
              />
            </div>
            <div>
              <label htmlFor="password" style={{ display: "inline-block", width: "80px", fontWeight: "bold" }}>패스워드:</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                onChange={handleInput} 
                value={sdata.password}
                placeholder="패스워드 입력"
                style={{ padding: "6px 10px", borderRadius: "4px", border: "1px solid #cbd5e1", width: "200px" }}
              />
            </div>
          </div>
          <button 
            onClick={sendPost}
            style={{ 
              backgroundColor: "#3b82f6", 
              color: "white", 
              border: "none", 
              padding: "8px 16px", 
              borderRadius: "4px", 
              fontWeight: "bold", 
              cursor: "pointer",
              transition: "background-color 0.2s"
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = "#2563eb"}
            onMouseOut={e => e.currentTarget.style.backgroundColor = "#3b82f6"}
          >
            전송
          </button>
        </div>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "15px", marginBottom: "15px" }}>
          <div style={{ fontSize: "14px", color: "#64748b" }}>실시간 입력 상태:</div>
          <div style={{ fontWeight: "500" }}>username: <span style={{ color: "#3b82f6" }}>{sdata.username || "(비어 있음)"}</span></div>
          <div style={{ fontWeight: "500" }}>password: <span style={{ color: "#3b82f6" }}>{sdata.password ? "••••••••" : "(비어 있음)"}</span></div>
        </div>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "15px" }}>
          <h3 style={{ margin: "0 0 10px 0", color: "#1e293b" }}>서버에서 받은 값:</h3>
          <div style={{ 
            backgroundColor: mydata ? (mydata.includes("실패") ? "#fef2f2" : "#f0fdf4") : "#f1f5f9",
            color: mydata ? (mydata.includes("실패") ? "#991b1b" : "#166534") : "#64748b",
            padding: "12px", 
            borderRadius: "6px", 
            minHeight: "40px",
            display: "flex",
            alignItems: "center",
            fontWeight: "500",
            border: mydata ? (mydata.includes("실패") ? "1px solid #fca5a5" : "1px solid #bbf7d0") : "1px solid #e2e8f0"
          }}>
            {mydata || "아직 서버로부터 수신된 데이터가 없습니다."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex17;