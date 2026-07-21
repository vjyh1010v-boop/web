import { useState } from "react";

function Ex15() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <h1>15. 마우스 좌표</h1>
      {JSON.stringify(position)}
      <div
        onPointerMove={(e) => {
          console.log(e.clientX, e.clientY);
          console.log(position.x, position.y);
          setPosition({ x: e.clientX, y: e.clientY });
        }}
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          transform: `translate(${position.x}px, ${position.y}px)`,
          backgroundColor: "red",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          left: "-10px",
          top: "-10px",
        }}
      ></div>
    </>
  );
}

export default Ex15;
