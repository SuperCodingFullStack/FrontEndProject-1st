import React, { createContext, useState } from "react";

// Context 생성: 애플리케이션의 전역 상태를 관리하기 위한 Context를 생성
export const AppContext = createContext();

// Provider 컴포넌트: 자식 컴포넌트에 Context 값을 제공하는 Provider 컴포넌트
export const AppProvider = ({ children }) => {
  // 로그인 상태를 관리하는 상태 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 드롭다운 메뉴의 열림 상태를 관리하는 상태 변수
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 로그인 상태를 토글하는 함수
  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // 마우스가 들어올 때 드롭다운 메뉴를 열기 위한 함수
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  // 마우스가 나갈 때 드롭다운 메뉴를 닫기 위한 함수
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        toggleLoginStatus,
        isDropdownOpen,
        handleMouseEnter,
        handleMouseLeave,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
