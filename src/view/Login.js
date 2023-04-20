import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService, firebaseInstance } from "../fbase";
import modew_Logo from "../images/modew_logo.png";

const Login = () => {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log(email)

  // if (email!=""){
  //   history.push("/");
  // }

  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;
    let provider = new firebaseInstance.auth.GoogleAuthProvider();

    const data = await authService.signInWithPopup(provider);
    console.log("로그인데이터",data);
    history.replace("/");
    if (data !== null){
    try {
      await fetch("http://localhost:3002/google_user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.user.email,
          pw: data.user.uid,
          name: data.user.displayName,
        }),
      });
      
    } catch (error) {
      console.log(error);
    }
  }
    
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = await authService.signInWithEmailAndPassword(email, password);
      if (data.user != null) {
        console.log("유저정보 : ", data.user.email);
        history.push("/");
      } else {
        console.log("제대로 로그인 안됨 : ", data);
      }
    } catch (error) {
      setError("이메일 또는 비밀번호가 틀렸습니다. 다시 입력해주세요.");
      console.log(error);
    }
  };

  return (
    <>
      <div className="loginWrap">
        <div className="loginInner">
          <div className="loginBanner">
            <p>MO Do Easy Write!</p>
            <span>모듀와 함께 편리한 문서작성을 시작해보세요!</span>
          </div>
          <div className="loginText">
            <div className="loginForm">
              <div className="login_logo">
                <img src={modew_Logo} />
              </div>
              <div className="formWrap">
                <form onSubmit={onSubmit}>
                  <div className="user_input">
                    <div className="loginBox">
                      <input
                        type="text"
                        onChange={onChange}
                        value={email}
                        name="email"
                        placeholder="이메일을 입력하세요."
                        maxLength="50"
                      />
                    </div>
                    <div className="pwBox">
                      <input
                        type="password"
                        onChange={onChange}
                        value={password}
                        name="password"
                        placeholder="비밀번호를 입력하세요."
                      />
                    </div>
                  </div>
                  <div className="checkbox_wrap">
                    <input type="checkbox" id="saveId" value="false" />
                    <p>이메일 저장</p>
                  </div>
                  {error}
                  <button className="submit">로그인</button>
                  <div className="login_bTxt">
                    <ul>
                      <li>
                        <a href="">회원가입하기</a>
                      </li>
                      <li>
                        <a href="">비밀번호 찾기</a>
                      </li>
                    </ul>
                  </div>
                </form>
                <button
                  className="google_submit"
                  onClick={onSocialClick}
                  name="google"
                >
                  Google 계정으로 로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
