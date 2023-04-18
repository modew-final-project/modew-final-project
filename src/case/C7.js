import React, { useState } from "react";

const C7 = (props) => {
  const [fullAddress, setFullAddress] = useState("");
  const [extraAdress, setExtraAddress] = useState("");
  const [renterNum, setRenterNum] = useState("");
  const [renterSSN, setRenterSSN] = useState("");

  // 새로운 창을 열기 위한 함수
  const openSmallWindow = () => {
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    const url = "/#/Post";

    const features = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`;
    const windowRef = window.open(url, "C7", features);

    window.addEventListener("message", (event) => {
      if (event.data.type === "updateFullAddress07") {
        setFullAddress(event.data.fullAddress);
        props.getC7Value("세입자주소", event.data.fullAddress);

      }
    });

    windowRef.setFullAddress = (fullAddress) => {
      windowRef.postMessage({ type: "updateFullAddress", fullAddress }, "*");
      
    };
  };

const onSet = (e)=>{
  openSmallWindow(e);
  onChange(e);
}

  const onChange = (e) => {
    if (e.target.name === "세입자주민등록번호") {
      setRenterSSN(e.target.value);
      props.getC7Value("세입자주민등록번호", e.target.value);
    } else if (e.target.name === "세입자주소") {
      setFullAddress(fullAddress)
      props.getC7Value("세입자주소", fullAddress);
    } else if (e.target.name === "세입자상세주소") {
      setExtraAddress(e.target.value);
      props.getC7Value("세입자상세주소", e.target.value);
    } else if (e.target.name === "세입자번호") {
      setRenterNum(e.target.value);
      props.getC7Value("세입자번호", e.target.value);
    }
  };
  return (
    <>
      <div className="doc_content pb075">
        <div className="doc_content_title">
          <p>세입자 상세정보</p>
          <p className="doc_page">
            <span>7</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          <div className="input_check">
            <ul className="input_checklist pt025">
              <p>세입자 상세정보</p>
              <li className="check_txt input_flex">
                <input type="text" placeholder={props.renterType} name="세입자성명" value={props.renter}/>
                <input
                  type="text"
                  placeholder="주민등록번호"
                  name="세입자주민등록번호"
                  value={renterSSN}
                  onChange={onChange}
                />
              </li>
              <p className="pt05">주소</p>
              <li className="check_txt input_flex">
                <input
                  type="text"
                  placeholder="클릭하여 주소를 검색하세요."
                  name="세입자주소"
                  onClick={(e) => {
                    onSet(e);
                  }}

                  value={fullAddress}
                  
                  
                />
                <input
                  type="text"
                  placeholder="나머지 주소를 입력하세요."
                  name="세입자상세주소"
                  value={extraAdress}
                  onChange={onChange}
                />
              </li>
              <p className="pt05">전화번호</p>
              <li className="check_txt input_flex">
                <input
                  type="text"
                  placeholder="010-1234-5678"
                  name="세입자번호"
                  value={renterNum}
                  onChange={onChange}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default C7;
