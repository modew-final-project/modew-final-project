import React, { useState } from "react";

const C2 = () => {
  return (
    <>
      <div className="doc_content pb10">
        <div className="doc_content_title">
          <p>임대차 계약의 내용</p>
          <p className="doc_page">
            <span>2</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          <div className="input_check pb10">
            <p>임대차 계약의 종류</p>
            <ul className="input_radio">
              <li>
                <input type="radio" name="법인" />
                월세 및 반전세
              </li>
              <li>
                <input type="radio" name="개인사업자" />
                전세
              </li>
            </ul>
          </div>
          <div className="input_check">
            <p>임대차 계약기간</p>
            <ul className="input_text">
              <li className="pb05">
                <input className="w85" type="date" name="시작날짜" />
                부터
              </li>
              <li>
                <input className="w85" type="date" name="끝날짜" />
                까지
              </li>
            </ul>
            <div className="first_check">
              <div className="first_check_wrap pt10">
                <ul>
                  <p>월세금액</p>
                  <li className="pt025">
                    <span className="pr05">금</span>
                    <input
                      className="text_right"
                      type="text"
                      placeholder="700,000"
                    />
                    <span>원</span>
                  </li>
                  <p className="pt075">지불일</p>
                  <li className="pt025">
                    <span className="pr05">매월</span>
                    <input
                      className="text_right"
                      type="text"
                      placeholder="25"
                    />
                    <span>일</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default C2;
