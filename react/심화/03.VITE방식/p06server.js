const express = require("express");
const path = require("path");
const app = express();

// JSON 및 URL-encoded 본문을 파싱하기 위한 미들웨어 추가
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/dist"))

// Ex17과 데이터 통신을 위한 POST 라우터 추가
app.post("/data", (req, res) => {
    console.log("서버가 수신한 데이터:", req.body);
    const { username, password } = req.body;
    
    // 클라이언트로 데이터와 메시지 전송
    res.json({
        message: "서버가 데이터를 성공적으로 받았습니다!",
        username: username,
        password: password
    });
});

// React Router 브라우저 라우팅 지원을 위한 Fallback 라우터 추가 (새로고침/직접접속 대응)
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(3000, () => {
    console.log(`server start on http://localhost:3000`);
});