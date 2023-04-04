import React, { useState } from "react";







const C5 = ()=>{


    return(
        <>
                            <div className="doc_content pb075">
                                <div className="doc_content_title">
                                    <p>부동산의 표시</p>
                                    <p className="doc_page"><span>5</span>/7</p>
                                </div>
                                <div className="doc_content_input">
                                    <div className="input_check">
                                        <p>소재지</p>
                                        <ul className="input_checklist pt05">
                                            <li><input type="checkbox" name="토지용도"/>토지용도</li>
                                            <li className="check_txt input_flex">
                                                <input type="text" placeholder="대" name="토지용도텍스트"/>
                                                <input type="text" placeholder="160.89" name="토지용도면적"/><span>m<sup>2</sup></span>
                                            </li>
                                            <li className="pt05"><input type="checkbox" name="건물 구조·용도"/>건물 구조·용도</li>
                                            <li className="check_txt input_flex">
                                                <input type="text" placeholder="다세대 주택" name="구조용도"/>
                                                <input type="text" placeholder="120.34" name="구조용도면적"/><span>m<sup>2</sup></span>
                                            </li>
                                            <li className="pt05"><input type="checkbox" name="임대할 부분"/>임대할 부분</li>
                                            <li className="check_txt input_flex">
                                                <input type="text" placeholder="2층 203호, A동 전체 등" name="임대할부분"/>
                                                <input type="text" placeholder="28.79" name="임대할부분면적"/><span>m<sup>2</sup></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
            </>
    );
}

export default C5;