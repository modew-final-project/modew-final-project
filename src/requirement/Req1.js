import React, { useState } from "react";
import * as C1_Req from '../case/C1.js';


const Req1 = (props) => {

  const [landLordType, setLandLordType] = useState(props.landLordType);
  const [landLord,setLandLord] = useState(props.landLord)
  const [renterType, setRenterType] = useState(props.renterType);
  const [renter, setRenter] = useState(props.renter);

  return (
    <>
      <div className="doc_txt pt10">
        <h4>임대인</h4>
        <p>
          {} : <span>{}</span>(서명 또는 인)
        </p>
        <p>
          주민등록번호 : <span>970201-2571246</span>
        </p>
        <p>
          주소 : <span>광주 동구 동계천로 74 (장동) 2층 204호</span>
        </p>
        <p>
          전화번호 : <span>010-5643-8512</span>
        </p>
      </div>
      <div className="doc_txt">
        <h4>임차인</h4>
        <p>
          {renterType} : <span>{renter}</span>(서명 또는 인)
        </p>
        <p>
          주민등록번호 : <span>970201-2571246</span>
        </p>
        <p>
          주소 : <span>광주 동구 장동 2층 204호</span>
        </p>
        <p>
          전화번호 : <span>010-5105-9721</span>
        </p>
      </div>
    </>
  );
};

export default Req1;
