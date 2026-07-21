import { useState } from "react";
import passStyle from "./Ex09.module.css";
const students = [
  { id: 1, name: "김한솔", score: 88 },
  { id: 2, name: "이민수", score: 92 },
  { id: 3, name: "박지영", score: 35 },
  { id: 4, name: "정민재", score: 55 },
  { id: 5, name: "최하은", score: 90 },
  { id: 6, name: "한동현", score: 68 },
  { id: 7, name: "오민정", score: 58 },
  { id: 8, name: "강준호", score: 95 },
  { id: 9, name: "윤서연", score: 52 },
  { id: 10, name: "김태우", score: 91 },
];
const Inp = () => <h2>축하드려요!!</h2>;

function Ex09() {
  const [onlyPassed, setOnlyPassed] = useState(false);
  const passStudent = onlyPassed
    ? students.filter((s) => s.score >= 60)
    : students;

  return (
    <>
      <h1>조건부 렌더링과 리스트</h1>
      <input
        type="checkbox"
        checked={onlyPassed}
        onChange={(e) => setOnlyPassed(e.target.checked)}
      />
      <label htmlFor="" className="toggle">
        합격자만 보기
      </label>
      <div>{onlyPassed && <Inp />}</div>
      <ul className="list">
        {passStudent.map((student) => {
          return (
            <li key={student.id}>
              <span>{student.name}</span>{" "}
              <strong
                className={
                  student.score >= 60 ? passStyle.pass : passStyle.fail
                }
              >
                {student.score}점
              </strong>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Ex09;
