import React, { createContext, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  // 로그인 상태를 관리하는 상태 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 드롭다운 메뉴의 열림 상태를 관리하는 상태 변수
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // 드롭다운 ref, DOM요소 감싸기
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  // 자동 스와이프 상태 관리하는 상태변수
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 로그인 상태를 토글하는 함수
  const toggleLoginStatus = () => {
    if (isLoggedIn) {
      // 로그인 상태면
      setIsLoggedIn(false); // 로그아웃 상태로 변경
      navigate("/"); // 로그아웃 후 기본 페이지로 이동
    } else {
      setIsLoggedIn(true);
    }
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

  // 자동 스와이프 토글 함수
  const toggleAutoSwipe = () => {
    setIsAutoPlaying((prev) => !prev); //상태 토글
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        toggleLoginStatus,
        isDropdownOpen,
        handleMouseEnter,
        dropdownRef,
        isAutoPlaying,
        toggleAutoSwipe,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
