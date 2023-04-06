import React, { useState } from "react";

const C6 = () => {
  return (
    <>
      <div className="doc_content pb075">
        <div className="doc_content_title">
          <p>집주인 상세정보</p>
          <p className="doc_page">
            <span>6</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          <div className="input_check">
            <ul className="input_checklist pt025">
              <p>집주인 상세정보</p>
              <li className="check_txt input_flex">
                <input type="text" placeholder="성명" name="집주인성명" />
                <input
                  type="text"
                  placeholder="주민등록번호"
                  name="집주인주민등록번호"
                />
              </li>
              <p className="pt05">주소</p>
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
              <p className="pt05">전화번호</p>
              <li className="check_txt input_flex">
                <input
                  type="text"
                  placeholder="010-1234-5678"
                  name="집주인번호"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default C6;
