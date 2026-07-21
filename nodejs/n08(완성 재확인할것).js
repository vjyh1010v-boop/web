const express = require("express");
const app = express(); // express 에는 편하게 쓸 수 있게 많은것이 들어가있음.
const port = 3000;
const path = require("path");
const _path = path.join(__dirname, "dist", "index2.html");

/* JSON 해석기 */
app.use(express.json());
/* POST 방식을 위한 해석 */
app.use(express.urlencoded({ extended: true }));

let num = 0;

app.get("/", (req, res) => {
  res.sendFile(_path);
});

app.post("/data", (req, res) => {
  const { name, age } = req.body;
  const newUser = {
    id: num++,
    name,
    age,
  };
  console.log(newUser);
  res.json(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
