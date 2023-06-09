import React from "react";
import searchLogo from "../images/main_search.png";
import { Link } from "react-router-dom";
import { authService } from "../fbase";

// 로그인 했을 시 부여지는 네비게이션 바

const Example = () => {
  return (
    <>
    <div class="content_write">
                <div class="write_wrap">
      <div className="write_right">
        <div className="document">
          <div className="document_wrap">
            <div className="doc_txt">
              <h3 className="mt30 mb20">부동산 임대차계약서(직거래)</h3>
              <h4>제1조(계약 존속 기간)</h4>
              <p>
                임대인은 아래 임대차 대상 부동산(이하 '부동산')을 임대차
                목적대로 사용•수익할 수 있는 상태로 하여{" "}
                <span className="text_border">2023.03.31</span>
                일까지 임차인에게 인도하며, 임대차기간은 인도일로부터{" "}
                <span className="text_border">2024.03.31</span>까지로 한다.
              </p>
            </div>
            <div className="doc_txt">
              <h4>제2조(부동산의 표시)</h4>
              <p>
                임대인과 임차인은 쌍방 합의하여 아래 표시 부동산에 관하여 임대차
                계약을 체결한다.
              </p>
              <ul>
                <li>
                  1. 토지지목 : <span className="text_border">대</span>, 토지
                  면적 :{" "}
                  <span className="text_border">
                    160.89m<sup>2</sup>
                  </span>
                </li>
                <li>
                  2. 건물 구조·용도 : 위 토지 지상{" "}
                  <span className="text_border">다세대 주택</span>, 건물 면적 :{" "}
                  <span className="text_border">
                    120.34m<sup>2</sup>
                  </span>
                </li>
                <li>
                  3. 임대할 부분 :{" "}
                  <span className="text_border">2층 203호</span>, 임대할 면적 :{" "}
                  <span className="text_border">
                    28.79m<sup>2</sup>
                  </span>
                </li>
              </ul>
            </div>
            <div className="doc_txt">
              <h4>제3조(계약내용)</h4>
              <p>
                부동산의 임대차와 관련하여 임차인은 임대차보증금 및 차임을
                아래와 같이 지불하기로 약정한다.
              </p>
              <ul>
                <li>
                  1. 보증금 : 금 <span className="text_border">50,000,000</span>{" "}
                  원
                </li>
                <li>
                  2. 계약금 : 금 <span className="text_border">10,000,000</span>{" "}
                  원정은 계약시에 지불하고 영수하기로 한다.
                </li>
                <li>
                  3. 잔금 : 금 <span className="text_border">90,000,000</span>{" "}
                  원정은 <span className="text_border">2023.04.15</span> 일에
                  지불한다.
                </li>
                <li>
                  4. 월세 : 금 <span className="text_border">7,000,000</span>{" "}
                  원정은 매월 <span className="text_border">15</span> 일에
                  지불한다.
                </li>
                <li>
                  5. 입금계좌 :{" "}
                  <span className="text_border">
                    국민은행 12-3456-789 장서연
                  </span>
                </li>
              </ul>
            </div>
            <div className="doc_txt">
              <h4>제4조(용도변경 및 전대 등)</h4>
              <p>
                임차인은 임대인의 동의 없이 위 부동산의 용도나 구조를 변경하거나
                전대 • 임차권 양도 또는 담보제공을 하지 못하며 임대차 목적
                이외의 용도로 사용할 수 없다.
              </p>
            </div>
            <div className="doc_txt">
              <h4>제5조(계약의 해지)</h4>
              <p>
                임차인의 차임연체액이 2기의 차임액에 달하거나 본 계약의
                '용도변경 및 전대 등' 조항을 위반하였을 때 임대인은 즉시 본
                계약을 해지할 수 있다.
              </p>
            </div>
            <div className="doc_txt">
              <h4>제6조(계약의 종료)</h4>
              <p>
                임대차계약이 종료된 경우에 임차인은 위 부동산을 원상으로
                회복하여 임대인에게 반환한다. 이러한 경우 임대인은 보증금을
                임차인에게 반환하고, 연체 임대료 또는 손해배상금이 있을 때는
                이들을 제하고 그 잔액을 반환한다.
              </p>
            </div>
            <div className="doc_txt">
              <h4>제7조(계약의 해제)</h4>
              <p>
                임차인이 임대인에게 중도금(중도금이 없을 때는 잔금)을 지불하기
                전까지, 임대인은 계약금의 배액을 상환하고, 임차인은 계약금을
                포기하고 본 계약을 해제할 수 있다.
              </p>
            </div>
            <div className="doc_txt">
              <h4>제8조(채무불이행과 손해배상)</h4>
              <p>
                임대인 또는 임차인이 본 계약상의 내용에 대하여 불이행이 있을
                경우 그 상대방은 불이행한 자에 대하여 서면으로 최고하고 계약을
                해제할 수 있다. 그리고 계약 당사자는 계약해제에 따른 손해배상을
                각각 상대방에 대하여 청구할 수 있다.
              </p>
            </div>
            <div className="doc_txt">
              <h4>제9조(특약)</h4>
              <p>
                1.{" "}
                <span className="text_border">
                  임대인은 입주전에 에어컨,냉장고 정상설치하기로 함
                </span>
              </p>
              <p>
                2.{" "}
                <span className="text_border">
                  임차인은 계약 만료일날 10만원 지급하기로 한다
                </span>
              </p>
              <p>
                3.{" "}
                <span className="text_border">
                  임대인은 전세보증금 잔금지급 및 임차인의 전입신고일까지 첨부한
                  등기부등본의 상태를 그대로 유지하여야 하고 추가적인 대출 및
                  근저당권설정을 하지 않아야 하며, 임대인이 이를 위반시 임차인은
                  계약을 해지할 수 있다.
                </span>
              </p>
            </div>
            <p>
              본 계약을 증명하기 위하여 계약 당사자가 이의 없음을 확인하고 각각
              서명 • 날인 후 임대인 및 임차인은 매장마다 간인하여야 하며, 각각
              1통씩 보관한다.
            </p>
            <p className="doc_date pt10">2023년 04월 03일</p>
            <div className="doc_txt pt10">
              <h4>임대인</h4>
              <p>
                성명 : <span className="text_border">장서연</span>(서명 또는 인)
              </p>
              <p>
                주민등록번호 :{" "}
                <span className="text_border">970201-2571246</span>
              </p>
              <p>
                주소 :{" "}
                <span className="text_border">
                  광주 동구 동계천로 74 (장동) 2층 204호
                </span>
              </p>
              <p>
                전화번호 : <span className="text_border">010-5643-8512</span>
              </p>
            </div>
            <div className="doc_txt">
              <h4>임차인</h4>
              <p>
                성명 : <span className="text_border">장두식</span>(서명 또는 인)
              </p>
              <p>
                주민등록번호 :{" "}
                <span className="text_border">970201-2571246</span>
              </p>
              <p>
                주소 :{" "}
                <span className="text_border">광주 동구 장동 2층 204호</span>
              </p>
              <p>
                전화번호 : <span className="text_border">010-5105-9721</span>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="alert scroll">
          <p>내용 바꿔주세용~</p>
        </div> */}
        <div className="footer">
          <div className="footer_wrap">
            <ul>
              <li>
                <button className="edit_btn">편집하기</button>
              </li>
              <li>
                <button className="save_btn">저장하기</button>
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

export default Example;
