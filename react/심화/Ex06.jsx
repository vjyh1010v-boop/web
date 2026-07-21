import { useState } from "react";
import list from "./ex06_sample";

function Ex06() {
  const [info, setInfo] = useState("내용을 작성하세요");

  /* obj false */
  const obj = {};
  list.forEach((v, i) => {
    obj[v] = false;
  });
  // {"HTML":false,"CSS":false,"JAVASCRIPT":false,"JAVA":false,"PYTHON":false}

  const handleInfo = (e) => {
    const { value, checked } = e.target;

    /* 방법1-a */
    // const obj = {};
    // list.forEach((v, i) => {
    //   if (v === value) {
    //     obj[v] = true;
    //   } else {
    //     obj[v] = false;
    //   }
    // });

    /* 방법1-b */
    // const obj = list.reduce((a, c) => {
    //   a[c] = c === value;
    //   return a;
    // }, {});
    // setInfo(obj);

    /* 방법2-a */
    // obj[value] = checked;
    // setInfo(obj);

    /* 방법2-b */
    setInfo(obj);
    setInfo((data) => ({ ...data, [value]: checked }));
  };

  // {"HTML":false,"CSS":false,"JAVASCRIPT":true,"JAVA":false,"PYTHON":false}

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h1>6. 라디오 버튼</h1>
      <h2>{JSON.stringify(info)}</h2>
      {list.map((v, i) => {
        return (
          <div key={i}>
            <input type="radio" name="one" value={v} onChange={handleInfo} />
            {v}
            <br />
          </div>
        );
      })}
      <h3>{JSON.stringify(obj)}</h3>
    </div>
  );
}

export default Ex06;
