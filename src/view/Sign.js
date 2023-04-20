import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../fbase";
import modew_Logo from "../images/modew_logo.png";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [tel, setTel] = useState("");

  const history = useHistory();

  const onChange = (e) => {

    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "birthday") {
      setBirthday(value);
    } else if (name === "tel") {
      setTel(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3002/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          pw: password,
          name: name,
          birthday: birthday,
          tel: tel,
        }),
      });

      let data = await authService.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("firebase에 전송된 데이터 : ", data);

      console.log("DB 저장 성공");

      // 회원가입 성공 메시지 클라이언트 쪽으로 전송
      alert("회원가입이 완료되었습니다.");
      history.push("/");
    } catch (error) {
      console.log("DB 저장 실패");
      console.log(error);

      // 회원가입 실패 메시지 클라이언트 쪽으로 전송
      alert("회원가입에 실패하였습니다.");
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
                <form>
                  <div className="user_input">
                    <div className="loginBox">
                      <input
                        type="text"
                        onChange={onChange}
                        name="name"
                        placeholder="이름을 입력하세요."
                        maxLength="50"
                      />
                      <input
                        type="text"
                        onChange={onChange}
                        name="birthday"
                        placeholder="주민등록번호를 입력하세요."
                        maxLength="50"
                      />
                      <input
                        type="text"
                        onChange={onChange}
                        name="tel"
                        placeholder="핸드폰번호를 입력하세요."
                        maxLength="50"
                      />
                      <input
                        type="text"
                        onChange={onChange}
                        name="email"
                        value={email}
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
                      <input
                        type="password"
                        onChange={onChange}
                        placeholder="비밀번호를 확인해주세요"
                      />
                    </div>
                  </div>
                  <div className="checkbox_wrap">
                    <input type="checkbox" id="saveId" value="false" />
                    <p>[필수] 이용약관 및 개인정보 처리방침에 동의합니다.</p>
                  </div>
                  <button className="submit" onClick={onSubmit}>
                    회원가입
                  </button>
                  <div className="login_bTxt">
                    <ul>
                      <li>
                        <a href="">로그인하기</a>
                      </li>
                      <li>
                        <a href="">비밀번호 찾기</a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
