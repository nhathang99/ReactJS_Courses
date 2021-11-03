import React from "react";
import { useState } from "react";
const gifts = ["CPU 19", "RAM 32GB RGB", "RGB Keyboard", "Macbook"];
function BTUS() {
  const [gift, setgifts] = useState();
  const randomGifts = () => {
    const i = Math.floor(Math.random() * gifts.length);
    setgifts(gifts[i]);
  };
  return (
    <div style={{ paddinh: 32 }}>
      <h1>{gift || "chưa có phần thưởng"}</h1>
      <button className="btn btn-success" onClick={randomGifts}>
        Lấy thưởng
      </button>
    </div>
  );
}

export default BTUS;
