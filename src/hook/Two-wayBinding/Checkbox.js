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

function Checkbox() {
  const [checked, setchecked] = useState([]);
  console.log(checked);
  const handleCheck = (id) => {
    setchecked((prev) => {
      const isChecked = checked.includes(id);
      console.log(isChecked);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  return (
    <div>
      {courses.map((kh) => (
        <div key={kh.id}>
          <input
            type="checkbox"
            checked={checked.includes(kh.id)}
            onChange={() => handleCheck(kh.id)}
          />
          {kh.name}
        </div>
      ))}
      <button className="btn btn-success">Register</button>
    </div>
  );
}

export default Checkbox;
