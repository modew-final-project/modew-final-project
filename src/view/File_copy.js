import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../File.css";

const File_copy = () => {
  const openSmallWindow = (url) => {
    const width = 500;
    const height = 600;
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

  const [display1, setDisplay1] = useState("none");
  const [display2, setDisplay2] = useState("none");
  const [display3, setDisplay3] = useState("none");
  const [searchInput, setSearchInput] = useState(''); // 변수 선언 및 초기화


  //부동산 플라스크가져오기
  const [flaskData, setFlaskData] = useState(null);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://127.0.0.1:5000");
          const data = await response.text();
          setFlaskData(data);
        } catch (error) {
          console.error("Error fetching data from Flask server:", error);
        }
      };


    fetchData();
    
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:5000');
    const data = await response.json();
    return data;
    }

  console.log(flaskData);



  const onClick = (e) => {
    if (e.target.value === "토지용도") {
      if (e.target.checked === true) {
        setDisplay1("block");
      } else {
        setDisplay1("none");
      }
    } else if (e.target.value === "건물 구조·용도") {
      if (e.target.checked === true) {
        setDisplay2("block");
      } else {
        setDisplay2("none");
      }
    } else if (e.target.value === "임대할 부분") {
      if (e.target.checked === true) {
        setDisplay3("block");
      } else {
        setDisplay3("none");
      }
    }
  };

  return (
      <div className="getaddWrap">
        <h1>부동산 주소검색</h1>
        <form action="/" method="POST">
            <p><input className="writeadd" type="text" name="search" placeholder="시군구 동 지번을 입력하세요"/></p>
            <p><input className="submit" type="submit" value="검색하기" onclick="fetchData()"/></p>
            <div id="loading">검색중 다른작업을 우선으로 진행해주세요...</div>
        </form>
      </div>
  );
};

export default File_copy;
