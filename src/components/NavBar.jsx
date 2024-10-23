import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillAmazonCircle } from "react-icons/ai";
import { AppContext } from "../AppContext"; // AppContext 가져오기

const NavBar = () => {
  const { isLoggedIn, toggleLoginStatus, userName } = useContext(AppContext); // Context 사용
  const [showNav, setShowNav] = useState(true); // 네비게이션 바 표시 상태
  const [lastScrollY, setLastScrollY] = useState(0); // 마지막 스크롤 Y 좌표

  // 스크롤 이벤트에 따른 네비게이션 바 표시/숨김 처리
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY; // 현재 스크롤 Y 좌표
      if (currentScrollY > lastScrollY) {
        setShowNav(false); // 현재 스크롤이 마지막 스크롤보다 크면 네비게이션 바 숨김
      } else {
        setShowNav(true); // 현재 스크롤이 더 작으면 네비게이션 바 표시
      }
      setLastScrollY(currentScrollY); // 마지막 스크롤 Y 좌표 업데이트
    };

    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 추가
    return () => window.removeEventListener("scroll", handleScroll); // 컴포넌트 언마운트 시 이벤트 리스너 제거
  }, [lastScrollY]);

  // 로그인 상태 변경 시 로그를 출력
  useEffect(() => {
    console.log(
      "로그인 상태:",
      isLoggedIn ? "로그인 됨 (true)" : "로그인 안 됨 (false)"
    );
  }, [isLoggedIn]);

  // 네비게이션 아이템 목록
  const navItems = [
    { name: "베스트", link: "best" },
    { name: "쇼킹딜", link: "shocking-deal" },
    { name: "슈팅배송", link: "shooting-delivery" },
    { name: "쿠폰/기획전", link: "coupons" },
    { name: "신선식품", link: "fresh-food" },
    { name: "장보기", link: "shopping" },
    { name: "9900원샵", link: "9900-shop" },
    { name: "리퍼블리", link: "refurbished" },
    { name: "T공식대리점", link: "official-agent" },
    { name: "아마존", link: "amazon", icon: <AiFillAmazonCircle /> },
  ];

  return (
    <nav
      className={`fixed top-28 left-0 w-full z-40 transition-transform duration-300 overflow-hidden ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between px-4 md:px-16 py-4 items-center bg-white">
        <div className="flex gap-1 flex-nowrap">
          {/* 네비게이션 아이템을 동적으로 생성 */}
          {navItems.map(({ name, link, icon }) => (
            <Link
              key={name} // 각 링크의 고유 키 설정
              to={`/${link}`} // 링크 설정
              className="relative cursor-pointer group whitespace-nowrap"
            >
              <span className="flex items-center px-2 py-1">
                {icon && <span className="mr-1">{icon}</span>}{" "}
                {/* 아이콘이 있을 경우 표시 */}
                <span>{name}</span> {/* 아이템 이름 표시 */}
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-transparent transition-all duration-300 group-hover:bg-red-400 transform translate-y-4"></span>
            </Link>
          ))}
        </div>
        <div
          className="cursor-pointer flex gap-4 h-12 items-center whitespace-nowrap"
          onClick={toggleLoginStatus}
        >
          {/* 로그인 상태에 따른 내용 표시 */}
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="font-bold">
                로그인
              </Link>
              <Link to="/signup" className="font-bold">
                회원가입
              </Link>
              <div className="font-bold">바로가기 OFF</div>
            </>
          ) : (
            <Link to="/my-page" className="font-bold">
              {userName}님 | 바로가기 ON
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
