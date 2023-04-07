import React, { useState } from "react";


const Req2_MonthlyDue = (props) => {
  return (
    <>
      <li
        style={{
          display:
            props.monthly === "" && props.dueDate === "" ? "none" : "block",
        }}
      >
        - 월세 : 금{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {props.monthly}
        </span>{" "}
        원정은 매월{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {props.dueDate}
        </span>{" "}
        일에 지불한다.
      </li>
    </>
  );
};

export default Req2_MonthlyDue;
