import React, { useState, useEffect } from "react";
import searchLogo from "../images/main_search.png";
import { Link } from "react-router-dom";
import { authService } from "../fbase";

const Complaint = (props)=>{
    const onLogOutClick = () => authService.signOut();
    const [fullAddress, setFullAddress] = useState("");
    const openSmallWindow = () => {
        const width = 500;
        const height = 600;
        const left = window.screen.width / 2 - width / 2;
        const top = window.screen.height / 2 - height / 2;
        const url = "/#/Post";
    
        const features = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`;
        const windowRef = window.open(url, "Compla", features);
    
        window.addEventListener("message", (event) => {
          if (event.data.type === "updateFullAddressCompla") {
            setFullAddress(event.data.fullAddress);
            
    
          }
        });
    
        windowRef.setFullAddress = (fullAddress) => {
          windowRef.postMessage({ type: "updateFullAddress", fullAddress }, "*");
          
        };
      };

      const [spellOn1, setSpellOn1] = useState("");
      const [spellOn2, setSpellOn2] = useState("");
      const [spellOn3, setSpellOn3] = useState("");
      const [searchTerm, setSearchTerm] = useState("");
      const [searchResult, setSearchResult] = useState([]); // searchResult 변수를 빈 배열로 초기화
    
    const handleSearch = async () => {
      setSearchResult([]); // 새로운값 검색시 초기화
      try {
        const response = await fetch(`http://localhost:3002/api/search/${searchTerm}`);
        if (response.ok) {
          const data = await response.json();
          setSearchResult(data.channel.item);
          console.log(data.channel)
        } else {
          console.error("응답이 성공적으로 오지 않았습니다.");
          
        }
      } catch (error) {
        console.error(error);
      }
    };
