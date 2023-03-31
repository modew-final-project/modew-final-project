import React, { useState } from "react";
import modew_Logo from "../images/modew_logo.png"
import LogInNav from "./LogInNav";

const UserInfo = ()=>{


    return(
        <>
        <div className="loginWrap">
                <div className="loginInner">
                    <div className="loginBanner userinfo">
                        <p>회원정보수정</p>
                        <span>장서연 님의 회원정보수정 페이지입니다</span>
                    </div>
                    <div className="loginText">
                        <div className="loginForm">
                            <div className="login_logo">
                                <img src={modew_Logo}/>
                            </div>
                            <div className="formWrap">
                                <form>
                                    <div className="user_input">
                                        <div className="loginBox">
                                            <input className="bggray" type="text" placeholder="장서연" maxLength="50" disabled/>
                                            <input className="bggray" type="text" placeholder="970201-2******" maxLength="50" disabled/>
                                            <input type="text" placeholder="이메일을 입력하세요." maxLength="50"/>
                                        </div>
                                        <div className="pwBox">
                                            <input type="password" placeholder="비밀번호를 입력하세요."/>
                                            <input type="password" placeholder="비밀번호를 확인해주세요"/>
                                        </div>
                                    </div>
                                    <button className="submit mt10 bgblue">수정</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        

    );
}

export default UserInfo;