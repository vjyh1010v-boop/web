// React Router 브라우저 라우팅 지원을 위한 Fallback 라우터 추가 (새로고침/직접접속 대응)
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(3000, () => {
    console.log(`server start on 3000`);
});