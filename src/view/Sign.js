import React, { useState } from "react";
import modew_Logo from "../images/modew_logo.png"
import LogOutNav from "./LogOutNav";

const Sign = ()=>{


    return(
        <>
        <LogOutNav/>
        <div className="loginWrap">
        <div className="loginInner">
            <div className="loginBanner">
                <p>MO Do Easy Write!</p>
                <span>모듀와 함께 편리한 문서작성을 시작해보세요!</span>
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
                                    <input type="text" placeholder="이름을 입력하세요." maxlength="50"/>
                                    <input type="text" placeholder="주민등록번호를 입력하세요." maxlength="50"/>
                                    <input type="text" placeholder="핸드폰번호를 입력하세요." maxlength="50"/>
                                    <input type="text" placeholder="이메일을 입력하세요." maxlength="50"/>
                                </div>
                                <div className="pwBox">
                                    <input type="password" placeholder="비밀번호를 입력하세요."/>
                                    <input type="password" placeholder="비밀번호를 확인해주세요"/>
                                </div>
                            </div>
                            <div className="checkbox_wrap">
                                <input type="checkbox" id="saveId" value="false"/>
                                <p>[필수] 이용약관 및 개인정보 처리방침에 동의합니다.</p>
                            </div> 
                            <button className="submit">회원가입</button>
                            <div className="login_bTxt">
                                <ul>
                                    <li><a href="">로그인하기</a></li>
                                    <li><a href="">비밀번호 찾기</a></li>
                                </ul>
                            </div>
                            <button className="google_submit">Google 계정으로 회원가입</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
        </>
        
    );
}

export default Sign;