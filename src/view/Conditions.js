import React from "react";
import LogInNav from "./LogInNav";
import Sidebar from "./Sidebar";
import Document from "./Document";

const Conditions = () => {
  return (
    <>
      <div id="subWrap" className="bgnone">
        <div className="docuWrap">
          <LogInNav className="pd21 flex_sb bgblue" />

          <div className="content_write">
            <div className="write_wrap">
              <Sidebar />
              <div className="write_right">
                <div className="document">
                  <Document />
                </div>
                <div className="footer">
                  <div className="footer_wrap">
                    <ul>
                      <li>
                        <button className="edit_btn">편집하기</button>
                      </li>
                      <li>
                        <button className="save_btn">저장하기</button>
                      </li>
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
};

export default Conditions;
