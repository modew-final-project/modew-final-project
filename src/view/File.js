import React, { useState, useEffect } from "react";
import { authService } from "../fbase";
import "../File.css";
const File = () => {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");

  // 현재 로그인된 유저의 이메일 주소 가져오기
  useEffect(() => {
    const getEmail = async () => {
      const user = await authService.currentUser;
      setEmail(user.email);
    };
    getEmail();
  }, []);

  // 파일 업로드 핸들러
  function handleFileUpload(event) {
    setFile(event.target.files[0]);
  }

  // 파일 업로드 폼 제출 핸들러
  function handleSubmit(event) {
    event.preventDefault();

    // FormData 생성하고 파일과 이메일 값을 추가
    const formData = new FormData();
    formData.append("myFile", file);
    formData.append("email", email); // 이메일 값을 formData에 추가

    // 파일 업로드 요청 보내기
    fetch("http://localhost:3002/fileupload", {
      method: "POST",
      body: formData, // email 값을 formData로 전달
    })
      .then((response) => {
        alert("파일 업로드 성공.");
        console.log(response);
      })
      .catch((error) => {
        alert("파일 업로드 실패.");
        console.error(error);
      });
  }

  return (
    <>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <input type="file" name="myFile" onChange={handleFileUpload} />
          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
};

export default File;
