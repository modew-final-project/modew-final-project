import React from "react";

const Req4 = (props) => {
  return (
    <div
      className="doc_txt"
      style={{
        display:
          props.builtIn === "" && props.cleaning === "" && props.direct === ""
            ? "none"
            : "block",
      }}
    >
      <h4>제9조(특약)</h4>
      <p
        style={{
          display: props.builtIn === "" ? "none" : "block",
        }}
      >
        -{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {props.builtIn}
        </span>
      </p>
      <p
        style={{
          display: props.cleaning === "" ? "none" : "block",
        }}
      >
        -{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {props.cleaning}
        </span>
      </p>
      <p
        style={{
          display: props.direct === "" ? "none" : "block",
        }}
      >
        -{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {props.direct}
        </span>
      </p>
    </div>
  );
};

export default Req4;
