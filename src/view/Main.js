import React, { useState } from "react";
import { Link, HashRouter } from "react-router-dom";
import { authService } from "../fbase";
import main_Logo from "../images/main_Logo.png";
import main_img from "../images/main_img.png";

const Main = () => {
  // 새로운 창을 열기 위한 함수
  const openSmallWindow = (url) => {
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(
      url,
      "_blank",
      `toolbar=no, location=no, directories=no, status=no, 
      menubar=no, scrollbars=yes, resizable=no, copyhistory=no, 
      width=${width}, height=${height}, top=${top}, left=${left}`
    );
  };

  return (
    <>
      <HashRouter>
        <div className="main">
          <div className="main_left">
            <div className="leftWrap">
              <img src={main_Logo} />
              <p>누구나 사용 가능한, 쉽고 빠른 문서작성 도우미</p>
              <ul>
                <li>
                  <Link to="/Conditions">부동산 계약서</Link>
                </li>
                <li>
                  <a href="">교통사고 합의서(민사)</a>
                </li>
                <li>
                  <a href="">고소장</a>
                </li>
                <li>
                  <a href="">내용증명(층간소음)</a>
                </li>
                <li>
                  <a href="">사직서</a>
                </li>
                {/* 클릭시 새창으로 열림 */}
                <li>
                  <Link to="#" onClick={() => openSmallWindow("/#/File")}>
                    File Upload
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="main_right">
            <img src={main_img} />
          </div>
        </div>
      </HashRouter>
    </>
  );
};

export default Main;
