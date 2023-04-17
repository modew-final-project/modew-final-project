import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const C5 = (props) => {
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

  const [adress, setAdress] = useState("");
  const [extra, setExtra] = useState("");
  const [option1, setOption1] = useState("");
  const [option1Size, setOption1Size] = useState("");
  const [option2, setOption2] = useState("");
  const [option2Size, setOption2Size] = useState("");
  const [option3, setOption3] = useState("");
  const [option3Size, setOption3Size] = useState("");

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
  // console.log(flaskData);

  // -----------------------------------------------------------------------
  // const useEffect = async(e)=>{
  //   const formData = new FormData();
  //   formData.append("file" ,file);
  //   formData.append("fileName" , fileName);

  //   try{
  //     const res = await axios.post(
  //       "http://127.0.0.1:5000", //send file to flask 
  //       formData
  //   )} catch (error) {
  //     console.error("Error fetching data from Flask server:", error)
  //   }
  // };

  //     console.log(res.data); // 서버로부터 받은 데이터는 res에
  // }

const onChange = (e)=>{
  if(e.target.name ==="기본주소"){
    setSearchInput(e.target.value);
    setAdress(e.target.value);
    props.getC5Value("기본주소", e.target.value);
  }else if(e.target.name==="상세주소"){
    setExtra(e.target.value);
    props.getC5Value("상세주소", e.target.value);
  }else if(e.target.name==="토지용도텍스트"){
    setOption1(e.target.value);
    props.getC5Value("토지용도텍스트", e.target.value);
  }else if(e.target.name==="토지용도면적"){
    setOption1Size(e.target.value);
    props.getC5Value("토지용도면적", e.target.value);
  }else if(e.target.name==="구조용도"){
    setOption2(e.target.value);
    props.getC5Value("구조용도", e.target.value);
  }else if(e.target.name==="구조용도면적"){
    setOption2Size(e.target.value);
    props.getC5Value("구조용도면적", e.target.value);
  }else if(e.target.name==="임대할부분"){
    setOption3(e.target.value);
    props.getC5Value("임대할부분", e.target.value);
  }else if(e.target.name==="임대할부분면적"){
    setOption3Size(e.target.value);
    props.getC5Value("임대할부분면적", e.target.value);
  }
}


  const onClick = (e) => {
    if (e.target.value === "토지용도") {
      if (e.target.checked === true) {
        setDisplay1("block");
      } else {
        setDisplay1("none");
        props.getC5Value("토지용도면적", "");
        props.getC5Value("토지용도텍스트", "");
      }
    } else if (e.target.value === "건물 구조·용도") {
      if (e.target.checked === true) {
        setDisplay2("block");
      } else {
        setDisplay2("none");
        props.getC5Value("구조용도", "");
        props.getC5Value("구조용도면적", "");
      }
    } else if (e.target.value === "임대할 부분") {
      if (e.target.checked === true) {
        setDisplay3("block");
      } else {
        setDisplay3("none");
        props.getC5Value("임대할부분", "");
        props.getC5Value("임대할부분면적", "");
      }
    }
  };

  return (
    <> <Link to="#" onClick={() => openSmallWindow("http://127.0.0.1:5000/")}></Link>
      <div className="doc_content pb075">
        <div className="doc_content_title">
          <p>부동산의 표시</p>
          <p className="doc_page">
            <span>5</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          <div className="input_check">
            <p>소재지</p>
            <ul className="input_checklist pt05">
            <li className="check_txt pb05">
              <form action="/search_add" method='POST'>
              <Link to="#" onClick={() => openSmallWindow("http://127.0.0.1:5000/")}>
                <input
                  type="text"
                  name="기본주소"
                  placeholder="클릭하여 주소를 검색하세요"
                  value={adress}
                  onChange={onChange}
                /></Link>
              </form>
                <input
                  type="text"
                  placeholder="나머지 주소를 입력하세요."
                  name="상세주소"
                  value={extra}
                  onChange={onChange}
                />
              </li>
              <li>
                <input type="checkbox" name="토지용도" value="토지용도" onClick={onClick}/>
                토지용도
              </li>
              <li className="check_txt" style={{ display: display1 }}>
                <div className="input_flex">
                  <input type="text" placeholder="대" name="토지용도텍스트" onChange={onChange} value={option1}/>
                  <input type="text" placeholder="160.89" name="토지용도면적" onChange={onChange} value={option1Size}/>
                  <span>
                    m<sup>2</sup>
                  </span>
                </div>
              </li>
              <li className="pt05">
                <input type="checkbox" name="건물 구조·용도" value="건물 구조·용도" onClick={onClick}/>
                건물 구조·용도
              </li>
              <li className="check_txt input_flex" style={{ display: display2 }}>
              <div className="input_flex">
                <input type="text" placeholder="다세대 주택" name="구조용도" onChange={onChange} value={option2}/>
                <input type="text" placeholder="120.34" name="구조용도면적" onChange={onChange} value={option2Size}/>
                <span>
                  m<sup>2</sup>
                </span>
              </div>
              </li>
              <li className="pt05">
                <input type="checkbox" name="임대할 부분" value="임대할 부분" onClick={onClick}/>
                임대할 부분
              </li>
              <li className="check_txt input_flex" style={{ display: display3 }}>
              <div className="input_flex">
                <input
                  type="text"
                  placeholder="2층 203호, A동 전체 등"
                  name="임대할부분"
                  onChange={onChange}
                  value={option3}
                />
                <input type="text" placeholder="28.79" name="임대할부분면적" onChange={onChange} value={option3Size}/>
                <span>
                  m<sup>2</sup>
                </span>
              </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default C5;
