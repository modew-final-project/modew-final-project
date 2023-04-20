import React, { useState, useEffect } from "react";
import { Link, HashRouter } from "react-router-dom";
import { authService, dbService } from "../fbase";
import main_Logo from "../images/main_Logo.png";
import main_img from "../images/main_img.png";

const Main = (props) => {
  const [email, setEmail] = useState("");

  const [spellOn1, setSpellOn1] = useState("");
  const [spellOn2, setSpellOn2] = useState("");
  const [spellOn3, setSpellOn3] = useState("");

  useEffect(() => {
    const getEmail = async () => {
      const user = await authService.currentUser;
      setEmail(user.email);
    };
    getEmail();
  }, []);
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

    // 맞춤법 검사 작동 여부
    const spellCheck = async (e) => {

      // try {
      //   await fetch("http://localhost:3002/spellCheck", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       check1: builtIn,
      //       check2: cleaning,
      //       check3: direct,
      //     }),
      //   })
      //     .then((response) => response.json())
      //     .then((json) => {
      //       console.log("맞춤법 교정 결과 -> ", json);
      //       setSpellOn1(json.check1);
      //       setSpellOn2(json.check2);
      //       setSpellOn3(json.check3);
      //     });
      // } catch (error) {
      //   console.log("맞춤법검사실패");
      //   console.log(error);
      // }
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
                  <Link
                    to="/CarAccident"
                    check={spellCheck}
                    spCk1={spellOn1}
                    spCk2={spellOn2}
                    spCk3={spellOn3}
                  >
                    교통사고 합의서(민사)
                  </Link>
                </li>
                <li>
                  <Link to="/Complaint">고소장</Link>
                </li>
                <li>
                  <Link to="/Certification">내용증명(층간소음)</Link>
                </li>
                <li>
                  <Link to="/Resignation">사직서</Link>
                </li>
                {/* 클릭시 새창으로 열림 */}
                {/* <li>
             <Link to="#" onClick={() => openSmallWindow("/#/File")}>
                 File Upload
               </Link>
                </li>    */}
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
