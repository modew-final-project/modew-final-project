import React, { useState } from "react";

const C5 = () => {

  const [display1, setDisplay1] = useState("none");
  const [display2, setDisplay2] = useState("none");
  const [display3, setDisplay3] = useState("none");

  const onClick = (e) => {
    if (e.target.value === "토지용도") {
      if (e.target.checked === true) {
        setDisplay1("block");
      } else {
        setDisplay1("none");
      }
    } else if (e.target.value === "건물 구조·용도") {
      if (e.target.checked === true) {
        setDisplay2("block");
      } else {
        setDisplay2("none");
      }
    } else if (e.target.value === "임대할 부분") {
      if (e.target.checked === true) {
        setDisplay3("block");
      } else {
        setDisplay3("none");
      }
    }
  };

  return (
    <>
      <div className="doc_content pb075">
        <div className="doc_content_title">
          <p>부동산의 표시</p>
          <p className="doc_page">
            <span>5</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          <div className="input_check">
            <p>소재지</p>
            <ul className="input_checklist pt05">
            <li className="check_txt input_flex">
                <input
                  type="text"
                  placeholder="클릭하여 주소를 검색하세요."
                  name="주소"
                />
                <input
                  type="text"
                  placeholder="나머지 주소를 입력하세요."
                  name="상세주소"
                />
              </li>
              <li>
                <input type="checkbox" name="토지용도" value="토지용도" onClick={onClick}/>
                토지용도
              </li>
              <li className="check_txt input_flex" style={{ display: display1 }}>
                <input type="text" placeholder="대" name="토지용도텍스트" />
                <input type="text" placeholder="160.89" name="토지용도면적" />
                <span>
                  m<sup>2</sup>
                </span>
              </li>
              <li className="pt05">
                <input type="checkbox" name="건물 구조·용도" value="건물 구조·용도" onClick={onClick}/>
                건물 구조·용도
              </li>
              <li className="check_txt input_flex" style={{ display: display2 }}>
                <input type="text" placeholder="다세대 주택" name="구조용도" />
                <input type="text" placeholder="120.34" name="구조용도면적" />
                <span>
                  m<sup>2</sup>
                </span>
              </li>
              <li className="pt05">
                <input type="checkbox" name="임대할 부분" value="임대할 부분" onClick={onClick}/>
                임대할 부분
              </li>
              <li className="check_txt input_flex" style={{ display: display3 }}>
                <input
                  type="text"
                  placeholder="2층 203호, A동 전체 등"
                  name="임대할부분"
                />
                <input type="text" placeholder="28.79" name="임대할부분면적" />
                <span>
                  m<sup>2</sup>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default C5;
