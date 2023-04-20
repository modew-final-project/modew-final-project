import React, { useState } from "react";
import infoIcon from "../images/info.png";

const C4 = (props) => {
  const [display1, setDisplay1] = useState("none");
  const [display2, setDisplay2] = useState("none");
  const [display3, setDisplay3] = useState("none");
  const [visible3, setVisible3] = useState("none");
  const [builtIn, setBuiltIn] = useState(props.builtIn);
  const [cleaning, setCleaning] = useState(props.cleaning);
  const [direct, setDirect] = useState(props.direct);

  const onClick = (e) => {
    if (e.target.name === "빌트인제품") {
      if (e.target.checked === true) {
        setDisplay1("block");
        
      } else {
        props.getC4Value("빌트인제품", "");
        setDisplay1("none");
      }
    } else if (e.target.name === "청소비") {
      if (e.target.checked === true) {
        setDisplay2("block");
        
      } else {
        props.getC4Value("청소비", "");
        setDisplay2("none");
      }
    } else if (e.target.name === "직접입력") {
      if (e.target.checked === true) {
        setDisplay3("block");
        
      } else {
        props.getC4Value("직접입력", "");
        setDisplay3("none");
      }
    }
  };

  const onChange = (e) => {
    if (e.target.name === "빌트인제품") {
      setBuiltIn(e.target.value);
      props.getC4Value("빌트인제품", e.target.value);
    } else if (e.target.name === "청소비") {
      setCleaning(e.target.value);
      props.getC4Value("청소비", e.target.value);
    } else if (e.target.name === "직접입력") {
      setDirect(e.target.value);
      props.getC4Value("직접입력", e.target.value);
    }
  };

  const onSetV = () => {
    if (visible3 === "none") {
      setVisible3("block");
    } else if (visible3 === "block") {
      setVisible3("none");
    }
  };

  return (
    <>
      <div className="doc_content pb075">
        <div className="doc_content_title">
          <p className="flex_start" onClick={onSetV}>
            특약사항
            <button className="info_icon">
              <img src={infoIcon} />
            </button>
          </p>
          <p className="doc_page">
            <span>4</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          <div className="input_check">
            <p>집주인</p>
            <ul className="input_checklist pt05">
              <li>
                <input
                  type="checkbox"
                  onClick={onClick}
                  name="빌트인제품"
                  value="빌트인제품"
                />
                빌트인 제품
              </li>
              <li className="check_txt pb05" style={{ display: display1 }}>
                <input
                  type="text"
                  placeholder="임대인은 입주 전에 에어컨, 냉장고 정상설치 하기로 한다"
                  name="빌트인제품"
                  value={builtIn}
                  onChange={onChange}
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={onClick}
                  name="청소비"
                  value="청소비"
                />
                청소비
              </li>
              <li className="check_txt pb05" style={{ display: display2 }}>
                <input
                  type="text"
                  placeholder="임차인은 계약 만료일날 10만원 지급하기로 한다"
                  name="청소비"
                  value={cleaning}
                  onChange={onChange}
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  onClick={onClick}
                  name="직접입력"
                  value="직접입력"
                />
                직접입력
              </li>
              <li className="check_txt pb05" style={{ display: display3 }}>
                <input
                  type="text"
                  placeholder="임대인은 전세보증금 잔금지급 및 임차인의 전입신고일까지 첨부한 등기부등본의 상태를 그대로 유지하여야 하고 추가적인 대출 및 근저당권설정을 하지 않아야 하며, 임대인이 이를 위반시 임차인은 계약을 해지할 수 있다."
                  name="직접입력"
                  value={direct}
                  onChange={onChange}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="content_info" style={{ display: visible3 }}>
          <h3># 작성 가이드</h3>
          <br />
          <p>
            직접 입력 특약사항 작성이 어려우실 경우,
            <br />
            아래의 예문을 참고하여 작성해주세요.
            <hr />
            # 예문 보기
            <br />
            - 임대인은 전세보증금 잔금지급 및 임차인의 전입신고일까지 첨부한
            등기부등본의 상태를 그대로 유지하여야 하고 추가적인 대출 및
            근저당권설정을 하지 않아야 하며, 임대인이 이를 위반시 임차인은
            계약을 해지할 수 있으며, 이 경우 임대인은 계약금의 배액을 임차인에게
            지급한다.
            <br />
            - 월 임대료 연체시 연12%에 의한 지연손해금을 부과한다.
            <br />
            - 계약기간 만기전 퇴실 시 임차인이 새로운 임차인을 구하거나 부동산
            중개보수를 부담한다.
            <br />- 월세는 선불로 하며, 부과세는 별도이다.
          </p>
        </div>
      </div>
    </>
  );
};

export default C4;
