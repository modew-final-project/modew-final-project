import React, { useState } from "react";

const Req3_bank = (props) => {
  return (
    <div
      style={{
        display:
          props.bank === "" &&
          props.accountNum === "" &&
          props.accountHolder === ""
            ? "none"
            : "block",
      }}
    >
      <li>
        - 입금계좌 : <span>{props.bank}</span> <span>{props.accountNum}</span>{" "}
        <span>{props.accountHolder}</span>
      </li>
    </div>
  );
};

export default Req3_bank;
