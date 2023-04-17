import React from "react";

const Req5 = (props) => {
  return (
    <>
    
    <div 
      style={{
        display: props.adress === "" && props.extra === "" ? "none" : "block",
      }}
    >
      <h4>제3조(부동산의 표시)</h4>
      <p>
        임대인과 임차인은 쌍방 합의하여 아래 표시 부동산에 관하여 임대차 계약을
        체결한다.
      </p>
      소재지 : <span style={{fontSize: ".8rem", color: "#333",fontWeight: "bold", textDecoration: "underline" }}>
       {props.adress} {props.extra}
      </span>
      <ul>
        <li
          style={{
            display: props.option1 === "" ? "none" : "block",
          }}
        >
          - 토지지목 :{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            {props.option1}
          </span>
          , 토지 면적 :{" "}
          <span
            style={{
              display: props.option1Size === "" ? "none" : "inline",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {props.option1Size}m<sup>2</sup>
          </span>
        </li>
        <li
          style={{
            display: props.option2 === "" ? "none" : "block",
          }}
        >
          - 건물 구조·용도 : 위 토지 지상{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            {props.option2}
          </span>
          , 건물 면적 :{" "}
          <span
            style={{
              display: props.option2Size === "" ? "none" : "inline",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {props.option2Size}m<sup>2</sup>
          </span>
        </li>
        <li
          style={{
            display: props.option3 === "" ? "none" : "block",
          }}
        >
          - 임대할 부분 :{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            {props.option3}
          </span>
          , 임대할 면적 :{" "}
          <span
            style={{
              display: props.option3Size === "" ? "none" : "inline",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {props.option3Size}m<sup>2</sup>
          </span>
        </li>
      </ul>
      <br/>
    </div>
    </>
  );
};

export default Req5;
