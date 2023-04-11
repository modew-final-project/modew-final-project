import React from "react";

const Req2 = (props) => {
  return (
    <>
      <div className="doc_txt"
      style={{
        display:
        props.startDate === "" && props.endDate === "" ? "none" : "block",
      }}
      >
        <h4>제1조(계약 존속 기간)</h4>
        <p>
          임대인은 아래 임대차 대상 부동산(이하 '부동산')을 임대차 목적대로
          사용•수익할 수 있는 상태로 하여 <span style={{fontWeight:"bold",textDecoration : "underline",}}>{props.startDate}</span>
          일까지 임차인에게 인도하며, 임대차기간은 인도일로부터{" "}
          <span style={{fontWeight:"bold",textDecoration : "underline",}}>{props.endDate}</span>까지로 한다.
        </p>
      </div>
    </>
  );
};

export default Req2;
