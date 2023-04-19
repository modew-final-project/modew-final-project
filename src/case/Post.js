import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Post = () => {
    
  const [fullAddress, setFullAddress] = useState("");

  const complete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
  
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
  
    setFullAddress(fullAddress);
    console.log(fullAddress);
    
    if (window.opener && !window.opener.closed && window.name === "C5") {
        window.opener.postMessage({ type: "updateFullAddress05", fullAddress }, "*");
        window.close();
      }
    if (window.opener && !window.opener.closed && window.name === "C6") {
      window.opener.postMessage({ type: "updateFullAddress06", fullAddress }, "*");
      window.close();
    }
    if (window.opener && !window.opener.closed && window.name === "C7") {
        window.opener.postMessage({ type: "updateFullAddress07", fullAddress }, "*");
        window.close();
      }
  };
  

  return (
    <div>
      <DaumPostcode className="postmodal" autoClose onComplete={complete} />
    </div>
  );
};

export default Post;
