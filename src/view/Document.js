import React, { useState, useEffect } from "react";
import Req1 from "../requirement/Req1";
import Req2 from "../requirement/Req2";
import Req2_Term from "../requirement/Req2_Term";
import Req2_MonthlyDue from "../requirement/Req2_MonthlyDue";
import Req3_deposit from "../requirement/Req3_deposit";
import Req3_bank from "../requirement/Req3_bank";
import Req2_Con from "../requirement/Req2_Con";
import Req4 from "../requirement/Req4";
import Req5 from "../requirement/Req5";

const Document = (props) => {
  // 새로운 창을 열기 위한 함수
  const openSmallWindow = (url) => {
    const width = 1000;
    const height = 1000;
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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]); // searchResult 변수를 빈 배열로 초기화

const handleSearch = async () => {
  setSearchResult([]); // 새로운값 검색시 초기화
  try {
    const response = await fetch(`http://localhost:3002/api/search/${searchTerm}`);
    if (response.ok) {
      const data = await response.json();
      setSearchResult(data.channel.item);
      console.log(data.channel)
    } else {
      console.error("응답이 성공적으로 오지 않았습니다.");
      
    }
  } catch (error) {
    console.error(error);
  }
};
  // 맞춤법 검사 버튼 state 전달

  //뉴스요약 플라스크가져오기
  const [flaskData, setFlaskData] = useState(null);
  const [timer, setTimer] = useState(null);

  // console.log(props?.items[0]?.landLord);

  //C1의 값 변경 시 동작
  useEffect(() => {
    if (!props.items[0].landLord) return;
    console.log("C1일경우");
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(
        () => fetchData("http://172.30.1.97:5000/CertificateThatDoesNotExist"),
        500
      )
    );
  }, [props.items[0].landLord]);

  //C2의 값 변경 시 동작
  useEffect(() => {
    if (!props.items[1].startDate) return;
    console.log("C2일경우");
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(() => fetchData("http://172.30.1.97:5000/powerOfAttorney"), 500)
    );
  }, [props.items[1].startDate]);

  //C3의 값 변경 시 동작
  useEffect(() => {
    if (!props.items[1].startDate) return;
    console.log("C3일경우");
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(() => fetchData("http://172.30.1.97:5000/registeredCopy"), 500)
    );
  }, [props.items[2].deposit]);

  //C4의 값 변경 시 동작
  useEffect(() => {
    if (!props.items[1].startDate) return;
    console.log("C4일경우");
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(() => fetchData("http://172.30.1.97:5000/buildingRegister"), 500)
    );
  }, [props.items[2].deposit]);

  //C5의 값 변경 시 동작
  useEffect(() => {
    if (!props.items[1].startDate) return;
    console.log("C5일경우");
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(() => fetchData("http://172.30.1.97:5000/get_precautions"), 500)
    );
  }, [props.items[3].builtIn]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.text();
      setFlaskData(data);
    } catch (error) {
      console.error("Error fetching data from Flask server:", error);
    }
  };

  return (
    <>
      <div className="alert scroll">
        <button className="grammar_check" onClick={props.check}>
          특약사항 맞춤법 검사
        </button><br></br>
        <input type="text" value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
      <button className="grammar_check" style={{marginLeft:"10px"}} onClick={handleSearch}>검색</button>
      <div></div>
        <p style={{ display: props.spCk1 === "" ? "none" : "block" }}>
          맞춤법 교정 결과
          <br />
          
          <ul style={{ whiteSpace: "pre-wrap" }}>
            <li>{`${props.spCk1}`}</li>
            <li>{`${props.spCk2}`}</li>
            <li>{`${props.spCk3}`}</li>
          </ul>
        </p>
        <div>
          
            {searchResult.map((word) => (
              <div key={word.word}>
                <span>{word.word} : {word.sense.definition}</span>
                <a href="/" onClick={(event) => {event.preventDefault();openSmallWindow(word.sense.link);}}>전체보기</a>
              </div>
            ))}
            <button onClick={() => setSearchResult([])}>
              {searchResult.length > 0 && "검색결과 닫기"}
            </button>
          </div>
        {flaskData ? <p style={{ whiteSpace: "pre-wrap" }}>{flaskData}</p> : ""}
      </div>
      <div className="document_wrap">
        <h3 className="mt30 mb20">부동산 임대차계약서(직거래)</h3>
        <Req2_Term
          startDate={props.items[1].startDate}
          endDate={props.items[1].endDate}
        />
        <div className="doc_txt">
          <Req2
            deposit={props.items[2].deposit}
            downPayment={props.items[2].downPayment}
            balance={props.items[2].balance}
            balanceDate={props.items[2].balanceDate}
            monthly={props.items[1].monthly}
            dueDate={props.items[1].dueDate}
          />
          <ul>
            <Req3_deposit
              deposit={props.items[2].deposit}
              downPayment={props.items[2].downPayment}
              balance={props.items[2].balance}
              balanceDate={props.items[2].balanceDate}
            />
            <Req2_MonthlyDue
              monthly={props.items[1].monthly}
              dueDate={props.items[1].dueDate}
            />
            <Req3_bank
              bank={props.items[2].bank}
              accountNum={props.items[2].accountNum}
              accountHolder={props.items[2].accountHolder}
            />
          </ul>
        </div>
        <Req5
          adress={props.items[4].adress}
          extra={props.items[4].extra}
          option1={props.items[4].option1}
          option1Size={props.items[4].option1Size}
          option2={props.items[4].option2}
          option2Size={props.items[4].option2Size}
          option3={props.items[4].option3}
          option3Size={props.items[4].option3Size}
        />
        <Req2_Con
          startDate={props.items[1].startDate}
          endDate={props.items[1].endDate}
        />
        <Req4
          builtIn={props.items[3].builtIn}
          cleaning={props.items[3].cleaning}
          direct={props.items[3].direct}
        />
        <Req1
          landLord={props.items[0].landLord}
          landLordType={props.items[0].landLordType}
          renter={props.items[0].renter}
          renterType={props.items[0].renterType}
          fullAdress={props.items[5].fullAddress}
          extraAdress={props.items[5].extraAddress}
          landLordSSN={props.items[5].landLordSSN}
          landLordNum={props.items[5].landLordNum}
          fullAdress2={props.items[6].fullAddress2}
          extraAdress2={props.items[6].extraAddress2}
          renterSSN={props.items[6].renterSSN}
          renterNum={props.items[6].renterNum}
        />
      </div>
    </>
  );
};
export default Document;
