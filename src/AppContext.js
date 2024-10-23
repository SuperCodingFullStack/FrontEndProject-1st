import React, { createContext, useRef, useState, useEffect } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  // 로그인 상태를 관리하는 상태 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 드롭다운 메뉴의 열림 상태를 관리하는 상태 변수
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // 드롭다운 ref, DOM요소 감싸기
  const dropdownRef = useRef(null);

  // 로그인 상태를 토글하는 함수
  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // 마우스가 들어올 때 드롭다운 메뉴를 열기 위한 함수
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  // 외부 영역 클릭 시 드롭다운 메뉴 닫기
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  // 외부 클릭 감지하는 useEffect
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // 클릭 이벤트 추가
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // 컴포넌트 언마운트 시 제거
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        toggleLoginStatus,
        isDropdownOpen,
        handleMouseEnter,
        dropdownRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
