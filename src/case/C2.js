import React, { useState } from "react";

const C2 = (props) => {

  const [display,setDisplay] = useState("none");

  const [startDate,setStartDate] = useState(props.startDate);
  const [endDate,setEndDate] = useState(props.endDate);
  const [monthly,setMonthly] = useState(props.monthly);
  const [dueDate,setDueDate] = useState(props.dueDate);

  const onClick = (e)=>{
    if(e.target.value==="월세및반전세"){
      setDisplay("block");
    }else{
      setMonthly("");
      props.getC2Value("월세금액","",0)
      setDueDate("");
      props.getC2Value("지불일","",1)
      setDisplay("none");
    }
  }

  // 계약기간
  const dateChange = (e)=>{
    if(e.target.name==="시작날짜"){
      setStartDate(e.target.value);
      props.getC2Value(e.target.name,e.target.value,0)
    }else if(e.target.name==="끝날짜"){
      setEndDate(e.target.value);
      props.getC2Value(e.target.name,e.target.value,1)
    }
  }
  // 월세 및 반전세라면
  const monthlyChange = (e)=>{
    if(e.target.name==="월세금액"){
      setMonthly(e.target.value);
      props.getC2Value(e.target.name,e.target.value,0)
    }else if(e.target.name==="지불일"){
      setDueDate(e.target.value);
      props.getC2Value(e.target.name,e.target.value,1)
    }
  }

  return (
    <>
      <div className="doc_content pb10">
        <div className="doc_content_title">
          <p>임대차 계약의 내용</p>
          <p className="doc_page">
            <span>2</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          <div className="input_check pb10">
            <p>임대차 계약의 종류</p>
            <ul className="input_radio">
              <li>
                <input type="radio" onClick={onClick} name="종류" value="월세및반전세"/>
                월세 및 반전세
              </li>
              <li>
                <input type="radio" onClick={onClick} name="종류" value="전세"/>
                전세
              </li>
            </ul>
          </div>
          <div className="input_check">
            <p>임대차 계약기간</p>
            <ul className="input_text">
              <li className="pb05">
                <input className="w85" type="date" name="시작날짜" onChange={dateChange} value={startDate}/>
                부터
              </li>
              <li>
                <input className="w85" type="date" name="끝날짜" onChange={dateChange} value={endDate}/>
                까지
              </li>
            </ul>
            <div className="first_check">
              <div className="first_check_wrap pt10">
                <ul style={{display:display}}>
                  <p>월세금액</p>
                  <li className="pt025">
                    <span className="pr05">금</span>
                    <input
                      className="text_right"
                      type="text"
                      name="월세금액"
                      onChange={monthlyChange}
                      value={monthly}
                    />
                    <span>원</span>
                  </li>
                  <p className="pt075">지불일</p>
                  <li className="pt025">
                    <span className="pr05">매월</span>
                    <input
                      className="text_right"
                      type="text"
                      name="지불일"
                      onChange={monthlyChange}
                      value={dueDate}
                    />
                    <span>일</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default C2;
