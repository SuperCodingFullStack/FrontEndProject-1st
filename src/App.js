import React from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { TbSquares } from "react-icons/tb";

import logo from "./img/logo.png";

function App() {
  return (
    <>
      <header>
        <div className="flex justify-between items-center p-8 border-b border-gray-300">
          <div className="rounded-full border border-gray-200 p-4 w-8 h-8 flex items-center justify-center cursor-pointer">
            <LiaBarsSolid size="30" />
          </div>
          <div className="w-20">
            <img className="cursor-pointer" alt="11번가" src={logo} />
          </div>
          <div className="bg-gradient-to-br from-red-600 to-pink-500 text-white flex items-center justify-center rounded-full p-2 w-8 h-8 cursor-pointer">
            <IoSearchSharp size="30" />
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <AiOutlineUser />
            </div>
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <BsTruck />
            </div>
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <BsCart2 />
            </div>
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <TbSquares />
            </div>
          </div>
        </div>
        <nav className="flex justify-between items-center p-4">
          <div className="flex gap-4 flex-wrap">
            <div className="cursor-pointer hover:text-red-600">베스트</div>
            <div className="cursor-pointer hover:text-red-600">쇼킹딜</div>
            <div className="cursor-pointer hover:text-red-600">슈팅배송</div>
            <div className="cursor-pointer hover:text-red-600">쿠폰/기획전</div>
            <span>|</span>
            <div className="cursor-pointer hover:text-red-600">신선식품</div>
            <div className="cursor-pointer hover:text-red-600">장보기</div>
            <div className="cursor-pointer hover:text-red-600">9900원샵</div>
            <div className="cursor-pointer hover:text-red-600">리퍼블리</div>
            <div className="cursor-pointer hover:text-red-600">T공식대리점</div>
            <span>|</span>
            <div className="cursor-pointer hover:text-red-600">아마존</div>
          </div>
          <div className="cursor-pointer">마이 | 바로가기 OFF</div>
        </nav>
      </header>
      <main>메인</main>
      <footer>하단</footer>
    </>
  );
}

export default App;
