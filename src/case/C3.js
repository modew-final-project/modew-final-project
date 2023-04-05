import React, { useState } from "react";

const C3 = () => {
  return (
    <>
      <div className="doc_content pb10">
        <div className="doc_content_title">
          <p>임대차 계약의 내용</p>
          <p className="doc_page">
            <span>3</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          <div className="input_check">
            <div className="first_check">
              <div className="first_check_wrap">
                <ul>
                  <p>보증금</p>
                  <li className="pt025">
                    <span className="pr05 first_txt">금</span>
                    <input
                      className="text_right"
                      type="text"
                      placeholder="50,000,000"
                    />
                    <span>원</span>
                  </li>
                  <p className="pt10">계약금</p>
                  <li className="pt025">
                    <span className="pr05 first_txt">금</span>
                    <input
                      className="text_right"
                      type="text"
                      placeholder="10,000,000"
                    />
                    <span>원</span>
                  </li>
                  <p className="pt10">잔금</p>
                  <li className="pt025">
                    <span className="pr05 first_txt">금</span>
                    <input
                      className="text_right"
                      type="text"
                      placeholder="90,000,000"
                    />
                    <span>원</span>
                  </li>
                  <p className="pt10">잔금지급날짜</p>
                  <li className="pt025">
                    <input type="date" placeholder="90,000,000" />
                  </li>
                  <p className="pt10">계좌 정보</p>
                  <li className="pt025">
                    <span className="pr05 first_txt">은행명</span>
                    <input
                      className="text_right"
                      type="text"
                      placeholder="국민은행"
                    />
                  </li>
                  <li className="pt025">
                    <span className="pr05 first_txt">계좌번호</span>
                    <input
                      className="text_right"
                      type="text"
                      placeholder="12-3456-789"
                    />
                  </li>
                  <li className="pt025">
                    <span className="pr05 first_txt">예금주</span>
                    <input
                      className="text_right"
                      type="text"
                      placeholder="장서연"
                    />
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

export default C3;
