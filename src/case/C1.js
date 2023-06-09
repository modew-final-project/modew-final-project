import React, { useState } from "react";
import infoIcon from "../images/info.png";

const C1 = (props) => {
  const [visible1, setVisible1] = useState("none");
  const [visible2, setVisible2] = useState("none");
  const [visible3, setVisible3] = useState("none");

  const [landLordType, setLandLordType] = useState(props.landLordType);
  const [landLord, setLandLord] = useState(props.landLord);
  const [renterType, setRenterType] = useState(props.renterType);
  const [renter, setRenter] = useState(props.renter);

  const onSetV = () => {
    if (visible3 === "none") {
      setVisible3("block");
    } else if (visible3 === "block") {
      setVisible3("none");
    }
  };

  const onClick = (e) => {
    if (e.target.name === "집주인") {
      setVisible1("block");
      setLandLordType(e.target.value);
      props.getC1Value(e.target.name, e.target.value, 0);
    } else if (e.target.name === "세입자") {
      setVisible2("block");
      setRenterType(e.target.value);
      props.getC1Value(e.target.name, e.target.value, 0);
    }
  };

  const onChange = (e) => {
    if (e.target.name === "집주인") {
      setLandLord(e.target.value);
      props.getC1Value(e.target.name, e.target.value, 1);
    } else if (e.target.name === "세입자") {
      setRenter(e.target.value);
      props.getC1Value(e.target.name, e.target.value, 1);
    }
  };

  return (
    <>
      <div className="doc_content pb075">
        <div className="doc_content_title">
          <p className="flex_start" onClick={onSetV}>
            집주인 및 세입자
            <button className="info_icon">
              <img src={infoIcon} />
            </button>
          </p>
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
            <div id="집주인" className="pt05" style={{ display: visible1 }}>
              <span id="landLordType" className="pr05 w20">
                {landLordType}
              </span>
              <input
                className="input_style w80"
                type="text"
                onChange={onChange}
                name="집주인"
                id="landLord"
                value={landLord}
              />
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
            <div id="세입자" className="pt05" style={{ display: visible2 }}>
              <span className="pr05 w20">{renterType}</span>
              <input
                className="input_style w80"
                type="text"
                onChange={onChange}
                name="세입자"
                value={renter}
              />
            </div>
          </div>
        </div>
        <div className="content_info" style={{ display: visible3 }}>
          <h3># 작성 가이드</h3>
          <br/>
          <p>
            - 아래 가이드에 따라 선택하세요.
            <br />
            (1)법인 : 등기하여 법인을 설립한 경우
            <br />
            (2)개인사업자 : 등기하지 않고, 사업자등록만 하여 사업하는 경우
            <br />
            (3)개인 : 위 두가지 모두에 해당하지 않은 경우
          </p>
        </div>
      </div>
    </>
  );
};

export default C1;
