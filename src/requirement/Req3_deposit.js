import React from "react";

const Req3_deposit = (props) => {
  return (
    <>
      <li
        style={{
          display: props.deposit === "" ? "none" : "block",
        }}
      >
        - 보증금 : 금{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {props.deposit}
        </span>{" "}
        원
      </li>
      <li
        style={{
          display: props.downPayment === "" ? "none" : "block",
        }}
      >
        - 계약금 : 금{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {props.downPayment}
        </span>{" "}
        원정은 계약시에 지불하고 영수하기로 한다.
      </li>
      <li
        style={{
          display:
            props.balance === "" && props.balanceDate === "" ? "none" : "block",
        }}
      >
        - 잔금 : 금{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {props.balance}
        </span>{" "}
        원정은{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {props.balanceDate}
        </span>{" "}
        일에 지불한다.
      </li>
    </>
  );
};

export default Req3_deposit;
