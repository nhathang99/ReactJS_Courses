import React from "react";
import { useState } from "react";
//response from api
const courses = [
  {
    id: 1,
    name: "HTML,CSS",
  },
  {
    id: 2,
    name: "Javacript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

function Radio() {
  const [checked, setChecked] = useState();
  const handleSubmit = () => {
    console.log(checked);
  };
  return (
    <div>
      {courses.map((kh) => (
        <div i={kh.id}>
          <input
            type="radio"
            checked={checked === kh.id}
            onChange={() => {
              setChecked(kh.id);
            }}
          />
          {kh.name}
        </div>
      ))}
      <button className="btn btn-success" onClick={handleSubmit}>
        ĐĂNG KÝ
      </button>
    </div>
  );
}

export default Radio;
