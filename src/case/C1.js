import React, { useState } from "react";

const C1 = (props) => {
  const [visible1, setVisible1] = useState("none");
  const [visible2, setVisible2] = useState("none");
  
  const [landLordType, setLandLordType] = useState(props.landLordType);
  const [landLord,setLandLord] = useState(props.landLord)
  const [renterType, setRenterType] = useState(props.renterType);
  const [renter, setRenter] = useState(props.renter);


  const onClick = (e) => {
    if (e.target.name === "집주인") {
      setVisible1("block");
      setLandLordType(e.target.value);
      props.getC1Value(e.target.name,e.target.value,0);
    } else if (e.target.name === "세입자") {
      setVisible2("block");
      setRenterType(e.target.value);
      props.getC1Value(e.target.name,e.target.value,0);
    }
  };

  const onChange = (e) => {
    if (e.target.name === "집주인") {
      setLandLord(e.target.value);
      props.getC1Value(e.target.name,e.target.value,1);
    } else if (e.target.name === "세입자") {
      setRenter(e.target.value);
      props.getC1Value(e.target.name,e.target.value,1);
    }
  };

  return (
    <>
      <div className="doc_content pb075">
        <div className="doc_content_title">
          <p>집주인 및 세입자</p>
          <p className="doc_page">
            <span>1</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          {/* 라디오 버튼 선택 시 1조항과 날짜 적힘, 집주인=임대인, 세입자=임차인 */}
          <div className="input_check pb10">
            <p>집주인</p>
            <ul className="input_radio">
              <li>
                <input
                  type="radio"
                  onClick={onClick}
                  value="법인명"
                  name="집주인"
                />
                법인
              </li>
              <li>
                <input
                  type="radio"
                  onClick={onClick}
                  value="상호(사업체명)"
                  name="집주인"
                />
                개인사업자
              </li>
              <li>
                <input
                  type="radio"
                  onClick={onClick}
                  value="성명"
                  name="집주인"
                />
                개인
              </li>
            </ul>
            <div id="집주인" style={{ display: visible1 }}>
              <label id="landLordType">{landLordType}</label>
              {/* <input type="text" onChange={onChange} name="집주인" id="landLord" value={landLord}/> */}
              <input type="text" onChange={onChange} name="집주인" id="landLord" value={landLord}/>
            </div>
          </div>
          <div className="input_check">
            <p>세입자</p>
            <ul className="input_radio">
              <li>
                <input
                  type="radio"
                  onClick={onClick}
                  name="세입자"
                  value="법인명"
                />
                법인
              </li>
              <li>
                <input
                  type="radio"
                  onClick={onClick}
                  name="세입자"
                  value="상호(사업체명)"
                />
                개인사업자
              </li>
              <li>
                <input
                  type="radio"
                  onClick={onClick}
                  name="세입자"
                  value="성명"
                />
                개인
              </li>
            </ul>
            <div id="세입자" style={{ display: visible2 }}>
              <label>{renterType}</label>
              <input type="text" onChange={onChange} name="세입자" value={renter}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default C1;
