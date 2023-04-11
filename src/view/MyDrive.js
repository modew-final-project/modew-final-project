import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { authService } from '../fbase'

const MyDrive = () => {
  const [email, setEmail] = useState("");
  const [fileList, setFileList] = useState([]);

  const openSmallWindow = (url) => {
    const width = 1000;
    const height = 1200;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(
      url,
      "_blank",
      `toolbar=no, location=no, directories=no, status=no, 
      menubar=no, scrollbars=yes, resizable=no, copyhistory=no, 
      width=${width}, height=${height}, top=${top}, left=${left}`
    );
  };

  // 현재 로그인된 유저의 이메일 주소 가져오기
  useEffect(() => {
    const getEmail = async () => {
      const user = await authService.currentUser;
      setEmail(user.email);
    };
    getEmail();
  }, [email]);

 // PDF 파일 뷰어 링크 생성 함수
const generatePDFViewerLink = (pdfUrl) => {
  const viewerUrl = "https://mozilla.github.io/pdf.js/web/viewer.html";
  const encodedPdfUrl = encodeURIComponent(pdfUrl);
  return `${viewerUrl}?file=${encodedPdfUrl}`;
};

// 파일 목록 가져오기
useEffect(() => {
  const fetchFileList = async () => {
    try {
      const response = await fetch(`http://localhost:3002/filelist/${email}`);
      const data = await response.json(); // JSON 데이터로 변환
      const modifiedFileList = data.map((file) => ({
        ...file,
        pdfurl: `http://localhost:3002/filefolder/${file.file_name}`, // 파일 경로 수정
        imageurl: `http://localhost:3002/filefolder/${file.image_name}`,
      }));
      setFileList(modifiedFileList);
    } catch (error) {
      // 에러 처리
    }
  };
  fetchFileList();
}, [email]);

  return (
    <>
      <div className="mydrive">
        <h1>내 문서함</h1>
        <div className="driveWrap">
          <div className="drive_file">
            {fileList.map((file, index) => (
              <div className="file_content" key={index}>
                <div className="content_wrap">
                <Link to="#" onClick={() => openSmallWindow(generatePDFViewerLink(file.pdfurl))}>{file.user_filename}</Link>  
                <div className="thumb">
                <img src={file.imageurl} alt={file.image_name} />
                </div>
                </div>
                <a>{file.upload_date.slice(2, 10)} {file.upload_date.slice(11, 16)}</a>
              </div>
            ))}
          </div>
          <div className="pagging">
            <ul>
              <li className="page_first"><a href="">맨처음페이지</a></li>
              <li className="page_prev"><a href="">이전페이지</a></li>
              <li className="active"><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li><a href="">5</a></li>
              <li className="page_next"><a href="">다음페이지</a></li>
              <li className="page_last"><a href="">마지막페이지</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDrive;
