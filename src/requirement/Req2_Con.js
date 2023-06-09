import React from "react";

const Req2_Con = (props) => {
  return (
    <div
      style={{
        display:
          props.startDate === "" || props.endDate === "" ? "none" : "block",
      }}
    >
      <div className="doc_txt">
        <h4>제4조(용도변경 및 전대 등)</h4>
        <p>
          임차인은 임대인의 동의 없이 위 부동산의 용도나 구조를 변경하거나 전대
          • 임차권 양도 또는 담보제공을 하지 못하며 임대차 목적 이외의 용도로
          사용할 수 없다.
        </p>
      </div>
      <div className="doc_txt">
        <h4>제5조(계약의 해지)</h4>
        <p>
          임차인의 차임연체액이 2기의 차임액에 달하거나 본 계약의 '용도변경 및
          전대 등' 조항을 위반하였을 때 임대인은 즉시 본 계약을 해지할 수 있다.
        </p>
      </div>
      <div className="doc_txt">
        <h4>제6조(계약의 종료)</h4>
        <p>
          임대차계약이 종료된 경우에 임차인은 위 부동산을 원상으로 회복하여
          임대인에게 반환한다. 이러한 경우 임대인은 보증금을 임차인에게
          반환하고, 연체 임대료 또는 손해배상금이 있을 때는 이들을 제하고 그
          잔액을 반환한다.
        </p>
      </div>
      <div className="doc_txt">
        <h4>제7조(계약의 해제)</h4>
        <p>
          임차인이 임대인에게 중도금(중도금이 없을 때는 잔금)을 지불하기 전까지,
          임대인은 계약금의 배액을 상환하고, 임차인은 계약금을 포기하고 본
          계약을 해제할 수 있다.
        </p>
      </div>
      <div className="doc_txt">
        <h4>제8조(채무불이행과 손해배상)</h4>
        <p>
          임대인 또는 임차인이 본 계약상의 내용에 대하여 불이행이 있을 경우 그
          상대방은 불이행한 자에 대하여 서면으로 최고하고 계약을 해제할 수 있다.
          그리고 계약 당사자는 계약해제에 따른 손해배상을 각각 상대방에 대하여
          청구할 수 있다.
        </p>
      </div>
    </div>
  );
};

export default Req2_Con;
