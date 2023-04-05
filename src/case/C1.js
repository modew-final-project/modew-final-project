import React, { useState } from "react";

const C1 = () => {
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
          <div className="input_check pb10">
            <p>집주인</p>
            <ul className="input_radio">
              <li>
                <input type="radio" name="법인" />
                법인
              </li>
              <li>
                <input type="radio" name="개인사업자" />
                개인사업자
              </li>
              <li>
                <input type="radio" name="개인" />
                개인
              </li>
            </ul>
          </div>
          <div className="input_check">
            <p>세입자</p>
            <ul className="input_radio">
              <li>
                <input type="radio" name="법인" />
                법인
              </li>
              <li>
                <input type="radio" name="개인사업자" />
                개인사업자
              </li>
              <li>
                <input type="radio" name="개인" />
                개인
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default C1;