return (
    <div id="subWrap" class="bgnone scroll">
        <div class="docuWrap">
        <div className="header_right pd21 flex_sb bgblue">
        <h3>고소장(모욕죄-SNS등 인터넷용)</h3>
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
                                    <p>당사자</p>
                                    <p class="doc_page"><span>1</span>/9</p>
                                </div>
                                <div class="doc_content_input">
                                    <div class="input_check pb10">
                                        <p>고소하는 사람(본인)</p>
                                        <div class="flex_start pt025">
                                            <span class="pr05 first_txt w15">성명</span>
                                            <input class="txt_input w80" type="text" placeholder="김고소"/>
                                        </div>
                                    </div>
                                    <div class="input_check pb10">
                                        <p>고소당하는 사람(가해자)</p>
                                        <div class="pt025">
                                            <section class="select_wrapper" data-role="selectbox"/>
                                               <select class="selectbox w100">
                                                <option   class="toggle_btn">
                                                  --- 선택 ---
                                                <img src="./images/select_arrow.png" alt="" class="select_down"/>
                                                </option>
                                               
                                                 <option   class="option_btn">알고 있음</option>
                                                 <option   class="option_btn">일부 알고 있음</option>
                                                 <option   class="option_btn">모름</option>
                                               
                                            </select>
                                        </div>
                                        <div class="input_check pt05">
                                            <div class="first_check">
                                                <div class="first_check_wrap">
                                                    <ul>
                                                        <li class="pt025">
                                                            <span class="pr05 first_txt w15">성명</span><input className="w80" type="text" placeholder="장두식"/>
                                                        </li>
                                                        <li class="pt025 flex_start">
                                                            <span class="pr05 first_txt w15">ID</span><input className="w80" type="text" placeholder="두시기콩콩"/>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="input_check pt05">
                                            <ul class="input_checklist pt05">
                                                <li>
                                                    <input type="checkbox" name="성명 알고있음"/>성명 알고있음
                                                    <input class="w100 input_style" type="text" name="성명 알고있음 선택시" placeholder="장두식"/>
                                                </li>
                                                <li class="pt05"><input type="checkbox" name="주소 알고있음"/>주소 알고있음</li>
                                                <li class="pt025"><input type="checkbox" name="연락처 알고있음"/>연락처 알고있음</li>
                                                <li class="pt025">
                                                    <input type="checkbox" name="ID(닉네임) 알고있음"/>ID(닉네임) 알고있음
                                                    <input class="w100 input_style" type="text" name="ID(닉네임) 알고있음 선택시" placeholder="두시기콩콩"/>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="input_check pt05">
                                            <div class="first_check">
                                                <div class="first_check_wrap">
                                                    <ul>
                                                        <li class="pt025 flex_start">
                                                            <span class="pr05 first_txt w15">ID</span><input className="w80" type="text" placeholder="두시기콩콩"/>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="doc_content pb075">
                                <div class="doc_content_title">
                                    <p>사건의 과정</p>
                                    <p class="doc_page"><span>2</span>/9</p>
                                </div>
                                <div class="doc_content_input">
                                    <div class="input_check pb10">
                                        <p>발생일자</p>
                                        <ul class="input_text flex_start">
                                            <li class="w50 pr025"><input class="w100" type="date" name="발생날짜" placeholder="2021.02.10"/></li>
                                            <li class="w50"><input class="w100" type="text" name="발생시간" placeholder="오후 9시경"/></li>
                                        </ul>
                                    </div>
                                    <div class="input_check pb10">
                                        <p>사건이 발생한 웹서비스의 유형</p>
                                        <div class="pt025">
                                            <section class="select_wrapper" data-role="selectbox"/>
                                               <select class="selectbox w100">
                                                <option   class="toggle_btn">
                                                  --- 선택 ---
                                                <img src="./images/select_arrow.png" alt="" class="select_down"/>
                                                </option>
                                              
                                                 <option   class="option_btn">인터넷 커뮤니티 사이트</option>
                                                 <option   class="option_btn">카카오톡</option>
                                                 <option   class="option_btn">네이버</option>
                                                 <option   class="option_btn">페이스북</option>
                                                 <option   class="option_btn">웹페이지</option>
                                               
                                            </select>
                                        </div>
                                        <div class="pt025">
                                            <section class="select_wrapper" data-role="selectbox"/>
                                               <select class="selectbox w100">
                                                <option   class="toggle_btn">
                                                  --- 선택 ---
                                                <img src="./images/select_arrow.png" alt="" class="select_down"/>
                                                </option>
                                               
                                                 <option   class="option_btn">디시인사이트</option>
                                                 <option   class="option_btn">에펨코리아</option>
                                                 <option   class="option_btn">인벤</option>
                                                 <option   class="option_btn">루이웹</option>
                                                 <option   class="option_btn">뽐뿌</option>
                                                 <option   class="option_btn">더쿠</option>
                                                 <option   class="option_btn">기타</option>
                                               
                                            </select>
                                        </div>
                                        <div class="input_check pt05">
                                            <p>직접작성</p>
                                            <input class="w100 input_style" type="text" name="기타선택시" placeholder="모듀 커뮤니티 게시판"/>
                                        </div>
                                        <div class="input_check pt05">
                                            <p>웹서비스의 이름이나 주소 등</p>
                                            <input class="w100 input_style" type="text" name="카카오톡 선택시" placeholder="단체방명 또는 오픈채팅방 '모듀'"/>
                                        </div>
                                        <div class="input_check pt05">
                                            <p>웹서비스의 이름이나 주소 등</p>
                                            <input class="w100 input_style" type="text" name="네이버 선택시" placeholder="카페명·블로그명 '모듀'(https://cafe.naver.com/modew)"/>
                                        </div>
                                        <div class="input_check pt05">
                                            <p>웹서비스의 이름이나 주소 등</p>
                                            <input class="w100 input_style" type="text" name="페이스북 선택시" placeholder="URL (www.facebook.com/modew.net)"/>
                                        </div>
                                        <div class="input_check pt05">
                                            <p>웹서비스의 이름이나 주소 등</p>
                                            <input class="w100 input_style" type="text" name="웹페이지 선택시" placeholder="네이버뉴스(https://n.news.naver.com/mnews/article/)"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="doc_content pb075">
                                <div class="doc_content_title">
                                    <p>모욕죄 성립요건1 - 공연성</p>
                                    <p class="doc_page"><span>3</span>/9</p>
                                </div>
                                <div class="doc_content_input">
                                    <div class="input_check pb05">
                                        <p>웹사이트의 이용자 수가 몇명인지 정확히 알고있나요?</p>
                                        <div class="pt025">
                                            <section class="select_wrapper w100" data-role="selectbox"/>
                                               <select class="selectbox">
                                                <option   class="toggle_btn">
                                                  --- 선택 ---
                                                <img src="./images/select_arrow.png" alt="" class="select_down"/>
                                                </option>
                                               
                                                 <option   class="option_btn">알고 있음</option>
                                                 <option   class="option_btn">모름</option>
                                               
                                            </select>
                                        </div>
                                        <div class="input_check pt05">
                                            <p>이용자 수</p>
                                            <input class="w85 input_style text_right" type="text" name="웹페이지 선택시" placeholder="8"/><span class="pl025">명</span>
                                        </div>
                                    </div>
                                    <div class="input_check pt05">
                                        <p>목격자 닉네임(ID) 알고있나요?</p>
                                        <div class="pt025">
                                            <section class="select_wrapper w100" data-role="selectbox"/>
                                               <select class="selectbox">
                                                <option class="toggle_btn">
                                                  --- 선택 ---
                                                <img src="./images/select_arrow.png" alt="" class="select_down"/>
                                                </option>
                                                
                                                    <option class="option_btn">알고 있음</option>
                                                    <option class="option_btn">모름</option>
                                                
                                            </select>
                                        </div>
                                        <div class="input_check pt05">
                                            <p>목격자 ID 입력</p>
                                            <input class="w100 input_style" type="text" name="닉네임알고있음 선택시" placeholder="목격자1(ID)"/>
                                            <input class="w100 input_style mt025" type="text" name="닉네임알고있음 선택시" placeholder="목격자2(ID)"/>
                                            <input class="w100 input_style mt025" type="text" name="닉네임알고있음 선택시" placeholder="목격자3(ID)"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="doc_content pb075">
                                <div class="doc_content_title">
                                    <p>모욕죄 성립요건2 - 모욕성</p>
                                    <p class="doc_page"><span>4</span>/9</p>
                                </div>
                                <div class="doc_content_input">
                                    <div class="input_check pb05">
                                        <p>문제발언</p>
                                        <input class="input_style w100" type="text" placeholder="너무 고소해서 고소합니다"/>
                                        <p class="pt05">가해자가 모욕한 이유</p>
                                        <input class="input_style w80" type="text" placeholder="자신과 견해가 다르다"/><span class="pl025">는 이유</span>
                                        <p class="pt05">모욕이 얼마나 지속되었나요?</p>
                                        <div class="pt025">
                                            <section class="select_wrapper" data-role="selectbox"/>
                                               <select class="selectbox w100">
                                                <option   class="toggle_btn">
                                                  --- 선택 ---
                                                <img src="./images/select_arrow.png" alt="" class="select_down"/>
                                                </option>
                                               
                                                 <option   class="option_btn">수 분 동안 수 차례 모욕행위가 지속됨</option>
                                                 <option   class="option_btn">어느 정도 모욕행위가 지속됨</option>
                                               
                                            </select>
                                        </div>
                                        <div class="input_flex pt025">
                                            <input class="input_style text_right w70" type="text" placeholder="15" name="몇분동안"/><span class="pr05 pl025 w30">분동안</span>
                                            <input class="input_style text_right w70" type="text" placeholder="10" name="몇회"/><span class="pl025 w30">회</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="doc_content pb075">
                                <div class="doc_content_title">
                                    <p>모욕죄 성립요건3 - 특정성</p>
                                    <p class="doc_page"><span>5</span>/9</p>
                                </div>
                                <div class="doc_content_input">
                                    <div class="input_check pb10">
                                        <p>어떤 점으로 본인을 특정할 수 있었나요?</p>
                                        <div class="input_check">
                                            <ul class="input_checklist">
                                                <li class="pt05"><input type="checkbox" name="닉네임"/>닉네임</li>
                                                <li class="pt025"><input type="checkbox" name="온라인 프로필"/>온라인 프로필</li>
                                                <li class="pt025"><input type="checkbox" name="인터넷 스트리밍(방송)"/>인터넷 스트리밍(방송)</li>
                                                <li class="pt025"><input type="checkbox" name="가해자와의 대화과정"/>가해자와의 대화과정</li>
                                                <li class="pt025">
                                                    <input type="checkbox" name="직접입력"/>직접입력
                                                    <input class="w100 input_style" type="text" name="직접입력 선택시" placeholder="오프라인 모임(정모)"/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="doc_content pb075">
                                <div class="doc_content_title">
                                    <p>첨부할 증거</p>
                                    <p class="doc_page"><span>6</span>/9</p>
                                </div>
                                <div class="doc_content_input">
                                    <div class="input_check pb10">
                                        <p>확보한 증거가 있나요?</p>
                                        <div class="pt025">
                                            <section class="select_wrapper" data-role="selectbox"/>
                                               <select class="selectbox w100">
                                                <option  class="toggle_btn">
                                                  --- 선택 ---
                                                <img src="./images/select_arrow.png" alt="" class="select_down"/>
                                                </option>
                                               
                                                 <option  class="option_btn">있음</option>
                                                 <option  class="option_btn">없음</option>
                                               
                                            </select>
                                        </div>
                                        <div class="input_check pt05">
                                            <ul class="input_checklist pt025">
                                                <li><input type="checkbox" name="스크린샷"/>위 사건 대화내용이 기록된 스크린샷</li>
                                                <li class="pt025"><input type="checkbox" name="녹음파일"/>위 사건 대화내용이 기록된 녹음파일</li>
                                                <li class="pt025"><input type="checkbox" name="pdf 파일"/>위 사건 대화내용이 기록된 pdf파일</li>
                                                <li class="pt025"><input type="checkbox" name="진술서"/>목격자의 진술서</li>
                                                <li class="pt025">
                                                    <input type="checkbox" name="직접입력"/>직접입력
                                                    <input class="w100 input_style" type="text" name="직접입력 선택시" placeholder="피고소인(가해자)의 자필사과문"/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="doc_content pb075">
                                <div class="doc_content_title">
                                    <p>관할 경찰서</p>
                                    <p class="doc_page"><span>7</span>/9</p>
                                </div>
                                <div class="doc_content_input">
                                    <div class="input_check pb05">
                                        <p>관할 경찰서</p>
                                        <input class="input_style w100" type="text" placeholder="영등포경찰서 사이버수사팀"/>
                                    </div>
                                </div>
                            </div>
                            <div class="doc_content pb075">
                                <div class="doc_content_title">
                                    <p>고소인(본인) 상세정보</p>
                                    <p class="doc_page"><span>8</span>/9</p>
                                </div>
                                <div class="doc_content_input">
                                    <div class="input_check">
                                        <ul class="input_checklist pt025">
                                            <p>고소인 상세정보</p>
                                            <li class="check_txt input_flex">
                                                <input type="text" placeholder="성명" name="고소인성명"/>
                                                <input type="text" placeholder="주민등록번호" name="고소인주민등록번호"/>
                                            </li>
                                            <p class="pt05">고소인 ID, 전화번호</p>
                                            <li class="check_txt input_flex">
                                                <input type="text" placeholder="ID" name="고소인ID"/>
                                                <input type="text" placeholder="전화번호" name="고소인전화번호"/>
                                            </li>
                                            <p class="pt05">주소</p>
                                            <li class="check_txt">
                                            <input
                                            type="text"
                                            placeholder="클릭하여 주소를 검색하세요."
                                            name="고소인주소"
                                            onClick={() => {
                                            openSmallWindow();
                                            }}
                                            value={fullAddress}
                                            />
                                                <input class="mt025" type="text" placeholder="나머지 주소를 입력하세요." name="고소인상세주소"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="doc_content">
                                <div class="doc_content_title">
                                    <p>피고소인(가해자) 상세정보</p>
                                    <p class="doc_page"><span>9</span>/9</p>
                                </div>
                                <div class="doc_content_input">
                                    <div class="input_check pb05">
                                        <p>ID(닉네임)</p>
                                        <input class="input_style w100" type="text" placeholder="두시기콩먹어"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hide_menu">
                            <ul class="flex_start">
                                <li><a href="" class="see_btn">미리보기</a></li>
                                <li><a href="" class="write_btn">작성하기</a></li>
                                <li><a href="" class="save_btn">저장하기</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="write_right">
                        <div class="document">
                            <div class="document_wrap">
                                <div class="doc_txt pt10">
                                    <h3 class="mt20 mb20">고 소 장</h3>
                                    <h4>고소인</h4>
                                    <p>성명 : <span class="text_border">김고소</span>(서명 또는 인)</p>
                                    <p>주민등록번호 : <span class="text_border">970201-2571246</span></p>
                                    <p>ID(닉네임) : <span class="text_border">gosomii</span></p>
                                    <p>주소 : <span class="text_border">광주 동구 동계천로 74 (장동) 2층 204호</span></p>
                                    <p>전화번호 : <span class="text_border">010-5643-8512</span></p>
                                </div>
                                <div class="doc_txt">
                                    <h4>피고소인</h4>
                                    <p>성명 : <span class="text_border">장두식</span>(서명 또는 인)</p>
                                    <p>주민등록번호 : <span class="text_border">970201-2571246</span></p>
                                    <p>ID(닉네임) : <span class="text_border">dusikiki</span></p>
                                    <p>주소 : <span class="text_border">광주 동구 장동 2층 204호</span></p>
                                    <p>전화번호 : <span class="text_border">010-5105-9721</span></p>
                                </div>
                                <div class="doc_txt">
                                    <h3 class="mt20 mb15">고 소 취 지</h3>
                                    <p>위 사건에 관하여 본 고소인은 아래와 같은 이유로 피고소인을 형법 제311조의 모욕죄로 고소하오니, 수사하여 엄히 처벌하여 주시기 바랍니다.</p>
                                </div>
                                <div class="doc_txt">
                                    <h3 class="mt20 mb15">범 죄 사 실</h3>
                                    <p>1. 고소인과 피고소인은 사건이 발생한 <span class="text_border">2023.04.03</span><span class="text_border">오후 9시경</span>
                                        카카오톡<span class="text_border">인공지능_술</span>의 이용자들 입니다.</p>
                                    <p class="pt025">2.  당시 피고소인은 <span class="text_border">5</span>명의 이용자들이 접속하고 있던 위 카카오톡에서 고소인에게 
                                        <span class="text_border">자신과 견해가 다르다</span>는 이유로 <span class="text_border">당신은,, 너무 고소해서,, 고소합니다,,~</span> 라고 하며 고소인을 공연히 모욕하였습니다.</p>
                                    <p class="pt025">3.  이에 고소인은 피고소인의 위와 같은 모욕 행위가 형법 제311조에 정한 모욕죄의 구성요건(공연성, 모욕성, 특정성)을 모두 갖추고 있고 이로 인해 고소인은 막대한 피해를 입었는바, 그 구체적인 이유는 아래와 같습니다.</p>
                                </div>
                                <div class="doc_txt">
                                    <h3 class="mt20 mb15">고 소 이 유</h3>
                                    <h5>1. 공연성에 관하여</h5>
                                    <p class="pl05"><span class="txt_number">가. </span>모욕죄의 구성요건인 공연성에 대한 대법원 판례 역시 "공연성은 불특정 다수 또는 다수인이 인식할 수 있는 상태를 의미하므로 비록 개별적으로 한 사람에게 사실을 유포하였다 하더라도 그로부터 불특정 또는 다수인에게 전파될 가능성이 있다면 공연성의 요건을 충족한다."는 입장을 취하고 있습니다(대법원 1985. 4. 23. 선고 85도431판결, 대법원 1990. 7. 24. 선고 90도1167판결 등 참조).</p>
                                    <p class="pt025 pl05"><span class="txt_number">나.</span>  본 사건이 발생한 <span class="text_border">오후 9시경</span> 당시 해당는 고소인과 피고소인을 제외하고도 다수의 이용자가 있었으며, 피고소인은의 이용자 <span class="text_border">오뎅, 김미년 및 김보원</span>가 지켜보는 가운데 "
                                        <span class="text_border">"당신은 너무 고소해서,, 고소합니다,,~</span>"라는 언행으로써 공연히 고소인에 대한 모욕을 일삼았고, 당시 위 이용자들은 고소인과 같은 서비스를 이용하는 자에 불과할 뿐 고소인에 대한 소문을 비밀로 지켜줄만한 특별한 신분관계는 없었던 만큼, 피고소인의 모욕행위는 명백히 불특정 다수에게 전파될 가능성을 내포하고 있다할 것이므로 공연성 요건 역시 충족하고 있습니다.</p>
                                    <h5 class="pt05">2. 모욕성에 관하여</h5>
                                    <p class="pl05"><span class="txt_number">가. </span> 대법원은 "형법 제311조의 모욕죄는 사람의 가치에 대한 사회적 평가를 의미하는 외부적 명예를 보호법익으로 하는 범죄로서 모욕죄에서 말하는 모욕이란, 사실을 적시하지 아니하고 사람의 사회적 평가를 저하시킬 추상적인 판단이나 경멸적 감정을 표현하는 것을 의미한다."고 판시하고 있습니다(대법원 2003. 11. 28 선고 2003도397 판결 참조). </p>
                                    <p class="pt025 pl05"><span class="txt_number">나.</span>  본 사건에서 피고소인의 <span class="text_border">"당신은 너무 고소해서,, 고소합니다,,~</span>
                                        "라는 언행은 표현이 다소 무례한 방법으로 표시된 것을 넘어 고소인의 사회적 평가를 저하시킬 만한 경멸적인 감정을 표현하였으며, 감정이 격해져 우발적 · 일회적으로 행한 행동이
                                        아니라 고의로 고소인을 비방하기 위하여 <span class="text_border">15분</span> 에 걸쳐 <span class="text_border">10</span>회 이상 지속적으로 고소인에게 모욕적인 발언을 일삼은 바 이는 모욕죄의 구성요건인 모욕성을 충족하고 있습니다. </p>
                                    <h5 class="pt05">3. 특정성에 관하여</h5>
                                    <p class="pl05"><span class="txt_number">가. </span>  "명예훼손죄와 모욕죄의 보호법익은 사람의 가치에 대한 사회적 평가인 이른바 외부적 명예인 점에서는 차이가 없고, 명예의 주체인 사람은 특정한 자임을 요하지만 반드시 사람의 성명을 명시하여 허위의 사실을 적시하여야만 하는 것은 아니므로 사람의 성명을 명시한 바 없는 허위사실의 적시행위도 그 표현의 내용을 주위사정과 종합 판단하여 그것이 어느 특정인을 지목하는 것인가를 알아차릴 수 있는 경우에는 그 특정인에 대한 명예훼손죄를 구성한다."는 것이 대법원의 일관된 입장입니다(대법원 2002. 5. 10. 선고 2000다50213판결 참조).</p>
                                    <p class="pt025 pl05"><span class="txt_number">나.</span>   이에 비추어 피고소인의 행위가 모욕죄의 구성요건인 특정성을 충족하는지 여부를 판단하여보면, 사건 당시 고소인의 인적사항이
                                        <span class="text_border">닉네임,</span><span class="text_border">온라인 프로필,</span><span class="text_border">인터넷 스트리밍(방송),</span>
                                        <span class="text_border">가해자와의 대화과정 및 오프라인 모임</span>을 통해 공개되어 당시 사건을 목격한 다른 이용자들이 고소인의 닉네임(ID)을 통하여 고소인을 현실에서 특정하여 인식할 수 있는 충분한 가능성이 있었던 상태였음이 인정된다할 것이므로, 피고소인의 모욕행위는 특정성 또한 충족하고 있습니다.</p>
                                    <h5 class="pt05">4. 고소인의 피해내용</h5>
                                    <p class="pl05"><span class="txt_number">가. </span> 고소인은 피고소인에게 모욕행위를 중단해달라고 수차례 제지하였으나, 피고소인은 아랑곳하지 않고 모욕적인 언동을 그치지 않았습니다. 이로 인해 고소인은 심한 모욕감과 수치심을 느꼈고, 당시 상황이 수시로 떠올라 심각한 정신적 스트레스 및 육체적 고통을 겪고 있는 상황입니다. 이와 같이 피고소인은 모욕적인 언동으로 형법 제311조를 위반하여 1년 이하의 징역이나 금고 또는 200만원 이하의 벌금에 처할 수 있는 엄한 죄를 저질렀으므로 재발방지를 위해 피고소인을 엄히 처벌해 주시길 바랍니다. </p>
                                    <h5 class="pt05">5. 결론</h5>
                                    <p class="pl05"><span class="txt_number">가. </span>  피고소인의 모욕행위는 형법 제311조에 정한 모욕죄의 구성요건을 모두 구비하고 있어 형법상 모욕죄를 범하였고, 이로 인해 고소인은 정상적인 생활이 어려울 정도로 막대한 피해를 입고 있으므로 피고소인을 철저하게 수사하여 엄벌해 주시기 바랍니다.</p>
                                </div>
                                <div class="doc_txt">
                                    <h3 class="mt20 mb15">첨 부 서 류</h3>
                                    <p>1. <span class="text_border">위 사건 대화내용이 기록된 스크린샷</span></p>
                                    <p class="pt025">2. <span class="text_border">위 사건 대화내용이 기록된 녹음파일</span></p>
                                    <p class="pt025">3. <span class="text_border">위 사건 대화내용이 기록된 pdf파일</span></p>
                                    <p class="pt025">4. <span class="text_border">목격자의 진술서</span></p>
                                    <p class="pt025">5. <span class="text_border">피고소인(가해자)의 자필사과문</span></p>
                                </div>
                                <div class="doc_txt">
                                    <h3 class="mt20 mb15">증 거 자 료</h3>
                                    <p>위 첨부서류 - 각 1부</p>
                                </div>
                                <p class="doc_date pt10">2023년 04월 03일</p>
                                <div class="doc_txt right pt10">
                                    <p>위 고소인</p>
                                    <p><span class="text_border">김고소</span></p>
                                </div>
                                <div class="doc_txt">
                                    <h3 class="mt20 mb15"><span class="border">영등포경찰서 사이버수사팀</span> 귀중</h3>
                                </div>
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
                        <div class="footer">
                            <div class="footer_wrap">
                                <ul>
                                    <li><button class="edit_btn">편집하기</button></li>
                                    <li><button class="save_btn">저장하기</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Complaint;