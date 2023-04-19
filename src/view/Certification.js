import React, { useState, useEffect } from "react";
import searchLogo from "../images/main_search.png";
import { Link } from "react-router-dom";
import { authService } from "../fbase";
const Certification = () => {
  const onLogOutClick = () => authService.signOut();
  const [fullAddress1, setFullAddress1] = useState("");
  const [fullAddress2, setFullAddress2] = useState("");
  const [fullAddress3, setFullAddress3] = useState("");
// 새로운 창을 열기 위한 함수
const openSmallWindow = (carType) => {
  const width = 500;
  const height = 600;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  const url = "/#/Post";

  const features = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`;
  const windowRef = window.open(url, carType, features);

  window.addEventListener("message", (event) => {
    if (event.data.type === "updateFullAddressCert") {
      setFullAddress1(event.data.fullAddress);
    }else if(event.data.type === "updateFullAddressCert1"){
      setFullAddress2(event.data.fullAddress);
    }else if(event.data.type === "updateFullAddressCert2"){
      setFullAddress3(event.data.fullAddress);
    }
    });
    
    windowRef.setFullAddress = (fullAddress) => {
    windowRef.postMessage({ type: "updateFullAddress", fullAddress }, "*");
    };
    };
  return (
    <>
      <div id="subWrap" class="bgnone scroll">
        <div class="docuWrap">
          <div class="header_right pd21 flex_sb bgblue">
            <h3>내용증명(층간소음)</h3>
            <ul>
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="" onClick={onLogOutClick}>
                  LogOut
                </Link>
              </li>
              <li>
                <Link to="/UserInfo">My Page</Link>
              </li>
              <li>
                <Link to="/MyDrive">My Drive</Link>
              </li>
              <li>
                <img src="" />
                <Link to="">
                  <img src={searchLogo} alt="main_search.png" />
                </Link>
              </li>
            </ul>
          </div>
          <div class="content_write">
            <div class="write_wrap">
              <div class="write_left scroll">
                <div class="Autodoc">
                  <div class="doc_content pb075">
                    <div class="doc_content_title">
                      <p>발신인 및 수신인</p>
                      <p class="doc_page">
                        <span>1</span>/5
                      </p>
                    </div>
                    <div class="doc_content_input">
                      <div class="input_check pb10">
                        <p>보내는 사람(발신인)</p>
                        <ul class="input_radio">
                          <li>
                            <input type="radio" name="법인" />
                            법인
                          </li>
                          <li>
                            <input type="radio" name="개인" />
                            개인
                          </li>
                        </ul>
                        <div class="input_check pt05">
                          <div class="first_check">
                            <div class="first_check_wrap flex_start">
                              <span class="pr05 w15">법인명</span>
                              <input
                                class="input_style w80"
                                type="text"
                                placeholder="모듀 주식회사"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="input_check pt05">
                          <div class="first_check">
                            <div class="first_check_wrap flex_start">
                              <span class="pr05 w15">개인</span>
                              <input
                                class="input_style w80"
                                type="text"
                                placeholder="장두식"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="input_check">
                        <p>받는 사람(수신인)</p>
                        <ul class="input_radio">
                          <li>
                            <input type="radio" name="법인" />
                            법인
                          </li>
                          <li>
                            <input type="radio" name="개인" />
                            개인
                          </li>
                        </ul>
                        <div class="input_check pt05">
                          <div class="first_check">
                            <div class="first_check_wrap flex_start">
                              <span class="pr05 w15">법인명</span>
                              <input
                                class="input_style w80"
                                type="text"
                                placeholder="모듀 주식회사"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="input_check pt05">
                          <div class="first_check">
                            <div class="first_check_wrap flex_start">
                              <span class="pr05 w15">개인</span>
                              <input
                                class="input_style w80"
                                type="text"
                                placeholder="장두식"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="doc_content pb10">
                    <div class="doc_content_title">
                      <p>층간소음의 내용</p>
                      <p class="doc_page">
                        <span>2</span>/5
                      </p>
                    </div>
                    <div class="doc_content_input">
                      <div class="input_check pb10">
                        <ul class="input_checklist pt025">
                          <p>층간소음이 일어나는 곳의 주소</p>
                          <li class="check_txt">
                          <input
                            type="text"
                            placeholder="클릭하여 주소를 검색하세요."
                            name="주소"
                            onClick={() => {
                            openSmallWindow("Cert");
                            }}
                            value={fullAddress1}
                            />
                          </li>
                          <li class="check_txt pt025">
                            <input
                              type="text"
                              placeholder="나머지 주소를 입력하세요."
                              name="상세주소"
                            />
                          </li>
                        </ul>
                        <p class="pt10">소음의 종류</p>
                        <div class="input_check pt05">
                          <ul class="input_checklist">
                            <li>
                              <input
                                type="checkbox"
                                name="쿵쿵거리는 발소리 등"
                              />
                              쿵쿵거리는 발소리 등
                            </li>
                            <li class="pt05">
                              <input
                                class="pl025"
                                type="checkbox"
                                name="고성방가·괴성 등"
                              />
                              고성방가·괴성 등
                            </li>
                            <li class="pt025">
                              <input
                                type="checkbox"
                                name="TV·악기·노래소리 등"
                              />
                              TV·악기·노래소리 등
                            </li>
                            <li class="pt025">
                              <input
                                type="checkbox"
                                name="아이·애완견으로 인한 소음 등"
                              />
                              아이·애완견으로 인한 소음 등
                            </li>
                            <li class="pt025">
                              <input type="checkbox" name="보수 공사 등" />
                              보수 공사 등
                            </li>
                            <li class="pt025">
                              <input type="checkbox" name="기타" />
                              기타
                              <input
                                class="w100 input_style"
                                type="text"
                                name="기타 선택시"
                                placeholder="화장실 누수로 인한 지속적으로 물 흐르는 소리"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="doc_content pb10">
                    <div class="doc_content_title">
                      <p>수신인의 이행 사항</p>
                      <p class="doc_page">
                        <span>3</span>/5
                      </p>
                    </div>
                    <div class="doc_content_input">
                      <div class="input_check pb10">
                        <p>손해배상을 청구하시나요?</p>
                        <div class="pt025">
                          <section
                            class="select_wrapper w100"
                            data-role="selectbox"
                          />
                          <select class="selectbox">
                            <option type="button" class="toggle_btn">
                              --- 선택 ---
                              <img
                                src="./images/select_arrow.png"
                                alt=""
                                class="select_down"
                              />
                            </option>

                            <option type="button" class="option_btn">
                              네
                            </option>
                            <option type="button" class="option_btn">
                              경고로만 그침
                            </option>
                          </select>
                        </div>
                        <div class="input_check pt05">
                          <ul class="input_checklist pt05">
                            <li>
                              <p>손해가 발생하게 된 이유와 금액</p>
                              <input
                                class="w100 input_style"
                                type="text"
                                name="네 선택시"
                                placeholder="치료비 20만원"
                              />
                            </li>
                            <li class="pt05">
                              <p>청구할 손해배상액의 총 합계</p>
                              <input
                                class="w90 input_style"
                                type="text"
                                name="네 선택시"
                                placeholder="500,000"
                              />
                              <span>원</span>
                            </li>
                            <li class="pt05">
                              <p>지급기한</p>
                              <input
                                class="w100 input_style"
                                type="date"
                                name="네 선택시"
                                placeholder="2022.05.01"
                              />
                            </li>
                          </ul>
                        </div>
                        <p class="pt05">
                          내용증명에 지급받을 계좌 정보를 작성하시나요?
                        </p>
                        <div class="pt025">
                          <section
                            class="select_wrapper w100"
                            data-role="selectbox"
                          />
                          <select class="selectbox">
                            <option type="button" class="toggle_btn">
                              --- 선택 ---
                              <img
                                src="./images/select_arrow.png"
                                alt=""
                                class="select_down"
                              />
                            </option>

                            <option type="button" class="option_btn">
                              작성함
                            </option>
                            <option type="button" class="option_btn">
                              작성하지 않음
                            </option>
                          </select>
                        </div>
                        <div class="input_check pt10">
                          <p>계좌 정보</p>
                          <div class="pt025 flex_start">
                            <span class="pr05 first_txt w15">예금주</span>
                            <input
                              class="input_style text_left w80"
                              type="text"
                              placeholder="김예금"
                            />
                          </div>
                          <div class="pt025 flex_start">
                            <span class="pr05 first_txt pt025 w15">은행명</span>
                            <input
                              class="input_style text_left w80 pt025"
                              type="text"
                              placeholder="국민은행"
                            />
                          </div>
                          <div class="pt025 flex_start">
                            <span class="pr05 first_txt w15">계좌번호</span>
                            <input
                              class="input_style text_left w80"
                              type="text"
                              placeholder="111-22222-333333"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="doc_content pb075">
                    <div class="doc_content_title">
                      <p>발신인 상세정보</p>
                      <p class="doc_page">
                        <span>4</span>/5
                      </p>
                    </div>
                    <div class="doc_content_input">
                      <div class="input_check">
                        <ul class="input_checklist pt025">
                          <p>발신인 상세정보</p>
                          <li class="check_txt input_flex">
                            <input
                              type="text"
                              placeholder="성명"
                              name="발신인성명"
                            />
                            <input
                              type="text"
                              placeholder="주민등록번호"
                              name="발신인주민등록번호"
                            />
                          </li>
                          <p class="pt05">주소</p>
                          <li class="check_txt input_flex">
                          <input
                            type="text"
                            placeholder="클릭하여 주소를 검색하세요."
                            name="주소"
                            onClick={() => {
                            openSmallWindow("Cert1");
                            }}
                            value={fullAddress2}
                            />
                            <input
                              type="text"
                              placeholder="나머지 주소를 입력하세요."
                              name="상세주소"
                            />
                          </li>
                          <p class="pt05">전화번호</p>
                          <li class="check_txt input_flex">
                            <input
                              type="text"
                              placeholder="010-1234-5678"
                              name="발신인번호"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="doc_content">
                    <div class="doc_content_title">
                      <p>수신인 상세정보</p>
                      <p class="doc_page">
                        <span>5</span>/5
                      </p>
                    </div>
                    <div class="doc_content_input">
                      <div class="input_check">
                        <ul class="input_checklist pt025">
                          <p>수신인 상세정보</p>
                          <li class="check_txt input_flex">
                            <input
                              type="text"
                              placeholder="성명"
                              name="수신인성명"
                            />
                            <input
                              type="text"
                              placeholder="주민등록번호"
                              name="수신인주민등록번호"
                            />
                          </li>
                          <p class="pt05">주소</p>
                          <li class="check_txt input_flex">
                          <input
                            type="text"
                            placeholder="클릭하여 주소를 검색하세요."
                            name="주소"
                            onClick={() => {
                            openSmallWindow("Cert2");
                            }}
                            value={fullAddress3}
                            />
                            <input
                              type="text"
                              placeholder="나머지 주소를 입력하세요."
                              name="상세주소"
                            />
                          </li>
                          <p class="pt05">전화번호</p>
                          <li class="check_txt input_flex">
                            <input
                              type="text"
                              placeholder="010-1234-5678"
                              name="수신인번호"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hide_menu">
                  <ul class="flex_start">
                    <li>
                      <a href="" class="see_btn">
                        미리보기
                      </a>
                    </li>
                    <li>
                      <a href="" class="write_btn">
                        작성하기
                      </a>
                    </li>
                    <li>
                      <a href="" class="save_btn">
                        저장하기
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="write_right">
                <div class="document">
                  <div class="document_wrap">
                    <div class="doc_txt">
                      <h3 class="mt30 mb20">내용증명(층간소음)</h3>
                      <h4>제1조(계약 존속 기간)</h4>
                      <p>
                        임대인은 아래 임대차 대상 부동산(이하 '부동산')을 임대차
                        목적대로 사용•수익할 수 있는 상태로 하여{" "}
                        <span class="text_border">2023.03.31</span>
                        일까지 임차인에게 인도하며, 임대차기간은 인도일로부터{" "}
                        <span class="text_border">2024.03.31</span>까지로 한다.
                      </p>
                    </div>
                    <div class="doc_txt">
                      <h4>제2조(부동산의 표시)</h4>
                      <p>
                        임대인과 임차인은 쌍방 합의하여 아래 표시 부동산에
                        관하여 임대차 계약을 체결한다.
                      </p>
                      <ul>
                        <li>
                          1. 토지지목 : <span class="text_border">대</span>,
                          토지 면적 :{" "}
                          <span class="text_border">
                            160.89m<sup>2</sup>
                          </span>
                        </li>
                        <li>
                          2. 건물 구조·용도 : 위 토지 지상{" "}
                          <span class="text_border">다세대 주택</span>, 건물
                          면적 :{" "}
                          <span class="text_border">
                            120.34m<sup>2</sup>
                          </span>
                        </li>
                        <li>
                          3. 임대할 부분 :{" "}
                          <span class="text_border">2층 203호</span>, 임대할
                          면적 :{" "}
                          <span class="text_border">
                            28.79m<sup>2</sup>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="doc_txt">
                      <h4>제3조(계약내용)</h4>
                      <p>
                        부동산의 임대차와 관련하여 임차인은 임대차보증금 및
                        차임을 아래와 같이 지불하기로 약정한다.
                      </p>
                      <ul>
                        <li>
                          1. 보증금 : 금{" "}
                          <span class="text_border">50,000,000</span> 원
                        </li>
                        <li>
                          2. 계약금 : 금{" "}
                          <span class="text_border">10,000,000</span> 원정은
                          계약시에 지불하고 영수하기로 한다.
                        </li>
                        <li>
                          3. 잔금 : 금{" "}
                          <span class="text_border">90,000,000</span> 원정은{" "}
                          <span class="text_border">2023.04.15</span> 일에
                          지불한다.
                        </li>
                        <li>
                          4. 월세 : 금{" "}
                          <span class="text_border">7,000,000</span> 원정은 매월{" "}
                          <span class="text_border">15</span> 일에 지불한다.
                        </li>
                        <li>
                          5. 입금계좌 :{" "}
                          <span class="text_border">
                            국민은행 12-3456-789 장서연
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="doc_txt">
                      <h4>제4조(용도변경 및 전대 등)</h4>
                      <p>
                        임차인은 임대인의 동의 없이 위 부동산의 용도나 구조를
                        변경하거나 전대 • 임차권 양도 또는 담보제공을 하지
                        못하며 임대차 목적 이외의 용도로 사용할 수 없다.
                      </p>
                    </div>
                    <div class="doc_txt">
                      <h4>제5조(계약의 해지)</h4>
                      <p>
                        임차인의 차임연체액이 2기의 차임액에 달하거나 본 계약의
                        '용도변경 및 전대 등' 조항을 위반하였을 때 임대인은 즉시
                        본 계약을 해지할 수 있다.
                      </p>
                    </div>
                    <div class="doc_txt">
                      <h4>제6조(계약의 종료)</h4>
                      <p>
                        임대차계약이 종료된 경우에 임차인은 위 부동산을 원상으로
                        회복하여 임대인에게 반환한다. 이러한 경우 임대인은
                        보증금을 임차인에게 반환하고, 연체 임대료 또는
                        손해배상금이 있을 때는 이들을 제하고 그 잔액을 반환한다.
                      </p>
                    </div>
                    <div class="doc_txt">
                      <h4>제7조(계약의 해제)</h4>
                      <p>
                        임차인이 임대인에게 중도금(중도금이 없을 때는 잔금)을
                        지불하기 전까지, 임대인은 계약금의 배액을 상환하고,
                        임차인은 계약금을 포기하고 본 계약을 해제할 수 있다.
                      </p>
                    </div>
                    <div class="doc_txt">
                      <h4>제8조(채무불이행과 손해배상)</h4>
                      <p>
                        임대인 또는 임차인이 본 계약상의 내용에 대하여 불이행이
                        있을 경우 그 상대방은 불이행한 자에 대하여 서면으로
                        최고하고 계약을 해제할 수 있다. 그리고 계약 당사자는
                        계약해제에 따른 손해배상을 각각 상대방에 대하여 청구할
                        수 있다.
                      </p>
                    </div>
                    <div class="doc_txt">
                      <h4>제9조(특약)</h4>
                      <p>
                        1.{" "}
                        <span class="text_border">
                          임대인은 입주전에 에어컨,냉장고 정상설치하기로 함
                        </span>
                      </p>
                      <p>
                        2.{" "}
                        <span class="text_border">
                          임차인은 계약 만료일날 10만원 지급하기로 한다
                        </span>
                      </p>
                      <p>
                        3.{" "}
                        <span class="text_border">
                          임대인은 전세보증금 잔금지급 및 임차인의
                          전입신고일까지 첨부한 등기부등본의 상태를 그대로
                          유지하여야 하고 추가적인 대출 및 근저당권설정을 하지
                          않아야 하며, 임대인이 이를 위반시 임차인은 계약을
                          해지할 수 있다.
                        </span>
                      </p>
                    </div>
                    <p>
                      본 계약을 증명하기 위하여 계약 당사자가 이의 없음을
                      확인하고 각각 서명 • 날인 후 임대인 및 임차인은 매장마다
                      간인하여야 하며, 각각 1통씩 보관한다.
                    </p>
                    <p class="doc_date pt10">2023년 04월 03일</p>
                    <div class="doc_txt pt10">
                      <h4>임대인</h4>
                      <p>
                        성명 : <span class="text_border">장서연</span>(서명 또는
                        인)
                      </p>
                      <p>
                        주민등록번호 :{" "}
                        <span class="text_border">970201-2571246</span>
                      </p>
                      <p>
                        주소 :{" "}
                        <span class="text_border">
                          광주 동구 동계천로 74 (장동) 2층 204호
                        </span>
                      </p>
                      <p>
                        전화번호 :{" "}
                        <span class="text_border">010-5643-8512</span>
                      </p>
                    </div>
                    <div class="doc_txt">
                      <h4>임차인</h4>
                      <p>
                        성명 : <span class="text_border">장두식</span>(서명 또는
                        인)
                      </p>
                      <p>
                        주민등록번호 :{" "}
                        <span class="text_border">970201-2571246</span>
                      </p>
                      <p>
                        주소 :{" "}
                        <span class="text_border">
                          광주 동구 장동 2층 204호
                        </span>
                      </p>
                      <p>
                        전화번호 :{" "}
                        <span class="text_border">010-5105-9721</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="alert scroll">
                  <p>내용 바꿔주세용~</p>
                </div>
                <div class="footer">
                  <div class="footer_wrap">
                    <ul>
                      <li>
                        <button class="edit_btn">편집하기</button>
                      </li>
                      <li>
                        <button class="save_btn">저장하기</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
