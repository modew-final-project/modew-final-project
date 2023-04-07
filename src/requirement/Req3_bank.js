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
        - 입금계좌 :{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {props.bank}
        </span>{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {props.accountNum}
        </span>{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {props.accountHolder}
        </span>
      </li>
    </div>
  );
};

export default Req3_bank;
