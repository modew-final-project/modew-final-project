import React, { useState } from "react";

const Req1 = (props) => {
  return (
    <>
      <div
        className="doc_txt pt10"
        style={{
          display:
            props.landLordType === "" && props.landLord === ""
              ? "none"
              : "block",
        }}
      >
        <h4>임대인</h4>
        <p>
          {props.landLordType} :{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            {props.landLord}
          </span>
           (서명 또는 인)
        </p>
        <p>
          주민등록번호 : <span>970201-2571246</span>
        </p>
        <p>
          주소 : <span>광주 동구 동계천로 74 (장동) 2층 204호</span>
        </p>
        <p>
          전화번호 : <span>010-5643-8512</span>
        </p>
      </div>
      <div
        className="doc_txt"
        style={{
          display:
            props.renterType === "" && props.renter === "" ? "none" : "block",
        }}
      >
        <h4>임차인</h4>
        <p>
          {props.renterType} :{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            {props.renter}
          </span>
           (서명 또는 인)
        </p>
        <p>
          주민등록번호 : <span>970201-2571246</span>
        </p>
        <p>
          주소 : <span>광주 동구 장동 2층 204호</span>
        </p>
        <p>
          전화번호 : <span>010-5105-9721</span>
        </p>
      </div>
    </>
  );
};

export default Req1;
