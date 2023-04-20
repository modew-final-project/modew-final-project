import React, { useState, useEffect } from "react";
import searchLogo from "../images/main_search.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Document from "./Document";
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import { authService, dbService } from "../fbase";

const Conditions = (props) => {
  const onLogOutClick = () => authService.signOut();

  //Mydrive에서 수정하기 눌렀을 경우 데이터 불러오기
  // useEffect(() => {
  //   dbService.collection("docu1").onSnapshot((snapshot) => {
  //     const newArray = snapshot.docs.map((document) => ({
  //       id: document.id,
  //       ...document.data(),
  //     }));
  //     console.log(newArray[0].landLord);
  //   });
  // }, []);

  const location = useLocation();
  const tempData1 = location.state?.tempData1 ?? "";
  const fileName = location.state?.fileName ?? "";

  // console.log("[Condition.js]",location);
  const [c1event, setC1event] = useState("");

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

  //C5 & requirement[4]
  const [adress, setAdress] = useState("");
  const [extra, setExtra] = useState("");
  const [option1, setOption1] = useState("");
  const [option1Size, setOption1Size] = useState("");
  const [option2, setOption2] = useState("");
  const [option2Size, setOption2Size] = useState("");
  const [option3, setOption3] = useState("");
  const [option3Size, setOption3Size] = useState("");

  //C6 & requirement[5]
  const [landLordSSN, setLandLordSSN] = useState("");
  const [landLordNum, setLandLordNum] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [extraAddress, setExtraAddress] = useState("");

  //C7 & requirement[6]
  const [renterSSN, setRenterSSN] = useState("");
  const [renterNum, setRenterNum] = useState("");
  const [fullAddress2, setFullAddress2] = useState("");
  const [extraAddress2, setExtraAddress2] = useState("");

  useEffect(() => {
    if (tempData1 !== "") {
      // 밑에 tempData json 형태로 DB에 저장한거 불러온거임
      // 나중에 추가할거있으면 여기도 같이 바꿔줘야함
      const temp = JSON.parse(tempData1);
      // C1 & requirement[0]
      setLandLord(temp.landLord);
      setLandLordType(temp.landLordType);
      setRenter(temp.renter);
      setRenterType(temp.renterType);

      // C2 & requirement[1]
      setStartDate(temp.startDate);
      setEndDate(temp.endDate);
      setMonthly(temp.monthly);
      setDueDate(temp.dueDate);

      // C3 & requirement[2]
      setDeposit(temp.deposit);
      setDownPayment(temp.downPayment);
      setBalance(temp.balance);
      setBalanceDate(temp.balanceDate);
      setBank(temp.bank);
      setAccountNum(temp.accountNum);
      setAccountHolder(temp.accountHolder);

      // C4 & requirement[3]
      setBuiltIn(temp.builtIn);
      setCleaning(temp.cleaning);
      setDirect(temp.direct);

      //C5 & requirement[4]
      setExtra(temp.extra);
      setAdress(temp.adress);
      setOption1(temp.option1);
      setOption1Size(temp.option1Size);
      setOption2(temp.option2);
      setOption2Size(temp.option2Size);
      setOption3(temp.option3);
      setOption3Size(temp.option3Size);

      //C6 & requirement[5]
      setLandLordSSN(temp.landLordSSN);
      setLandLordNum(temp.landLordNum);
      setFullAddress(temp.fullAddress);
      setExtraAddress(temp.extraAddress);

      //C7 & requirement[6]
      setRenterSSN(temp.renterSSN);
      setRenterNum(temp.renterNum);
      setFullAddress2(temp.fullAddress2);
      setExtraAddress2(temp.extraAddress2);
    }
  }, [tempData1]);

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
    {
      //C5
      // 주소,추가주소,옵션 1,2,3
      adress: adress,
      extra: extra,
      option1: option1,
      option1Size: option1Size,
      option2: option2,
      option2Size: option2Size,
      option3: option3,
      option3Size: option3Size,
    },
    {
      //C6
      // 주소,추가주소,주민번호,전화번호
      fullAddress: fullAddress,
      extraAddress: extraAddress,
      landLordNum: landLordNum,
      landLordSSN: landLordSSN,
    },
    {
      //C7
      // 주소,추가주소,주민번호, 전화번호
      fullAddress2: fullAddress2,
      extraAddress2: extraAddress2,
      renterNum: renterNum,
      renterSSN: renterSSN,
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
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("맞춤법 교정 결과 -> ", json);
          setSpellOn1(json.check1);
          setSpellOn2(json.check2);
          setSpellOn3(json.check3);
        });
    } catch (error) {
      console.log("맞춤법검사실패");
      console.log(error);
    }
  };

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

  // C5에서 입력한 값을 불러와서 업데이트
  const getC5 = (name, updateValue) => {
    if (name === "기본주소") {
      setAdress(updateValue);
    } else if (name === "상세주소") {
      setExtra(updateValue);
    } else if (name === "토지용도텍스트") {
      setOption1(updateValue);
    } else if (name === "토지용도면적") {
      setOption1Size(updateValue);
    } else if (name === "구조용도") {
      setOption2(updateValue);
    } else if (name === "구조용도면적") {
      setOption2Size(updateValue);
    } else if (name === "임대할부분") {
      setOption3(updateValue);
    } else if (name === "임대할부분면적") {
      setOption3Size(updateValue);
    }
  };

  // C6에서 입력한 값을 불러와서 업데이트
  const getC6 = (name, updateValue) => {
    if (name === "집주인주민등록번호") {
      setLandLordSSN(updateValue);
    } else if (name === "집주인주소") {
      setFullAddress(updateValue);
    } else if (name === "집주인상세주소") {
      setExtraAddress(updateValue);
    } else if (name === "집주인번호") {
      setLandLordNum(updateValue);
    }
  };

  // C7에서 입력한 값을 불러와서 업데이트
  const getC7 = (name, updateValue) => {
    if (name === "세입자주민등록번호") {
      setRenterSSN(updateValue);
    } else if (name === "세입자주소") {
      setFullAddress2(updateValue);
    } else if (name === "세입자상세주소") {
      setExtraAddress2(updateValue);
    } else if (name === "세입자번호") {
      setRenterNum(updateValue);
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
    direct,
    adress,
    extra,
    option1,
    option1Size,
    option2,
    option2Size,
    option3,
    option3Size,
    landLordNum,
    landLordSSN,
    renterNum,
    renterSSN,
    fullAddress,
    fullAddress2,
    extraAddress,
    extraAddress2,
  };

  // Firestore DB에 저장할 문서작성 시 입력 데이터
  // 로그인한 유저의 이메일 주소값을 포함한 데이터
  const updateFDB = async (e) => {
    e.preventDefault();
    await dbService.collection("docu1").update({
      email: email,
      landLord: landLord,
      landLordType: landLordType,
      renter: renter,
      renterType: renterType,
      startDate: startDate,
      endDate: endDate,
      monthly: monthly,
      dueDate: dueDate,
      deposit: deposit,
      downPayment: downPayment,
      balance: balance,
      balanceDate: balanceDate,
      bank: bank,
      accountNum: accountNum,
      accountHolder: accountHolder,
      builtIn: builtIn,
      cleaning: cleaning,
      direct: direct,
      adress: adress,
      extra: extra,
      option1: option1,
      option1Size: option1Size,
      option2: option2,
      option2Size: option2Size,
      option3: option3,
      option3Size: option3Size,
      landLordNum: landLordNum,
      landLordSSN: landLordSSN,
      renterNum: renterNum,
      renterSSN: renterSSN,
      fullAddress: fullAddress,
      fullAddress2: fullAddress2,
      extraAddress: extraAddress,
      extraAddress2: extraAddress2,
      createdAt: Date.now(),
    });
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
      html2canvas: { dpi: 192, letterRendering: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    const pdfBlob = await html2pdf().from(element).set(opt).output("blob"); // PDF 파일 생성

    // 이미지 파일 생성
    const canvas = await html2canvas(element, { scale: 0.74 });
    const imgBlob = await new Promise(
      (resolve) => canvas.toBlob(resolve, "image/png", 0.98) // 이미지 파일 확장자를 png로 변경
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
      filename: { fileName }, // PDF 파일 이름
      image: { type: "png", quality: 0.98 }, // 이미지 파일 확장자를 png로 변경
      html2canvas: { dpi: 192, letterRendering: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    const pdfBlob = await html2pdf().from(element).set(opt).output("blob"); // PDF 파일 생성

    // 이미지 파일 생성
    const canvas = await html2canvas(element, { scale: 0.74 });
    const imgBlob = await new Promise(
      (resolve) => canvas.toBlob(resolve, "image/png", 0.98) // 이미지 파일 확장자를 png로 변경
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
    formData.append("image", imgBlob, `${fileName.slice(0, -4)}.png`); // 이미지 파일 이름 확장자를 png로 변경
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
  };

  // 사용자가 저장하기 버튼 눌렀을 시 두개의 함수를 실행시키기 위해 하나로 묶음
  // saveFDB : 파이어스토어 저장
  // saveAsPDF : PDF화 하여 저장
  const saveData = (e) => {
    updateFDB(e);
    saveAsPDF();
  };

  return (
    <>
      <div id="subWrap" className="bgnone scroll">
        <div className="docuWrap">
          <div class="header_right pd21 flex_sb bgblue">
            <h3>부동산 계약서(임대차)</h3>
            <ul>
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="" onClick={onLogOutClick}>
                  LogOut
                </Link>
              </li>
              <li>
                <Link to="/UserInfo">My Page</Link>
              </li>
              <li>
                <Link to="/MyDrive">My Drive</Link>
              </li>
              <li>
                <img src="" />
                <Link to="">
                  <img src={searchLogo} alt="main_search.png" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="content_write">
            <div className="write_wrap">
              <Sidebar
                items={requirements}
                getC1Value={getC1}
                getC2Value={getC2}
                getC3Value={getC3}
                getC4Value={getC4}
                getC5Value={getC5}
                getC6Value={getC6}
                getC7Value={getC7}
              />
              <div className="hide_menu">
                <ul className="flex_start">
                  <li>
                    <Link to="/Example" className="see_btn">
                      미리보기
                    </Link >
                  </li>
                  <li>
                    <a href="" className="write_btn">
                      작성하기
                    </a>
                  </li>
                  <li>
                    <a href="" className="save_btn">
                      저장하기
                    </a>
                  </li>
                </ul>
              </div>
              <div className="write_right">
                <div className="document" id="pdf-wrapper">
                  <Document
                    items={requirements}
                    check={spellCheck}
                    spCk1={spellOn1}
                    spCk2={spellOn2}
                    spCk3={spellOn3}
                  />
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
                          <button
                            className="save_btn"
                            onClick={(e) => saveData(e)}
                          >
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
