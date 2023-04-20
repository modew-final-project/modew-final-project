import React, { useState, useEffect } from "react";
import searchLogo from "../images/main_search.png";
import { Link } from "react-router-dom";
import { authService } from "../fbase";
const CarAccident = (props) => {
  const onLogOutClick = () => authService.signOut();
  const [fullAddress1, setFullAddress1] = useState("");
  const [fullAddress2, setFullAddress2] = useState("");
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
      if (event.data.type === "updateFullAddressCar") {
        setFullAddress1(event.data.fullAddress);
      } else if (event.data.type === "updateFullAddressCar1") {
        setFullAddress2(event.data.fullAddress);
      }
    });

    windowRef.setFullAddress = (fullAddress) => {
      windowRef.postMessage({ type: "updateFullAddress", fullAddress }, "*");
    };
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]); // searchResult 변수를 빈 배열로 초기화

  const handleSearch = async () => {
    setSearchResult([]); // 새로운값 검색시 초기화
    try {
      const response = await fetch(
        `http://localhost:3002/api/search/${searchTerm}`
      );
      if (response.ok) {
        const data = await response.json();
        setSearchResult(data.channel.item);
        console.log(data.channel);
      } else {
        console.error("응답이 성공적으로 오지 않았습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div id="subWrap" className="bgnone scroll">
        <div className="docuWrap">
          <div className="header_right pd21 flex_sb bgblue">
            <h3>교통사고 합의서</h3>
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
                  <div className="doc_content pb075">
                    <div className="doc_content_title">
                      <p>당사자</p>
                      <p className="doc_page">
                        <span>1</span>/5
                      </p>
                    </div>
                    <div className="doc_content_input">
                      <div className="input_check pb10">
                        <p>사고를 낸 사람(가해자)</p>
                        <div className="input_check pt05">
                          <div className="first_check">
                            <div className="first_check_wrap">
                              <span className="pr05">성명</span>
                              <input
                                className="input_style w100"
                                type="text"
                                placeholder="김사고"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="pt05">차량의 종류</p>
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

                            <option className="option_btn">자동차</option>

                            <option className="option_btn">자전거</option>

                            <option className="option_btn">
                              기타 도로교통법상 인정되는 차량
                            </option>
                          </select>
                        </div>
                        <div className="input_check pt05">
                          <div className="first_check">
                            <div className="first_check_wrap">
                              <span className="pr05">차량번호</span>
                              <input
                                className="input_style"
                                type="text"
                                placeholder="00가 1234"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="pt05">사고를 당한 사람(피해자)</p>
                        <div className="input_check pt05">
                          <div className="first_check">
                            <div className="first_check_wrap">
                              <span className="pr05">성명</span>
                              <input
                                className="input_style w100"
                                type="text"
                                placeholder="장피해"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="pt05">사고 당시 차량을 운행하였나요?</p>
                        <div className="pt025">
                          <section
                            className="select_wrapper w100"
                            data-role="selectbox"
                          />
                          <select className="selectbox">
                            <option type="button" className="toggle_btn">
                              --- 선택 ---
                              <img
                                src="./images/select_arrow.png"
                                alt=""
                                className="select_down"
                              />
                            </option>

                            <option type="button" className="option_btn">
                              운행함
                            </option>

                            <option type="button" className="option_btn">
                              운행하지 않음
                            </option>
                          </select>
                        </div>
                        <p className="pt05">운행한 차량의 종류</p>
                        <div className="pt025">
                          <section
                            className="select_wrapper w100"
                            data-role="selectbox"
                          />
                          <select className="selectbox">
                            <option type="button" className="toggle_btn">
                              --- 선택 ---
                              <img
                                src="./images/select_arrow.png"
                                alt=""
                                className="select_down"
                              />
                            </option>

                            <option type="button" className="option_btn">
                              자동차
                            </option>

                            <option type="button" className="option_btn">
                              자전거
                            </option>

                            <option type="button" className="option_btn">
                              기타 도로교통법상 인정되는 차량
                            </option>
                          </select>
                        </div>
                        <div className="input_check pt05">
                          <div className="first_check">
                            <div className="first_check_wrap">
                              <span className="pr05">차량번호</span>
                              <input
                                className="input_style"
                                type="text"
                                placeholder="00가 1234"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="doc_content pb10">
                    <div className="doc_content_title">
                      <p>사고날짜와 시간</p>
                      <p className="doc_page">
                        <span>2</span>/5
                      </p>
                    </div>
                    <div className="doc_content_input">
                      <div className="input_check pb10">
                        <ul className="input_checklist pt025">
                          <p>사고날짜와 시간</p>
                          <li className="check_txt">
                            <input
                              className="input_style w100"
                              type="date"
                              name="사고날짜"
                            />
                          </li>
                          <li className="check_txt pt025">
                            <input
                              type="text"
                              placeholder="오후 1시 30분경"
                              name="사고시간"
                            />
                          </li>
                        </ul>
                        {/* <p className="pt10">소음의 종류</p>
                        <div className="input_check pt05">
                          <ul className="input_checklist">
                            <li>
                              <input
                                type="checkbox"
                                name="쿵쿵거리는 발소리 등"
                              />
                              쿵쿵거리는 발소리 등
                            </li>
                            <li className="pt05">
                              <input
                                className="pl025"
                                type="checkbox"
                                name="고성방가·괴성 등"
                              />
                              고성방가·괴성 등
                            </li>
                            <li className="pt025">
                              <input
                                type="checkbox"
                                name="TV·악기·노래소리 등"
                              />
                              TV·악기·노래소리 등
                            </li>
                            <li className="pt025">
                              <input
                                type="checkbox"
                                name="아이·애완견으로 인한 소음 등"
                              />
                              아이·애완견으로 인한 소음 등
                            </li>
                            <li className="pt025">
                              <input type="checkbox" name="보수 공사 등" />
                              보수 공사 등
                            </li>
                            <li className="pt025">
                              <input type="checkbox" name="기타" />
                              기타
                              <input
                                className="w100 input_style"
                                type="text"
                                name="기타 선택시"
                                placeholder="화장실 누수로 인한 지속적으로 물 흐르는 소리"
                              />
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="doc_content pb10">
                    <div className="doc_content_title">
                      <p>수신인의 이행 사항</p>
                      <p className="doc_page">
                        <span>3</span>/5
                      </p>
                    </div>
                    <div className="doc_content_input">
                      <div className="input_check pb10">
                        <p>손해배상을 청구하시나요?</p>
                        <div className="pt025">
                          <section
                            className="select_wrapper w100"
                            data-role="selectbox"
                          />
                          <select className="selectbox">
                            <option type="button" className="toggle_btn">
                              --- 선택 ---
                              <img
                                src="./images/select_arrow.png"
                                alt=""
                                className="select_down"
                              />
                            </option>

                            <option type="button" className="option_btn">
                              네
                            </option>

                            <option type="button" className="option_btn">
                              경고로만 그침
                            </option>
                          </select>
                        </div>
                        <div className="input_check pt05">
                          <ul className="input_checklist pt05">
                            <li>
                              <p>손해가 발생하게 된 이유와 금액</p>
                              <input
                                className="w100 input_style"
                                type="text"
                                name="네 선택시"
                                placeholder="치료비 20만원"
                              />
                            </li>
                            <li className="pt05">
                              <p>청구할 손해배상액의 총 합계</p>
                              <input
                                className="w90 input_style"
                                type="text"
                                name="네 선택시"
                                placeholder="500,000"
                              />
                              <span>원</span>
                            </li>
                            <li className="pt05">
                              <p>지급기한</p>
                              <input
                                className="w100 input_style"
                                type="date"
                                name="네 선택시"
                                placeholder="2022.05.01"
                              />
                            </li>
                          </ul>
                        </div>
                        <p className="pt05">
                          내용증명에 지급받을 계좌 정보를 작성하시나요?
                        </p>
                        <div className="pt025">
                          <section
                            className="select_wrapper w100"
                            data-role="selectbox"
                          />
                          <select className="selectbox">
                            <option type="button" className="toggle_btn">
                              --- 선택 ---
                              <img
                                src="./images/select_arrow.png"
                                alt=""
                                className="select_down"
                              />
                            </option>

                            <option type="button" className="option_btn">
                              작성함
                            </option>

                            <option type="button" className="option_btn">
                              작성하지 않음
                            </option>
                          </select>
                        </div>
                        <div className="input_check pt10">
                          <p>계좌 정보</p>
                          <div className="pt025">
                            <span className="pr05 first_txt">예금주</span>
                            <input
                              className="input_style text_left w80"
                              type="text"
                              placeholder="김예금"
                            />
                          </div>
                          <div className="pt025">
                            <span className="pr05 first_txt pt025">은행명</span>
                            <input
                              className="input_style text_left w80 pt025"
                              type="text"
                              placeholder="국민은행"
                            />
                          </div>
                          <div className="pt025">
                            <span className="pr05 first_txt">계좌번호</span>
                            <input
                              className="input_style text_left w75"
                              type="text"
                              placeholder="111-22222-333333"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="doc_content pb075">
                    <div className="doc_content_title">
                      <p>발신인 상세정보</p>
                      <p className="doc_page">
                        <span>4</span>/5
                      </p>
                    </div>
                    <div className="doc_content_input">
                      <div className="input_check">
                        <ul className="input_checklist pt025">
                          <p>발신인 상세정보</p>
                          <li className="check_txt input_flex">
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
                          <p className="pt05">주소</p>
                          <li className="check_txt input_flex">
                            <input
                              type="text"
                              placeholder="클릭하여 주소를 검색하세요."
                              name="주소"
                              onClick={() => {
                                openSmallWindow("Car");
                              }}
                              value={fullAddress1}
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
                              name="발신인번호"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="doc_content">
                    <div className="doc_content_title">
                      <p>수신인 상세정보</p>
                      <p className="doc_page">
                        <span>5</span>/5
                      </p>
                    </div>
                    <div className="doc_content_input">
                      <div className="input_check">
                        <ul className="input_checklist pt025">
                          <p>수신인 상세정보</p>
                          <li className="check_txt input_flex">
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
                          <p className="pt05">주소</p>
                          <li className="check_txt input_flex">
                            <input
                              type="text"
                              placeholder="클릭하여 주소를 검색하세요."
                              name="주소"
                              onClick={() => {
                                openSmallWindow("Car1");
                              }}
                              value={fullAddress2}
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
                              name="수신인번호"
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
                    <div className="doc_txt">
                      <h3 className="mt30 mb20">교통사고 민사합의서</h3>
                      <h4>당사자(가해자)</h4>
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
                      <h4>당사자(피해자)</h4>
                      <p>
                        성명 : <span className="text_border">장두식</span>(서명
                        또는 인)
                      </p>
                      <p>
                        주민등록번호 :{" "}
                        <span className="text_border">970201-2571246</span>
                      </p>
                      <p>
                        주소 :{" "}
                        <span className="text_border">
                          광주 동구 장동 2층 204호
                        </span>
                      </p>
                      <p>
                        전화번호 :{" "}
                        <span className="text_border">010-5105-9721</span>
                      </p>
                    </div>
                    <p className="doc_date pt10">2023년 04월 03일</p>
                  </div>
                </div>
                <div className="alert scroll">
                  <button className="grammar_check" onClick={props.check}>
                    특약사항 맞춤법 검사
                  </button>
                  <br></br>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    className="grammar_check"
                    style={{ marginLeft: "10px" }}
                    onClick={handleSearch}
                  >
                    검색
                  </button>
                  <div></div>
                  <p style={{ display: props.spCk1 === undefined ? "none" : "block" }}>
                    맞춤법 교정 결과
                    <br />
                    <ul style={{ whiteSpace: "pre-wrap" }}>
                      <li>{`${props.spCk1}`}</li>
                      <li>{`${props.spCk2}`}</li>
                      <li>{`${props.spCk3}`}</li>
                    </ul>
                  </p>
                  <div>
                    {searchResult.map((word) => (
                      <div key={word.word}>
                        <span>
                          {word.word} : {word.sense.definition}
                        </span>
                        <a
                          href="/"
                          onClick={(event) => {
                            event.preventDefault();
                            openSmallWindow(word.sense.link);
                          }}
                        >
                          전체보기
                        </a>
                      </div>
                    ))}
                    <button onClick={() => setSearchResult([])}>
                      {searchResult.length > 0 && "검색결과 닫기"}
                    </button>
                  </div>
                  {/* {flaskData ? <p>{flaskData}</p> : <p>뉴스알림, 단어, 법률 등등</p>} */}
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

export default CarAccident;
