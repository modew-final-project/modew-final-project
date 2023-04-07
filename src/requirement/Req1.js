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
          주민등록번호 : <span>111111-2222222</span>
        </p>
        <p>
          주소 : <span>에오르제아 라벤더안식처 (4구) 35</span>
        </p>
        <p>
          전화번호 : <span>010-1111-2222</span>
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
          주민등록번호 : <span>333333-4444444</span>
        </p>
        <p>
          주소 : <span>에오르제아 시로가네 (5구) 36</span>
        </p>
        <p>
          전화번호 : <span>010-3333-4444</span>
        </p>
      </div>
    </>
  );
};

export default Req1;
