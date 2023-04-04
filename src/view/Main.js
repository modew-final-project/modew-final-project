import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "../fbase";
import main_Logo from "../images/main_Logo.png"
import main_img from "../images/main_img.png"

const Main = ()=>{
    
    

    return(
        <>
            <div className="main">
                <div className="main_left">
                    <div className="leftWrap">
                        <img src={main_Logo}/>
                        <p>누구나 사용 가능한, 쉽고 빠른 문서작성 도우미</p>
                        <ul>
                        <li><Link to="/Conditions" >부동산계약서</Link></li>
                            <li><a href="">출입국신고서</a></li>
                            <li><a href="">고소장</a></li>
                            <li><a href="">내용증명</a></li>
                            <li><a href="">지급명령</a></li>
                        </ul>
                    </div>
                </div>
                <div className="main_right">
                    <img src={main_img}/>
                </div>
            </div>
        </>
        
        
    );
}

export default Main;