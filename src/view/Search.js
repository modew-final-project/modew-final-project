import React from "react";
import searchLogo from "../images/main_search.png";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <div className="SearchSite_mainPOP__q705L">
        <div className="SearchSite_main_pop_inner__y_Xfi">
          <div className="SearchSite_main_pop_con__9jUOl">
            <div className="SearchSite_main_pop_div__aguGk">
              <p className="SearchSite_ph1__KFB_6">
                궁금하신
                <br />
                내용을 찾아보세요.
              </p>
              <div className="SearchSite_pop_inputbox__PtPYF">
                <form>
                  <input
                    type="text"
                    placeholder="검색어를 입력해주세요."
                    value="사직서"
                  />
                  <div className="SearchSite_pr__h4g8m">
                    <button
                      type="button"
                      className="SearchSite_it-close__KoHR2"
                    >
                      닫기버튼
                    </button>
                    <button
                      type="submit"
                      className="SearchSite_it-search__C4XdN"
                    >
                      검색버튼
                    </button>
                  </div>
                </form>
              </div>
              <div className="SearchSite_often-box__hNbdp">
                <p>자주찾는 검색어</p>
                <a style={{ cursor: "pointer" }}>근로계약</a>
                <a style={{ cursor: "pointer" }}>알바계약</a>
                <a style={{ cursor: "pointer" }}>주주총회</a>
                <a style={{ cursor: "pointer" }}>보증금반환</a>
                <a style={{ cursor: "pointer" }}>내용증명</a>
                <a style={{ cursor: "pointer" }}>지급명령</a>
                <a style={{ cursor: "pointer" }}>차용증</a>
                <a style={{ cursor: "pointer" }}>빌려준돈</a>
                <a style={{ cursor: "pointer" }}>계약해지</a>
                <a style={{ cursor: "pointer" }}>임대차해지</a>
                <a style={{ cursor: "pointer" }}>부동산</a>
                <a style={{ cursor: "pointer" }}>주주</a>
                <a style={{ cursor: "pointer" }}>동업</a>
                <a style={{ cursor: "pointer" }}>스타트업</a>
                <a style={{ cursor: "pointer" }}>합의서</a>
                <a style={{ cursor: "pointer" }}>위임장</a>
                <a style={{ cursor: "pointer" }}>상속</a>
              </div>
            </div>
            <div className="SearchSite_close_btn_box__zlhDT">
              <Link to="/">
                <div className="SearchSite_pop_closed__C0Vmx">닫기</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
