import React, { useState, useEffect } from "react";
import searchLogo from "../images/main_search.png";
import { Link } from "react-router-dom";
import { authService } from "../fbase";
const Resignation = () => {
  const onLogOutClick = () => authService.signOut();

  return (
    <>
      <div id="subWrap" className="bgnone scroll">
        <div className="docuWrap">
          <div className="header_right pd21 flex_sb bgblue">
            <h3>사직서</h3>
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
          <div className="content_write">
            <div className="write_wrap">
              <div className="write_left scroll">
                <div className="Autodoc">
                  <div className="doc_content pb10">
                    <div className="doc_content_title">
                      <p>사업자 및 퇴사자</p>
                      <p className="doc_page">
                        <span>1</span>/4
                      </p>
                    </div>
                    <div className="doc_content_input">
                      <div className="input_check pb10">
                        <p>사업자</p>
                        <ul className="input_radio">
                          <li>
                            <input type="radio" name="법인" />
                            법인
                          </li>
                          <li>
                            <input type="radio" name="개인" />
                            개인사업자
                          </li>
                        </ul>
                        <div className="input_check pt05">
                          <div className="first_check">
                            <div className="first_check_wrap flex_start">
                              <span className="pr05 w20">법인명</span>
                              <input
                                className="input_style w85"
                                type="text"
                                placeholder="모듀 주식회사"
                              />
                            </div>
                            <div className="first_check_wrap flex_start pt05">
                              <span className="pr05 w25">대표이사</span>
                              <input
                                className="input_style w100"
                                type="text"
                                placeholder="김대표"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="input_check pt05">
                          <div className="first_check">
                            <div className="first_check_wrap flex_start">
                              <span className="pr05 w20 word_break_keep">
                                상호 (사업체명)
                              </span>
                              <input
                                className="input_style w80"
                                type="text"
                                placeholder="모듀"
                              />
                            </div>
                            <div className="first_check_wrap flex_start pt05">
                              <span className="pr05 w25">사업주명</span>
                              <input
                                className="input_style w100"
                                type="text"
                                placeholder="김대표"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input_check">
                        <p>퇴사자</p>
                        <div className="first_check">
                          <div className="first_check_wrap flex_start">
                            <span className="pr05 w20">성명</span>
                            <input
                              className="input_style w85"
                              type="text"
                              placeholder="장서연"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="doc_content pb10">
                    <div className="doc_content_title">
                      <p>사직의 내용</p>
                      <p className="doc_page">
                        <span>2</span>/4
                      </p>
                    </div>
                    <div className="doc_content_input">
                      <div className="input_check pb10">
                        <p>소속 및 직위</p>
                        <div className="input_check pt05">
                          <div className="first_check">
                            <div className="first_check_wrap flex_start">
                              <span className="pr05 w25">소속</span>
                              <input
                                className="input_style w100"
                                type="text"
                                placeholder="소속"
                              />
                            </div>
                            <div className="first_check_wrap flex_start pt05">
                              <span className="pr05 w25">직위</span>
                              <input
                                className="input_style w100"
                                type="text"
                                placeholder="직위"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input_check">
                        <p>업무내용</p>
                        <div className="input_check">
                          <div className="first_check">
                            <div className="first_check_wrap flex_start">
                              <input
                                className="input_style w85"
                                type="text"
                                placeholder="시스템개발"
                              />
                              <span className="pl05 w20">업무</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input_check pt10">
                        <p>소속 및 직위</p>
                        <div className="input_check pt05">
                          <div className="first_check">
                            <div className="first_check_wrap flex_start">
                              <span className="pr05 w25">입사한 날짜</span>
                              <input
                                className="input_style w90"
                                type="date"
                                placeholder="입사날짜"
                              />
                            </div>
                            <div className="first_check_wrap flex_start pt05">
                              <span className="pr05 w25">퇴사할 날짜</span>
                              <input
                                className="input_style w90"
                                type="date"
                                placeholder="퇴사날짜"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="doc_content pb10">
                    <div className="doc_content_title">
                      <p>사직하는 이유</p>
                      <p className="doc_page">
                        <span>3</span>/4
                      </p>
                    </div>
                    <div className="doc_content_input">
                      <div className="input_check">
                        <p>어떤 이유로 퇴사하시나요?</p>
                        <div className="pt025">
                          <section
                            className="select_wrapper w100"
                            data-role="selectbox"
                          />
                          <select className="selectbox">
                            <option className="toggle_btn">
                              --- 선택 ---
                              <img
                                src="./images/select_arrow.png"
                                alt=""
                                className="select_down"
                              />
                            </option>

                            <option className="option_btn">개인사유</option>

                            <option className="option_btn">이직</option>

                            <option className="option_btn">결혼 및 출산</option>

                            <option className="option_btn">육아</option>

                            <option className="option_btn">직접입력</option>

                            <div className="input_check pt05">
                              <div className="first_check">
                                <div className="first_check_wrap flex_start">
                                  <input
                                    className="input_style w100"
                                    type="text"
                                    placeholder="학업"
                                  />
                                </div>
                              </div>
                            </div>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="doc_content pb075">
                    <div className="doc_content_title">
                      <p>퇴사자 상세정보</p>
                      <p className="doc_page">
                        <span>4</span>/4
                      </p>
                    </div>
                    <div className="doc_content_input">
                      <div className="input_check">
                        <ul className="input_checklist pt025">
                          <p>퇴사자 상세정보</p>
                          <li className="check_txt input_flex">
                            <input
                              type="text"
                              placeholder="성명"
                              name="퇴사자성명"
                            />
                            <input
                              type="text"
                              placeholder="주민등록번호"
                              name="퇴사자주민등록번호"
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
                              name="퇴사자번호"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hide_menu">
                  <ul className="flex_start">
                    <li>
                      <a href="" className="see_btn">
                        미리보기
                      </a>
                    </li>
                    <li>
                      <a href="" className="write_btn">
                        작성하기
                      </a>
                    </li>
                    <li>
                      <a href="" className="save_btn">
                        저장하기
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="write_right">
                <div className="document">
                  <div className="document_wrap">
                    <div className="doc_txt pt10">
                      <h3 className="mt20 mb20">사 직 서</h3>
                      <p>
                        성명 : <span className="text_border">장서연</span>(서명
                        또는 인)
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
                        전화번호 :{" "}
                        <span className="text_border">010-5643-8512</span>
                      </p>
                    </div>
                    <div className="doc_txt">
                      <p>
                        상가 본인은 일신상의 사유로 인하여 사직처리를
                        요청드리고자 하오니, 재가하여 주시기 바랍니다.
                      </p>
                      <p>
                        상가 본인은 이직으로 인하여 사직처리를 요청드리고자
                        하오니, 재가하여 주시기 바랍니다.
                      </p>
                      <p>
                        상가 본인은 결혼 및 출산으로 인하여 사직처리를
                        요청드리고자 하오니, 재가하여 주시기 바랍니다.
                      </p>
                      <p>
                        상가 본인은 육아로 인하여 사직처리를 요청드리고자
                        하오니, 재가하여 주시기 바랍니다.
                      </p>
                      <p>
                        상가 본인은 <span className="text_border">학업</span>
                        으로 인하여 사직처리를 요청드리고자 하오니, 재가하여
                        주시기 바랍니다.
                      </p>
                    </div>
                    <div className="doc_txt pt10">
                      <h4>사직 내용</h4>
                      <p>
                        1. 소속 : <span className="text_border">개발팀</span>
                      </p>
                      <p>
                        2. 직위 : <span className="text_border">사원</span>
                      </p>
                      <p>
                        3. 담당업무 :{" "}
                        <span className="text_border">시스템개발</span>업무
                      </p>
                      <p>
                        4. 입사일 :{" "}
                        <span className="text_border">2022.10.27</span>
                      </p>
                      <p>
                        5. 퇴직예정일 :{" "}
                        <span className="text_border">2023.04.24</span>
                      </p>
                    </div>
                    <div className="doc_txt">
                      <p>
                        본 사직서는 본인의 의사에 의하여 작성 및 서명되었음을
                        밝힙니다
                      </p>
                    </div>
                    <p className="doc_date pt10">2023년 04월 03일</p>
                    <div className="doc_txt right pt10">
                      <p>
                        작성자 : <span className="text_border">장서연</span>
                        (서명 또는 인)
                      </p>
                    </div>
                    <div className="doc_txt">
                      <h3 className="mt20 mb15">
                        <span className="border">모듀 주식회사</span>
                      </h3>
                      <h3 className="mt20 mb15">
                        대표이사 <span className="border">모대표</span> 귀하
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="alert scroll">
                  <p>내용 바꿔주세용~</p>
                </div>
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
        </div>
      </div>
    </>
  );
};

export default Resignation;
