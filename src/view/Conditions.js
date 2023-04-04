import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService,firebaseInstance } from "../fbase";

import LogInNav from "./LogInNav";
import Sidebar from "./Sidebar";
import Document from "./Document";

const Conditions = ()=>{

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");



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




    return(
            <>
                <div id="subWrap" className="bgnone">
        <div className="docuWrap">
            <LogInNav className="pd21 flex_sb bgblue"/>
            {/* <div className="header_right pd21 flex_sb bgblue">
                <h3>매매계약서</h3>
                <ul>
                    <li><a href="">Main</a></li>
                    <li><a href="">LogOut</a></li>
                    <li><a href="">My Page</a></li>
                    <li><a href="">My Drive</a></li>
                    <li><img src=""/><img src={main_search}/></li>
                    <li><img src=""/><img src={main_menu}/></li>
                </ul>
            </div> */}
            <div className="content_write">
                <div className="write_wrap">
                    <Sidebar/>
                    <div className="write_right">
                        <div className="document">
                        <Document/>
                        </div>
                        <div className="footer">
                            <div className="footer_wrap">
                                <ul>
                                    <li><button className="edit_btn">편집하기</button></li>
                                    <li><button className="save_btn">저장하기</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </>
    );
}

export default Conditions;