import React, { useState } from "react";

const C6 = (props) => {
  const [fullAddress, setFullAddress] = useState(props.fullAddress);
  const [extraAdress, setExtraAddress] = useState(props.extraAdress);
  const [landLordNum, setLandLordNum] = useState(props.landLordNum);
  const [landLordSSN, setLandLordSSN] = useState(props.landLordSSN);

  // 새로운 창을 열기 위한 함수
  const openSmallWindow = () => {
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    const url = "/#/Post";

    const features = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`;
    const windowRef = window.open(url, "C6", features);

    window.addEventListener("message", (event) => {
      if (event.data.type === "updateFullAddress06") {
        setFullAddress(event.data.fullAddress);
        props.getC6Value("집주인주소", event.data.fullAddress);
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
if (e.target.name === "집주인주민등록번호") {
      setLandLordSSN(e.target.value);
      props.getC6Value("집주인주민등록번호", e.target.value);
    } else if (e.target.name === "집주인주소") {
      setFullAddress(e.target.value)
      props.getC6Value("집주인주소", fullAddress);
    } else if (e.target.name === "집주인상세주소") {
      setExtraAddress(e.target.value);
      props.getC6Value("집주인상세주소", e.target.value);
    } else if (e.target.name === "집주인번호") {
      setLandLordNum(e.target.value);
      props.getC6Value("집주인번호", e.target.value);
    }
  };

  return (
    <>
      <div className="doc_content pb075">
        <div className="doc_content_title">
          <p>집주인 상세정보</p>
          <p className="doc_page">
            <span>6</span>/7
          </p>
        </div>
        <div className="doc_content_input">
          <div className="input_check">
            <ul className="input_checklist pt025">
              <p>집주인 상세정보</p>
              <li className="check_txt input_flex">
                <input
                  type="text"
                  placeholder={props.landLordType}
                  name="집주인성명"
                  value={props.landLord}
                  
                />
                <input
                  type="text"
                  placeholder="주민등록번호"
                  name="집주인주민등록번호"
                  value={landLordSSN}
                  onChange={onChange}
                />
              </li>
              <p className="pt05">주소</p>
              <li className="check_txt input_flex">
                <input
                  type="text"
                  placeholder="클릭하여 주소를 검색하세요."
                  name="집주인주소"
                  onClick={(e) => {
                    onSet(e);
                  }}
                  value={fullAddress}
                  
                />
                <input
                  type="text"
                  placeholder="나머지 주소를 입력하세요."
                  name="집주인상세주소"
                  value={extraAdress}
                  onChange={onChange}
                />
              </li>
              <p className="pt05">전화번호</p>
              <li className="check_txt input_flex">
                <input
                  type="text"
                  placeholder="010-1234-5678"
                  name="집주인번호"
                  value={landLordNum}
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

export default C6;
