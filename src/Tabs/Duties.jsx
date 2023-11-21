import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
export default function Duties({ duties }) {
  return (
    <div>
      {duties.map((duty, index) => {
        const id = uuidv4();
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
}
