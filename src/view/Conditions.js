import React, { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import LogInNav from "./LogInNav";
import Sidebar from "./Sidebar";
import Document from "./Document";
import html2pdf from "html2pdf.js";
import html2canvas from 'html2canvas';
import { authService } from "../fbase";



const Conditions = () => {
  const location = useLocation();
  const tempData1 = location.state?.tempData1 ?? "";
  const fileName = location.state?.fileName ?? "";

  console.log("[Condition.js]",location);
  const [c1event,setC1event]= useState("");
  
  // 맞춤법 검사 작동
  const [spellOn1, setSpellOn1] = useState("");
  const [spellOn2, setSpellOn2] = useState("");
  const [spellOn3, setSpellOn3] = useState("");

  //C1 & requirement[0]
  const [landLord, setLandLord] = useState("");
  const [landLordType, setLandLordType] = useState("");
  const [renter, setRenter] = useState("");
  const [renterType, setRenterType] = useState("");

  //C2 & requirement[1]
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [monthly, setMonthly] = useState("");
  const [dueDate, setDueDate] = useState("");

  //C3 & requirement[2]
  const [deposit, setDeposit] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [balance, setBalance] = useState("");
  const [balanceDate, setBalanceDate] = useState("");
  const [bank, setBank] = useState("");
  const [accountNum, setAccountNum] = useState("");
  const [accountHolder, setAccountHolder] = useState("");

  //C4 & requirement[3]
  const [builtIn, setBuiltIn] = useState("");
  const [cleaning, setCleaning] = useState("");
  const [direct, setDirect] = useState("");

  // useEffect(() => {
  //   if (tempData1 !== "") {
  //     // 밑에 tempData json 형태로 DB에 저장한거 불러온거임
  //     // 나중에 추가할거있으면 여기도 같이 바꿔줘야함
  //     const temp = JSON.parse(tempData1);
  //     // C1 & requirement[0]
  //     setLandLord(temp.landLord);
  //     setLandLordType(temp.landLordType);
  //     setRenter(temp.renter);
  //     setRenterType(temp.renterType);

  //     // C2 & requirement[1]
  //     setStartDate(temp.startDate);
  //     setEndDate(temp.endDate);
  //     setMonthly(temp.monthly);
  //     setDueDate(temp.dueDate);

  //     // C3 & requirement[2]
  //     setDeposit(temp.deposit);
  //     setDownPayment(temp.downPayment);
  //     setBalance(temp.balance);
  //     setBalanceDate(temp.balanceDate);
  //     setBank(temp.bank);
  //     setAccountNum(temp.accountNum);
  //     setAccountHolder(temp.accountHolder);

  //     // C4 & requirement[3]
  //     setBuiltIn(temp.builtIn);
  //     setCleaning(temp.cleaning);
  //     setDirect(temp.direct);
  //   }
  // }, [tempData1]);
  
  // 하위 컴포넌트로 전달할 기본값
  const requirements = [
    {
      //C1
      // 집주인, 종류(법인,개인사업자,개인)
      landLord: landLord,
      landLordType: landLordType,
      // 임차인, 종류(법인,개인사업자,개인)
      renter: renter,
      renterType: renterType,
    },
    {
      //C2
      // 계약시작기간, 계약종료기간
      startDate: startDate,
      endDate: endDate,
      // 월세계약이라면, 월세금액과 지불일자
      monthly: monthly,
      dueDate: dueDate,
    },
    {
      //C3
      // 보증금, 계약금, 잔금, 잔금 지급일
      deposit: deposit,
      downPayment: downPayment,
      balance: balance,
      balanceDate: balanceDate,
      // 계좌정보 (은행명, 계좌번호, 예금주)
      bank: bank,
      accountNum: accountNum,
      accountHolder: accountHolder,
    },
    {
      //C4
      // 특약사항 (빌트인, 청소비, 직접입력)
      builtIn: builtIn,
      cleaning: cleaning,
      direct: direct,
    },
  ];

  // 맞춤법 검사 작동 여부
  const spellCheck = async (e) => {
    console.log(builtIn);
    try {
      await fetch("http://localhost:3002/spellCheck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          check1: builtIn,
          check2: cleaning,
          check3: direct,
        })
        
        
      })
      .then((response)=>response.json()).then((json)=>{
        console.log("맞춤법 교정 결과 -> ",json);
        setSpellOn1(json.check1);
        setSpellOn2(json.check2);
        setSpellOn3(json.check3);
      })
      
    } catch (error) {
      console.log("맞춤법검사실패");
      console.log(error);

    }
    
  };

  const evRead = (e)=>{
    console.log("라디오버튼눌림");
  }

  // C1에서 입력한 값을 불러와서 업데이트
  const getC1 = (name, updateValue, type) => {
    if (name === "집주인" && type === 0) {
      setLandLordType(updateValue);
    } else if (name === "집주인" && type === 1) {
      setLandLord(updateValue);
    } else if (name === "세입자" && type === 0) {
      setRenterType(updateValue);
    } else if (name === "세입자" && type === 1) {
      setRenter(updateValue);
    }
  };

  // C2에서 입력한 값을 불러와서 업데이트
  const getC2 = (name, updateValue, type) => {
    if (name === "시작날짜" && type === 0) {
      setStartDate(updateValue);
    } else if (name === "끝날짜" && type === 1) {
      setEndDate(updateValue);
    } else if (name === "월세금액" && type === 0) {
      setMonthly(updateValue);
    } else if (name === "지불일" && type === 1) {
      setDueDate(updateValue);
    }
  };

  // C3에서 입력한 값을 불러와서 업데이트
  const getC3 = (name, updateValue) => {
    if (name === "보증금") {
      setDeposit(updateValue);
    } else if (name === "계약금") {
      setDownPayment(updateValue);
    } else if (name === "잔금") {
      setBalance(updateValue);
    } else if (name === "잔금지급일") {
      setBalanceDate(updateValue);
    } else if (name === "은행명") {
      setBank(updateValue);
    } else if (name === "계좌번호") {
      setAccountNum(updateValue);
    } else if (name === "예금주") {
      setAccountHolder(updateValue);
    }
  };

  // C4에서 입력한 값을 불러와서 업데이트
  const getC4 = (name, updateValue) => {
    if (name === "빌트인제품") {
      setBuiltIn(updateValue);
    } else if (name === "청소비") {
      setCleaning(updateValue);
    } else if (name === "직접입력") {
      setDirect(updateValue);
    }
  };

  const [email, setEmail] = useState("");
  
  // 현재 로그인된 유저의 이메일 주소 가져오기
  useEffect(() => {
    const getEmail = async () => {
      const user = await authService.currentUser;
      setEmail(user.email);
    };
    getEmail();
  }, []);

  // DB에 json 형태로 저장하기위한 것임 나중에 추가할꺼 더넣으면됨
  const tempData = {
    landLord,
    landLordType,
    renter,
    renterType,
    startDate,
    endDate,
    monthly,
    dueDate,
    deposit,
    downPayment,
    balance,
    balanceDate,
    bank,
    accountNum,
    accountHolder,
    builtIn,
    cleaning,
    direct
  };
 // PDF 파일을 생성하고 서버에 전송하는 함수
