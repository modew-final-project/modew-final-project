import React, { useState } from "react";
import { authService } from "../fbase";
import modew_Logo from "../images/modew_logo.png"
import LogOutNav from "./LogOutNav";

const Login = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (e) =>{
        const{
            target:{name,value},


        } =e;
        if(name==="email"){
            setEmail(value);
        }else if(name==="password"){
            setPassword(value);
        }
    }

    const onSubmit = async (e)=>{

        e.preventDefault();

        try {
            let data = await authService.signInWithEmailAndPassword(email,password);
            console.log(data);

        } catch (error) {
            
            console.log(error);
        }

    }


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
                            <form onSubmit={onSubmit}>
                                <div className="user_input">
                                    <div className="loginBox">
                                        <input type="text" onChange={onChange} value={email} name="email" placeholder="이메일을 입력하세요." maxLength="50"/>
                                    </div>
                                    <div className="pwBox">
                                        <input type="password" onChange={onChange} value={password} name="password" placeholder="비밀번호를 입력하세요."/>
                                    </div>
                                </div>
                                <div className="checkbox_wrap">
                                    <input type="checkbox" id="saveId" value="false"/>
                                    <p>이메일 저장</p>
                                </div>
                                <button className="submit">로그인</button>
                                <div className="login_bTxt">
                                    <ul>
                                        <li><a href="">회원가입하기</a></li>
                                        <li><a href="">비밀번호 찾기</a></li>
                                    </ul>
                                </div>
                                <button className="google_submit">Google 계정으로 로그인</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;