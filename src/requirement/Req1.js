import React from "react";

const Req1 = (props) => {
  const today = new Date();
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
            <h4>제9조(계약의 효력)</h4>
            <p>
              본 계약을 증명하기 위하여 계약 당사자가 이의 없음을 확인하고 각각 서명 •
              날인 후 임대인 및 임차인은 매장마다 간인하여야 하며, 각각 1통씩
              보관한다.
            </p>
            <p className="doc_date pt10">
                {today.getFullYear()}년 {("0" + (today.getMonth() + 1)).slice(-2)}월{" "}
                {("0" + today.getDate()).slice(-2)}일
              </p>
              <br/>
        <h4>임대인</h4>
        <p>
          {props.landLordType} :{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            {props.landLord}
          </span>
          (서명 또는 인)
        </p>
        <p>
          주민등록번호 : <span>{props.landLordSSN}</span>
        </p>
        <p>
          주소 : <span>{props.fullAdress} </span><span>{props.extraAdress}</span>
        </p>
        <p>
          전화번호 : <span>{props.landLordNum}</span>
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
          주민등록번호 : <span>{props.renterSSN}</span>
        </p>
        <p>
          주소 : <span>{props.fullAdress2}</span><span>{props.extraAdress2}</span>
        </p>
        <p>
          전화번호 : <span>{props.renterNum}</span>
        </p>
        

        
      </div>
    </>
  );
};

export default Req1;
