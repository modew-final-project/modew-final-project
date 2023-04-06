import React, { useState } from "react";

const C7 = () => {
  return (
    <>
      <div className="doc_content pb075">
        <div className="doc_content_title">
          <p>세입자 상세정보</p>
          <p className="doc_page">
            <span>7</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          <div className="input_check">
            <ul className="input_checklist pt025">
              <p>세입자 상세정보</p>
              <li className="check_txt input_flex">
                <input type="text" placeholder="성명" name="세입자성명" />
                <input
                  type="text"
                  placeholder="주민등록번호"
                  name="세입자주민등록번호"
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
                  name="세입자번호"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default C7;
