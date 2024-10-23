import React from "react";
import { useParams } from "react-router-dom";

const NavPage = () => {
  const { name } = useParams(); // URL에서 동적 경로 파라미터를 가져옴

  return (
    <div className="flex items-center justify-center h-screen">
      <h1>{name} 페이지는 현재 준비 중입니다.</h1>
    </div>
  );
};

export default NavPage;
