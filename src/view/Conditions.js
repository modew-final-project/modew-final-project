import React, { useState, useEffect } from "react";
import LogInNav from "./LogInNav";
import Sidebar from "./Sidebar";
import Document from "./Document";
import html2pdf from "html2pdf.js";
import { authService } from '../fbase'

const Conditions = () => {
  const [email, setEmail] = useState("");

  // 현재 로그인된 유저의 이메일 주소 가져오기
  useEffect(() => {
    const getEmail = async () => {
      const user = await authService.currentUser;
      setEmail(user.email);
    };
    getEmail();
  }, []);
  console.log(email);
  
  // PDF 파일을 생성하고 서버에 전송하는 함수
  const saveAsPDF = async () => {
    const element = document.getElementById("pdf-wrapper"); // PDF로 변환할 요소
    const opt = {
      margin: 1,
      filename: "conditions.pdf", // PDF 파일 이름
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { dpi: 192, letterRendering: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    const pdfBlob = await html2pdf().from(element).set(opt).output("blob"); // PDF 파일 생성

    // FormData 객체 생성
    const formData = new FormData();
    formData.append("email", email); // 이메일 정보 추가
    formData.append("pdf", pdfBlob, "conditions.pdf"); // PDF 파일 추가

    // 서버로 전송할 HTTP 요청 생성
    const requestOptions = {
      method: "POST",
      body: formData,
    };

    // 서버로 HTTP 요청 전송
    fetch("http://localhost:3002/pdfupload", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        alert("파일 저장 성공");
        console.log(data);
      })
      .catch((error) => {
        alert("파일 저장 실패");
        console.error(error);
      });
  };

  return (
    <>
      <div id="subWrap" className="bgnone">
        <div className="docuWrap">
          <LogInNav className="pd21 flex_sb bgblue" />

          <div className="content_write">
            <div className="write_wrap">
              <Sidebar />
              <div className="write_right">
                <div className="document" id="pdf-wrapper">
                    <Document />
                </div>
                <div className="footer">
                  <div className="footer_wrap">
                    <ul>
                      <li>
                        <button className="edit_btn">편집하기</button>
                      </li>
                      <li>
                        <button className="save_btn" onClick={saveAsPDF}>저장하기</button>
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
