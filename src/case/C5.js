import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import infoIcon from "../images/info.png";

const C5 = (props) => {
  const [fullAddress, setFullAddress] = useState("");

  // 새로운 창을 열기 위한 함수
  const openSmallWindow = () => {
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    const url = "/#/Post";

    const features = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`;
    const windowRef = window.open(url, "C5", features);

    window.addEventListener("message", (event) => {
      if (event.data.type === "updateFullAddress05") {
        setFullAddress(event.data.fullAddress);
      }
    });

    windowRef.setFullAddress = (fullAddress) => {
      windowRef.postMessage({ type: "updateFullAddress", fullAddress }, "*");
    };
  };

  const [display1, setDisplay1] = useState("none");
  const [display2, setDisplay2] = useState("none");
  const [display3, setDisplay3] = useState("none");
  const [searchInput, setSearchInput] = useState(""); // 변수 선언 및 초기화

  const [visible3, setVisible3] = useState("none");

  const [adress, setAdress] = useState(props.adress);
  const [extra, setExtra] = useState(props.extra);
  const [option1, setOption1] = useState(props.option1);
  const [option1Size, setOption1Size] = useState(props.option1Size);
  const [option2, setOption2] = useState(props.option2);
  const [option2Size, setOption2Size] = useState(props.option2Size);
  const [option3, setOption3] = useState(props.option3);
  const [option3Size, setOption3Size] = useState(props.option3Size);

  const onChange = (e) => {
    if (e.target.name === "기본주소") {
      setSearchInput(e.target.value);
      setAdress(e.target.value);
      props.getC5Value("기본주소", e.target.value);
      props.isSelected("기본주소");
    } else if (e.target.name === "상세주소") {
      setExtra(e.target.value);
      props.getC5Value("상세주소", e.target.value);
    } else if (e.target.name === "토지용도텍스트") {
      setOption1(e.target.value);
      props.getC5Value("토지용도텍스트", e.target.value);
    } else if (e.target.name === "토지용도면적") {
      setOption1Size(e.target.value);
      props.getC5Value("토지용도면적", e.target.value);
    } else if (e.target.name === "구조용도") {
      setOption2(e.target.value);
      props.getC5Value("구조용도", e.target.value);
    } else if (e.target.name === "구조용도면적") {
      setOption2Size(e.target.value);
      props.getC5Value("구조용도면적", e.target.value);
    } else if (e.target.name === "임대할부분") {
      setOption3(e.target.value);
      props.getC5Value("임대할부분", e.target.value);
    } else if (e.target.name === "임대할부분면적") {
      setOption3Size(e.target.value);
      props.getC5Value("임대할부분면적", e.target.value);
    }
  };

  const onClick = (e) => {
    if (e.target.value === "토지용도") {
      if (e.target.checked === true) {
        setDisplay1("block");
      } else {
        setDisplay1("none");
        props.getC5Value("토지용도면적", "");
        props.getC5Value("토지용도텍스트", "");
      }
    } else if (e.target.value === "건물 구조·용도") {
      if (e.target.checked === true) {
        setDisplay2("block");
      } else {
        setDisplay2("none");
        props.getC5Value("구조용도", "");
        props.getC5Value("구조용도면적", "");
      }
    } else if (e.target.value === "임대할 부분") {
      if (e.target.checked === true) {
        setDisplay3("block");
      } else {
        setDisplay3("none");
        props.getC5Value("임대할부분", "");
        props.getC5Value("임대할부분면적", "");
      }
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
            부동산의 표시
            <button className="info_icon">
              <img src={infoIcon} />
            </button>
          </p>
          <p className="doc_page">
            <span>5</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          <div className="input_check">
            <p>소재지</p>
            <ul className="input_checklist pt05">
              <li className="check_txt pb05">
                <input
                  type="text"
                  placeholder="클릭하여 주소를 검색하세요."
                  name="주소"
                  onClick={() => {
                    openSmallWindow();
                  }}
                  value={fullAddress}
                />
                <input
                  type="text"
                  placeholder="나머지 주소를 입력하세요."
                  name="상세주소"
                  value={extra}
                  onChange={onChange}
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  name="토지용도"
                  value="토지용도"
                  onClick={onClick}
                />
                토지용도
              </li>
              <li className="check_txt" style={{ display: display1 }}>
                <div className="input_flex">
                  <input
                    type="text"
                    placeholder="대"
                    name="토지용도텍스트"
                    onChange={onChange}
                    value={option1}
                  />
                  <input
                    type="text"
                    placeholder="160.89"
                    name="토지용도면적"
                    onChange={onChange}
                    value={option1Size}
                  />
                  <span>
                    m<sup>2</sup>
                  </span>
                </div>
              </li>
              <li className="pt05">
                <input
                  type="checkbox"
                  name="건물 구조·용도"
                  value="건물 구조·용도"
                  onClick={onClick}
                />
                건물 구조·용도
              </li>
              <li
                className="check_txt input_flex"
                style={{ display: display2 }}
              >
                <div className="input_flex">
                  <input
                    type="text"
                    placeholder="다세대 주택"
                    name="구조용도"
                    onChange={onChange}
                    value={option2}
                  />
                  <input
                    type="text"
                    placeholder="120.34"
                    name="구조용도면적"
                    onChange={onChange}
                    value={option2Size}
                  />
                  <span>
                    m<sup>2</sup>
                  </span>
                </div>
              </li>
              <li className="pt05">
                <input
                  type="checkbox"
                  name="임대할 부분"
                  value="임대할 부분"
                  onClick={onClick}
                />
                임대할 부분
              </li>
              <li
                className="check_txt input_flex"
                style={{ display: display3 }}
              >
                <div className="input_flex">
                  <input
                    type="text"
                    placeholder="2층 203호, A동 전체 등"
                    name="임대할부분"
                    onChange={onChange}
                    value={option3}
                  />
                  <input
                    type="text"
                    placeholder="28.79"
                    name="임대할부분면적"
                    onChange={onChange}
                    value={option3Size}
                  />
                  <span>
                    m<sup>2</sup>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="content_info" style={{ display: visible3 }}>
          <h3># 관련 법률 가이드</h3>
          <br />
          <p>
            토지용도는 토지의 주된 용도에 따라 토지의 종류를 구분하여 지적공부에
            등록하는 것을 말하는 것으로 이는 '공간정보의 구축 및 관리 등에 관한
            법률'에서 규정하고 있습니다.
            <br />
            지목의 종류 및 구분에 관하여는 동법 제67조 및 시행령 제58조에서 전,
            답, 과수원, 목장용지, 임야, 대 등 총 28개로 구분하여 규정하고
            있습니다.
            <br />
            이 계약서는 부동산임대차계약에 따른 건물의 임대를 목적으로 하고
            있으므로, '대'로 작성해주시면 됩니다.
            <br />
            '대'는 주거•사무실 등 영구적 건축물과 이에 접속된 부속시설물,
            택지조성공사가 준공된 토지를 의미합니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default C5;
