import React, { useState, useEffect } from "react";
import { authService } from '../fbase'

const MyDrive = () => {
  const [email, setEmail] = useState("");
  const [fileList, setFileList] = useState([]);
  

  // 현재 로그인된 유저의 이메일 주소 가져오기
  useEffect(() => {
    const getEmail = async () => {
      const user = await authService.currentUser;
      setEmail(user.email);
    };
    getEmail();
  }, [email]);

  // 파일 목록 가져오기
  useEffect(() => {
    const fetchFileList = async () => {
      const response = await fetch(`http://localhost:3002/filelist/${email}`);
      const data = await response.text(); // JSON 형태가 아니라 텍스트 형태로 받아옴
      setFileList(JSON.parse(data)); // 받아온 텍스트 데이터를 JSON으로 파싱하여 사용
    };
    fetchFileList();
  }, [email]);
  
  
  return (
    <>
      <div className="mydrive">
        <h1>내 문서함</h1>
        <div className="driveWrap">
            <div className="drive_file" >
            {fileList.map((file, index) => (
              <div className="file_content" key={index}>
                <div className="content_wrap">
                  <a href="">{file.file_name}</a>
                  <div className="thumb">
                  <img src={`/fileforder/${file.file_name}`} alt={file.file_name} />  
                  </div>
                </div>
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
