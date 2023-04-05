import React, { useState } from "react";

const C4 = () => {
  return (
    <>
      <div className="doc_content pb075">
        <div className="doc_content_title">
          <p>특약사항</p>
          <p className="doc_page">
            <span>4</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          <div className="input_check">
            <p>집주인</p>
            <ul className="input_checklist pt05">
              <li>
                <input type="checkbox" name="빌트인제품" />
                빌트인 제품
              </li>
              <li className="check_txt pb05">
                <input
                  type="text"
                  placeholder="임대인은 입주전에 에어컨,냉장고 정상설치하기로 함"
                  name="빌트인제품체크"
                />
              </li>
              <li>
                <input type="checkbox" name="청소비" />
                청소비
              </li>
              <li className="check_txt pb05">
                <input
                  type="text"
                  placeholder="임차인은 계약 만료일날 10만원 지급하기로 한다"
                  name="청소비체크"
                />
              </li>
              <li>
                <input type="checkbox" name="직접입력" />
                직접입력
              </li>
              <li className="check_txt pb05">
                <input
                  type="text"
                  placeholder="임대인은 전세보증금 잔금지급 및 임차인의 전입신고일까지 첨부한 등기부등본의 상태를 그대로 유지하여야 하고 추가적인 대출 및 근저당권설정을 하지 않아야 하며, 임대인이 이를 위반시 임차인은 계약을 해지할 수 있다."
                  name="직접입력체크"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default C4;
