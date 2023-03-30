import React, { useState } from "react";
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
                            <li><a href="">매매계약서</a></li>
                            <li><a href="">임대차계약서</a></li>
                            <li><a href="">분양계약서</a></li>
                            <li><a href="">연장, 재계약서</a></li>
                            <li><a href="">부동산 증여 계약서</a></li>
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