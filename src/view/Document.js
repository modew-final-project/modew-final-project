
import React, { useState, useEffect } from "react";
import Req1 from "../requirement/Req1";
import Req2 from "../requirement/Req2";
import Req2_Term from "../requirement/Req2_Term";
import Req2_MonthlyDue from "../requirement/Req2_MonthlyDue";
import Req3_deposit from "../requirement/Req3_deposit";
import Req3_bank from "../requirement/Req3_bank";
import Req2_Con from "../requirement/Req2_Con";
import Req4 from "../requirement/Req4";


const Document = (props) => {
  //뉴스요약 플라스크가져오기
  const [flaskData, setFlaskData] = useState(null);

  useEffect(() => {
    const fetchData = async (setFlaskData) => {
      try {
        const response = await fetch("http://127.0.0.1:5000/get_precautions");
        const data = await response.text();
        setFlaskData(data);
      } catch (error) {
        console.error("Error fetching data from Flask server:", error);
      }
    };
    const handleClick = () => {
      fetchData(setFlaskData);
    };

    window.Document = Document;
    window.fetchData = fetchData;
  }, []);

  return (
    <>
    
      <div className="alert scroll">
      {flaskData ? <p>{flaskData}</p> : <p>Loading...</p>}
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
        <div className="doc_txt">
          <h4>제3조(부동산의 표시)</h4>
          <p>
            임대인과 임차인은 쌍방 합의하여 아래 표시 부동산에 관하여 임대차
            계약을 체결한다.
          </p>
          <ul>
            <li>
              1. 토지지목 : <span>대</span>, 토지 면적 :{" "}
              <span>
                160.89m<sup>2</sup>
              </span>
            </li>
            <li>
              2. 건물 구조·용도 : 위 토지 지상 <span>다세대 주택</span>, 건물
              면적 :{" "}
              <span>
                120.34m<sup>2</sup>
              </span>
            </li>
            <li>
              3. 임대할 부분 : <span>2층 203호</span>, 임대할 면적 :{" "}
              <span>
                28.79m<sup>2</sup>
              </span>
            </li>
          </ul>
        </div>
        <Req2_Con
          startDate={props.items[1].startDate}
          endDate={props.items[1].endDate}
        />
        <Req4
          builtIn={props.items[3].builtIn}
          cleaning={props.items[3].cleaning}
          direct={props.items[3].direct}
        />
        <p>
          본 계약을 증명하기 위하여 계약 당사자가 이의 없음을 확인하고 각각 서명
          • 날인 후 임대인 및 임차인은 매장마다 간인하여야 하며, 각각 1통씩
          보관한다.
        </p>
        <p className="doc_date pt10">2023년 04월 03일</p>
        <Req1
          landLord={props.items[0].landLord}
          landLordType={props.items[0].landLordType}
          renter={props.items[0].renter}
          renterType={props.items[0].renterType}
        />
      </div>
    </>
  );
};

export default Document;