const saveAsPDF = async () => {
  
  const element = document.getElementById("pdf-wrapper"); // PDF로 변환할 요소
  const alertElement = document.querySelector(".alert.scroll"); // 바꿀 요소
    // alertElement가 있을 때만 실행
    if (alertElement) {
      alertElement.style.display = "none"; // 일시적으로 display 속성을 none으로 설정
    }
  const opt = {
    margin: 1,
    filename: "conditions.pdf", // PDF 파일 이름
    image: { type: "png", quality: 0.98 }, // 이미지 파일 확장자를 png로 변경
    html2canvas: { dpi: 192, letterRendering: true},
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  const pdfBlob = await html2pdf().from(element).set(opt).output("blob"); // PDF 파일 생성

  // 이미지 파일 생성
  const canvas = await html2canvas(element , { scale: 0.74 });
  const imgBlob = await new Promise((resolve) =>
    canvas.toBlob(resolve, "image/png", 0.98) // 이미지 파일 확장자를 png로 변경
  );
  // 사용자 입력 받기
  const input = prompt("파일 이름을 입력하세요");
  setEmail(input);

  // FormData 객체 생성
  // JSON.stringify() 함수를 사용하여 tempData를 문자열로 변환
  const tempDataString = JSON.stringify(tempData);
  console.log(tempDataString);
  const formData = new FormData();
  formData.append("email", email); // 이메일 정보 추가
  formData.append("pdf", pdfBlob, `${email}.pdf`); // PDF 파일 추가
  formData.append("image", imgBlob, `${email}.png`); // 이미지 파일 이름 확장자를 png로 변경
  formData.append("user_filename", input); // 사용자가 지정한 파일이름 실제 저장되는 파일이름은 다름
  formData.append("tempDataString", tempDataString); // tempData 추가
  
  // 서버로 전송할 HTTP 요청 생성
  const requestOptions = {
    method: "POST",
    body: formData,
    
  };
  
  // 서버로 HTTP 요청 전송
  fetch("http://localhost:3002/pdfupload", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      alert("파일 저장 성공");
      console.log(data);
      
    })
    .catch((error) => {
      alert("파일 저장 성공");
      console.error(error);
      
    });
    setTimeout(() => {
      if (alertElement) {
        alertElement.style.display = "block";
      }
    }, 1000);
      
      
    

  
};
const updateAsPDF = async () => {
    
  const element = document.getElementById("pdf-wrapper"); // PDF로 변환할 요소
  const alertElement = document.querySelector(".alert.scroll"); // 바꿀 요소
    // alertElement가 있을 때만 실행
    if (alertElement) {
      alertElement.style.display = "none"; // 일시적으로 display 속성을 none으로 설정
    }
  const opt = {
    margin: 1,
    filename: {fileName}, // PDF 파일 이름
    image: { type: "png", quality: 0.98 }, // 이미지 파일 확장자를 png로 변경
    html2canvas: { dpi: 192, letterRendering: true},
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  const pdfBlob = await html2pdf().from(element).set(opt).output("blob"); // PDF 파일 생성

  // 이미지 파일 생성
  const canvas = await html2canvas(element , { scale: 0.74 });
  const imgBlob = await new Promise((resolve) =>
    canvas.toBlob(resolve, "image/png", 0.98) // 이미지 파일 확장자를 png로 변경
  );
  // 사용자 입력 받기
  const input = prompt("파일 이름을 입력하세요");
  setEmail(input);

  // FormData 객체 생성
  // JSON.stringify() 함수를 사용하여 tempData를 문자열로 변환
  const tempDataString = JSON.stringify(tempData);
  console.log(tempDataString);
  const formData = new FormData();
  formData.append("email", email); // 이메일 정보 추가
  formData.append("pdf", pdfBlob, `${fileName}`); // PDF 파일 추가
  formData.append("image", imgBlob, `${fileName.slice(0,-4)}.png`); // 이미지 파일 이름 확장자를 png로 변경
  formData.append("user_filename", input); // 사용자가 지정한 파일이름 실제 저장되는 파일이름은 다름
  formData.append("tempDataString", tempDataString); // tempData 추가
  
  // 서버로 전송할 HTTP 요청 생성
  const requestOptions = {
    method: "POST",
    body: formData,
    
  };
  
  // 서버로 HTTP 요청 전송
  fetch("http://localhost:3002/pdfupdate", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      alert("파일 수정 성공");
      console.log(data);
      
    })
    .catch((error) => {
      alert("파일 수정 성공");
      console.error(error);
      
    });
    setTimeout(() => {
      if (alertElement) {
        alertElement.style.display = "block";
      }
    }, 1000);

}

  // // const [drag, setDrag] = useState("");
  // // setDrag(window.getSelection().getRangeAt(0).toString());

  
  // console.log(drag);


  return (
    <>
      <div id="subWrap" className="bgnone scroll">
        <div className="docuWrap">
          <LogInNav className="pd21 flex_sb bgblue" />

          <div className="content_write">
            <div className="write_wrap">
              <Sidebar
                items={requirements}
                getC1Value={getC1}
                getC2Value={getC2}
                getC3Value={getC3}
                getC4Value={getC4}
              />
              <div className="write_right">
                <div className="document" id="pdf-wrapper">
                  <Document items={requirements} check={spellCheck} spCk1={spellOn1}spCk2={spellOn2}spCk3={spellOn3}/>
                </div>
                <div className="footer">
                  <div className="footer_wrap">
                    <ul>
                      <li>
                        <button className="edit_btn">편집하기</button>
                      </li>
                      <li>
                      {/*myDrive 텝에서 수정하기 버튼으로 이동시 
                      수정하기 버튼이 보여지게 함 */}
                      {fileName !== "" && (
                        <button className="save_btn" onClick={updateAsPDF}>
                          수정하기
                        </button>
                      )}
                      {fileName === "" && (
                        <button className="save_btn" onClick={saveAsPDF}>
                          저장하기
                        </button>
                      )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conditions;
