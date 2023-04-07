import React, { useState } from "react";

const C3 = (props) => {
  const [deposit, setDeposit] = useState(props.deposit);
  const [downPayment, setDownPayment] = useState(props.downPayment);
  const [balance, setBalance] = useState(props.balance);
  const [balanceDate, setBalanceDate] = useState(props.balanceDate);
  const [bank, setBank] = useState(props.bank);
  const [accountNum, setAccountNum] = useState(props.accountNum);
  const [accountHolder, setAccountHolder] = useState(props.accountHolder);

  const depositChange = (e)=>{
    if(e.target.name==="보증금"){
      setDeposit(e.target.value);
      props.getC3Value(e.target.name,e.target.value)
    }else if(e.target.name==="계약금"){
      setDownPayment(e.target.value);
      props.getC3Value(e.target.name,e.target.value)
    }else if(e.target.name==="잔금"){
      setBalance(e.target.value);
      props.getC3Value(e.target.name,e.target.value)
    }else if(e.target.name==="잔금지급일"){
      setBalanceDate(e.target.value);
      props.getC3Value(e.target.name,e.target.value)
    }else if(e.target.name==="은행명"){
      setBank(e.target.value);
      props.getC3Value(e.target.name,e.target.value)
    }else if(e.target.name==="계좌번호"){
      setAccountNum(e.target.value);
      props.getC3Value(e.target.name,e.target.value)
    }else if(e.target.name==="예금주"){
      setAccountHolder(e.target.value);
      props.getC3Value(e.target.name,e.target.value)
    }
  }

  return (
    <>
      <div className="doc_content pb10">
        <div className="doc_content_title">
          <p>보증금 지급</p>
          <p className="doc_page">
            <span>3</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          <div className="input_check">
            <div className="first_check">
              <div className="first_check_wrap">
                <ul>
                  <p>보증금</p>
                  <li className="pt025">
                    <span className="pr05 first_txt">금</span>
                    <input className="text_right" type="text" name="보증금" onChange={depositChange}/>
                    <span>원</span>
                  </li>
                  <p className="pt10">계약금</p>
                  <li className="pt025">
                    <span className="pr05 first_txt">금</span>
                    <input className="text_right" type="text" name="계약금" onChange={depositChange}/>
                    <span>원</span>
                  </li>
                  <p className="pt10">잔금</p>
                  <li className="pt025">
                    <span className="pr05 first_txt">금</span>
                    <input className="text_right" type="text" name="잔금" onChange={depositChange}/>
                    <span>원</span>
                  </li>
                  <p className="pt10">잔금지급날짜</p>
                  <li className="pt025">
                    <input type="date" name="잔금지급일" onChange={depositChange}/>
                  </li>
                  <p className="pt10">계좌 정보</p>
                  <li className="pt025">
                    <span className="pr05 first_txt">은행명</span>
                    <input className="text_right" type="text" name="은행명" onChange={depositChange}/>
                  </li>
                  <li className="pt025">
                    <span className="pr05 first_txt">계좌번호</span>
                    <input className="text_right" type="text" name="계좌번호" onChange={depositChange}/>
                  </li>
                  <li className="pt025">
                    <span className="pr05 first_txt">예금주</span>
                    <input className="text_right" type="text" name="예금주" onChange={depositChange}/>
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

export default C3;
