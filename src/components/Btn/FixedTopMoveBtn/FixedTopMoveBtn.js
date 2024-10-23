import React from "react";
import "./FixedTopMoveBtn.css";
const FixedTopMoveBtn = () => {
  // 페이지를 최상단으로 스크롤한다.
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // 부드럽게 스크롤
      behavior: "auto", // 그냥 빠르게 순간이동
    });
  };
  return (
    <div>
      <button class="topMoveBtnSB" onClick={ScrollToTop}>
        ↑
      </button>
    </div>
  );
};

export default FixedTopMoveBtn;
