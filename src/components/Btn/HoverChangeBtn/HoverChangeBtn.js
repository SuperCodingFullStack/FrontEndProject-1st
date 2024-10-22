import React from "react";
import "./HoverChangeBtn.css";
import PaddedImage from "../../../assets/images/PaddedImage.png"; // 이미지 파일을 import
const HoverChangeBtn = () => {
  function showAlert() {
    alert("현재 구현중입니다");
  }
  return (
    <div class="hoverChangeBtn" onClick={showAlert}>
      <div class="hoverContent">몽클레어 클로에Khloe 여성</div>
      <img
        class="hoverImg"
        src={PaddedImage} // import한 이미지 사용
        alt="제품이미지"
      />
    </div>
  );
};

export default HoverChangeBtn;
