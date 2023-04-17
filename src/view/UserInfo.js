import React, { useState, useEffect } from "react";
import modew_Logo from "../images/modew_logo.png";
import { authService } from '../fbase'

const UserInfo = () => {
 const [email, setEmail] = useState("");
 const [user, setUser] = useState({});
 const [currentPassword, setCurrentPassword] = useState("");
 const [updatePassword, setupdatePassword] = useState("");
 const [updatePassword1, setupdatePassword1] = useState("");
 const [passwordMatch, setPasswordMatch] = useState(false);

 const handlePasswordChange = (event) => {
  setCurrentPassword(event.target.value);
}
const handlePasswordChange1 = (event) => {
  setupdatePassword(event.target.value);
  setPasswordMatch(updatePassword1 === event.target.value);
}
const handlePasswordChange2 = (event) => {
  setupdatePassword1(event.target.value);
  setPasswordMatch(updatePassword === event.target.value);
}

 // 현재 로그인된 유저의 이메일 주소 가져오기
  useEffect(() => {
    const getEmail = async () => {
      const user = await authService.currentUser;
      setEmail(user.email);
    };
    getEmail();
  }, [email]);


   // 이메일 주소가 변경되면 유저 정보를 가져오는 API를 호출하여 데이터를 업데이트
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:3002/user/${email}`);
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, [email]);

  const handleUpdatePassword = async (event) => {
    event.preventDefault();
  
    // 입력한 비밀번호가 일치하지 않으면 함수를 끝냄
    if (currentPassword !== user.Pw) {
      alert("현재 비밀번호가 일치하지 않습니다.");
      return;
    }
  
    try {
      // 서버로 보낼 데이터 생성
      const data = {
        email: email,
        newPassword: updatePassword1,
      };
  
      // PUT 메소드를 이용하여 서버에 데이터 전송
      const response = await fetch("http://localhost:3002/update-password", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      // 서버로부터 응답 받기
      const responseData = await response.json();
  
      // 응답이 성공적으로 도착하면 alert 창을 띄워 알림
        alert(responseData.message);
        window.location.href = "main.js";
      
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <div className="loginWrap">
        <div className="loginInner">
          <div className="loginBanner userinfo">
            <p>회원정보수정</p>
            <span>{user.Name} 님의 회원정보수정 페이지입니다</span>
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
                        className="bggray"
                        type="text"
                        placeholder={user.Name}
                        maxLength="50"
                        disabled
                      />
                      <input
                        className="bggray"
                        type="text"
                        placeholder={user.Birthday}
                        maxLength="50"
                        disabled
                      />
                      <input
                        className="bggray"
                        type="text"
                        placeholder={user.Email}
                        maxLength="50"
                      />
                    </div>
                    <div className="pwBox">
                      <input
                        type="password"
                        placeholder="현재 비밀번호"
                        value={currentPassword}
                        onChange={handlePasswordChange}
                      />
                      <input
                        type="password"
                        placeholder="새 비밀번호"
                        value={updatePassword}
                        onChange={handlePasswordChange1}
                      />
                      <input
                        type="password"
                        placeholder="새 비밀번호"
                        value={updatePassword1}
                        onChange={handlePasswordChange2}
                      />
                      {passwordMatch && <p>입력한 비밀번호가 일치합니다.</p>}
                      {!passwordMatch && <p>입력한 비밀번호가 일치하지 않습니다.</p>}
                    </div>
                  </div>
                  <button onClick={handleUpdatePassword} className="submit mt10 bgblue">수정</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
