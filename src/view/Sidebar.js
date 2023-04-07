import React from "react";
import C1 from "../case/C1";
import C2 from "../case/C2";
import C3 from "../case/C3";
import C4 from "../case/C4";
import C5 from "../case/C5";
import C6 from "../case/C6";
import C7 from "../case/C7";
const Sidebar = (props) => {
  return (
    <>
      <div className="write_left scroll">
        <div className="Autodoc">
          <C1
            landLord={props.items[0].landLord}
            landLordType={props.items[0].landLordType}
            renter={props.items[0].renter}
            renterType={props.items[0].renterType}
            getC1Value={props.getC1Value}
          />
          <C2
            startDate={props.items[1].startDate}
            endDate={props.items[1].endDate}
            monthly={props.items[1].monthly}
            dueDate={props.items[1].dueDate}
            getC2Value={props.getC2Value}
          />
          <C3 
          deposit={props.items[2].deposit}
          downPayment={props.items[2].downPayment}
          balance={props.items[2].balance}
          balanceDate={props.items[2].balanceDate}
          bank={props.items[2].bank}
          accountNum={props.items[2].accountNum}
          accountHolder={props.items[2].accountHolder}
          getC3Value={props.getC3Value}
          />
          <C4 
          builtIn={props.items[3].builtIn}
          cleaning={props.items[3].cleaning}
          direct={props.items[3].direct}
          getC4Value={props.getC4Value}
          />
          <C5 />
          <C6 />
          <C7 />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
