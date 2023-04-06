import React, { useState } from "react";

const NameInput = ({ visible, a, b }) => {
  return (
    <div id={a} style={{ display: visible }}>
      <label>{b}</label>
      <input type="text" />
    </div>
  );
};

const C1 = ({}) => {
  const [visible1, setVisible1] = useState("none");
  const [visible2, setVisible2] = useState("none");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const onClick = (e) => {
    if (e.target.name === "집주인") {
      setVisible1("block");
      setName1(e.target.value);
    } else if (e.target.name === "세입자") {
      setVisible2("block");
      setName2(e.target.value);
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
            <NameInput visible={visible1} a={"집주인"} b={name1} />
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
            <NameInput visible={visible2} a={"세입자"} b={name2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default C1;
