import React, { useState } from "react";
import modew_Logo from "../images/modew_logo.png"
import LogInNav from "./LogInNav";

const MyDrive = ()=>{


    return(
        <>
        <LogInNav/>
        <div class="mydrive">
                <h1>내 문서함</h1>
                <div class="driveWrap">
                    {/* <div class="drive_folder">
                        <ul>
                            <li><a href="">내 문서함 1</a></li>
                            <li><a href="">내 문서함 2</a></li>
                            <li><a href="">내 문서함 3</a></li>
                            <li><a href="">내 문서함 4</a></li>
                            <li><a href="">내 문서함 5</a></li>
                        </ul>
                    </div>dirve_folder */}
                    <div class="drive_file">
                        <div class="file_content">
                            <div class="content_wrap">
                                <a href="">매매계약서 ver2</a>
                                <div class="thumb">
                                    <img src="./images/file_thumb.png"/>
                                </div>
                            </div>
                        </div>
                        <div class="file_content">
                            <div class="content_wrap">
                                <a href="">1298745_google_brand_branding_logo_network_icon.png</a>
                                <div class="thumb">
                                    <img src="./images/file_thumb.png"/>
                                </div>
                            </div>
                        </div>
                        <div class="file_content">
                            <div class="content_wrap">
                                <a href="">매매계약서 ver1</a>
                                <div class="thumb">
                                    <img src="./images/file_thumb.png"/>
                                </div>
                            </div>
                        </div>
                        <div class="file_content">
                            <div class="content_wrap">
                                <a href="">임대차 계약서</a>
                                <div class="thumb">
                                    <img src="./images/file_thumb.png"/>
                                </div>
                            </div>
                        </div>
                        <div class="file_content">
                            <div class="content_wrap">
                                <a href="">분양 계약서 ver2</a>
                                <div class="thumb">
                                    <img src="./images/file_thumb.png"/>
                                </div>
                            </div>
                        </div>
                        <div class="file_content">
                            <div class="content_wrap">
                                <a href="">분양 계약서 ver1</a>
                                <div class="thumb">
                                    <img src="./images/file_thumb.png"/>
                                </div>
                            </div>
                        </div>
                        <div class="file_content">
                            <div class="content_wrap">
                                <a href="">부동산 증여 계약서</a>
                                <div class="thumb">
                                    <img src="./images/file_thumb.png"/>
                                </div>
                            </div>
                        </div>
                        <div class="file_content">
                            <div class="content_wrap">
                                <a href="">연장계약서</a>
                                <div class="thumb">
                                    <img src="./images/file_thumb.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pagging">
                        <ul>
                            <li class="page_first"><a href="">맨처음페이지</a></li>
                            <li class="page_prev"><a href="">이전페이지</a></li>
                            <li class="active"><a href="">1</a></li>
                            <li><a href="">2</a></li>
                            <li><a href="">3</a></li>
                            <li><a href="">4</a></li>
                            <li><a href="">5</a></li>
                            <li class="page_next"><a href="">다음페이지</a></li>
                            <li class="page_last"><a href="">마지막페이지</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default MyDrive;