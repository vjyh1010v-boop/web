import "./Ex08.css";
import mystyle2 from "./Ex08.module.css";

const mystyle1 = {
  width: "100px",
  height: "100px",
  backgroundColor: "rgb(124, 133, 206)",
};

function Ex08() {
  return (
    <>
      <h1>8. 스타일적용</h1>
      <div style={mystyle1}>style1a</div>
      <div style={{ ...mystyle1, backgroundColor: "rgb(120, 236, 120)" }}>
        style1b
      </div>
      <div className="box1">style0</div>
      <div className={mystyle2.box1}>style2a</div>
      <div className={mystyle2["box1-new"]}>style2b</div>
    </>
  );
}

export default Ex08;
