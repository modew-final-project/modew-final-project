import React, { useState } from "react";

const Req2 = (props) => {
  return (
    <div
      style={{
        display:
        (props.monthly === "" && props.dueDate === "")&&
          props.deposit === "" &&
          props.downPayment === "" &&
          (props.balance === "" && props.balanceDate === "")
            ? "none"
            : "block",
      }}
    >
      <h4>제2조(계약내용)</h4>
      <p>
        부동산의 임대차와 관련하여 임차인은 임대차보증금 및 차임을 아래와 같이
        지불하기로 약정한다.
      </p>
    </div>
  );
};

export default Req2;
