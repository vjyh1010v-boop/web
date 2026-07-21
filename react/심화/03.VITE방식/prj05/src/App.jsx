import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Ex08 from "./pages/Ex08";
import Ex09 from "./pages/Ex09";
import Ex10 from "./pages/Ex10";
import Ex11 from "./pages/Ex11";
import Ex12 from "./pages/Ex12";

function App() {
  return (
    <>
      <Link to="/ex08">예제8</Link> | <Link to="/ex09">예제09</Link> |{" "}
      <Link to="/ex10">예제10</Link> | <Link to="/ex11">예제11</Link> |{" "}
      <Link to="/ex12">예제12</Link>
      <Routes>
        <Route path="/ex08" element={<Ex08 />}></Route>
        <Route path="/ex09" element={<Ex09 />}></Route>
        <Route path="/ex10" element={<Ex10 />}></Route>
        <Route path="/ex11" element={<Ex11 />}></Route>
        <Route path="/ex12" element={<Ex12 />}></Route>
      </Routes>
    </>
  );
}

export default App;
