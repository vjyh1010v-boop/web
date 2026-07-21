import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Ex13 from "./pages/Ex13";
import Ex14 from "./pages/Ex14";
import Ex15 from "./pages/Ex15";
import Ex15a from "./pages/Ex15a";
import Ex16 from "./pages/Ex16";
import Ex17 from "./pages/Ex17";
import Ex18 from "./pages/Ex18";
import Ex19 from "./pages/Ex19";

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fafafa" }}>
      {/* 프리미엄 상단 네비게이션 네비게이터 바 */}
      <header style={{
        background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        padding: "1rem 2rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        <div style={{ color: "#fff", fontWeight: "800", fontSize: "1.2rem", letterSpacing: "-0.02em" }}>
          🚀 React 2026 Advanced Course
        </div>
        <nav style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", alignItems: "center" }}>
          <Link to="/" style={linkStyle}>Ex13</Link>
          <Link to="/ex14" style={linkStyle}>Ex14</Link>
          <Link to="/ex15" style={linkStyle}>Ex15</Link>
          <Link to="/ex15a" style={linkStyle}>Ex15a</Link>
          <span style={{ color: "#475569" }}>|</span>
          <Link to="/ex16" style={activeLinkStyle}>Ex16 (useReducer)</Link>
          <Link to="/ex17" style={activeLinkStyle}>Ex17 (useContext)</Link>
          <Link to="/ex18" style={activeLinkStyle}>Ex18 (useTransition)</Link>
          <Link to="/ex19" style={activeLinkStyle}>Ex19 (Activation)</Link>
        </nav>
      </header>

      {/* 예제 내용 영역 */}
      <main style={{ padding: "1.5rem" }}>
        <Routes>
          <Route path="/" element={<Ex13 />} />
          <Route path="/ex14" element={<Ex14 />} />
          <Route path="/ex15" element={<Ex15 />} />
          <Route path="/ex15a" element={<Ex15a />} />
          <Route path="/ex16" element={<Ex16 />} />
          <Route path="/ex17" element={<Ex17 />} />
          <Route path="/ex18" element={<Ex18 />} />
          <Route path="/ex19" element={<Ex19 />} />
        </Routes>
      </main>
    </div>
  );
}

// 스타일 헬퍼 객체들
const linkStyle = {
  color: "#94a3b8",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "0.95rem",
  padding: "0.4rem 0.75rem",
  borderRadius: "8px",
  transition: "all 0.2s ease"
};

const activeLinkStyle = {
  ...linkStyle,
  color: "#f8fafc",
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.12)"
};

export default App;
