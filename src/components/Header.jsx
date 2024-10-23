import React, { useContext, useState } from "react";
import { LiaBarsSolid } from "react-icons/lia"; // 아이콘 가져오기
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BsTruck, BsCart2 } from "react-icons/bs";
import { TbSquares } from "react-icons/tb";
import { AppContext } from "../AppContext"; // Context 가져오기
import logo from "../img/logo.png";
import NavBar from "./NavBar";

const Header = () => {
  const {
    // AppContext에서 로그인 상태 및 함수 가져오기
    isLoggedIn,
    toggleLoginStatus,
    isDropdownOpen,
    handleMouseEnter,
    dropdownRef,
  } = useContext(AppContext);

  // 검색 옵션 상태 관리
  const [selectOptions, setSelectedOption] = useState("통합검색");

  // 검색 옵션이 변경될 때 호출되는 함수
  const optionSelectedChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
        {/* 헤더의 기본 스타일 및 고정 위치 설정 */}
        <div className="flex justify-between items-center px-4 md:px-16 py-4 border-b border-gray-300">
          {/* 메뉴 버튼 */}
          <div className="rounded-full border border-gray-200 p-4 flex items-center justify-center cursor-pointer mr-6">
            <LiaBarsSolid size="35" />
          </div>
          {/* 로고 */}
          <div className="flex-shrink-0 w-24 mr-2">
            <a href="http://localhost:3000/">
              <img className="cursor-pointer" alt="11번가로고" src={logo} />
            </a>
          </div>
          {/* 검색바 */}
          <div className="flex items-center flex-grow mx-2">
            <div className="p-4">
              <div className="flex items-center border rounded-full p-1 bg-white flex-grow">
                <select
                  className="border-none rounded-full p-1 mx-1 text-black"
                  value={selectOptions}
                  onChange={optionSelectedChange} // 검색 옵션 변경 핸들러
                >
                  <option value="통합검색">통합검색</option>
                  <option value="쇼킹딜">쇼킹딜</option>
                  <option value="가격비교">가격비교</option>
                  <option value="아마존">아마존</option>
                </select>
                <input
                  type="text"
                  placeholder="올 겨울 패피의 킥!은 short 패딩"
                  className="border-none rounded-full p-1 mx-1 w-80"
                />
                <div className="bg-gradient-to-br from-[#FF1B3F] to-[#fd18ec] text-white flex items-center justify-center rounded-full p-2 w-10 h-10 cursor-pointer">
                  <IoSearchSharp size="32" className="w-8 h-8" />{" "}
                  {/* 검색 아이콘 */}
                </div>
              </div>
            </div>
          </div>

          <div className="relative" ref={dropdownRef}>
            <div className="flex gap-2">
              <div
                className="w-14 h-14 hover:text-red-600 flex items-center justify-center cursor-pointer mx-2"
                onMouseEnter={handleMouseEnter} // 마우스가 올라갈 때 드롭다운 열기
              >
                <AiOutlineUser size="40" /> {/* 사용자 아이콘 */}
              </div>
            </div>
            {/* 드롭다운 메뉴 */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:text-red-600 hover:bg-gray-100 cursor-pointer">
                    나의 쿠폰
                  </li>
                  <li className="px-4 py-2 hover:text-red-600 hover:bg-gray-100 cursor-pointer">
                    주문/배송조회
                  </li>
                  <li className="px-4 py-2 hover:text-red-600 hover:bg-gray-100 cursor-pointer">
                    취소/반품/교환
                  </li>
                  <li className="px-4 py-2 hover:text-red-600 hover:bg-gray-100 cursor-pointer">
                    고객센터
                  </li>
                  <li className="px-4 py-2 hover:text-red-600 hover:bg-gray-100 cursor-pointer">
                    회원정보
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* 배송 아이콘 */}
          <div className="w-14 h-14 hover:text-red-600 flex items-center justify-center cursor-pointer mx-2">
            <BsTruck size="40" />
          </div>
          {/* 장바구니 아이콘 */}
          <div className="w-14 h-14 hover:text-red-600 flex items-center justify-center cursor-pointer mx-2">
            <BsCart2 size="40" />
          </div>
          {/* 추가 아이콘 */}
          <div className="w-14 h-14 hover:text-red-600 flex items-center justify-center cursor-pointer mx-2">
            <TbSquares size="40" />
          </div>
        </div>
      </header>
      <NavBar toggleLoginStatus={toggleLoginStatus} isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Header;
