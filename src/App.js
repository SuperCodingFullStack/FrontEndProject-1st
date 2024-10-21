import React from "react";
import "./App.css";
import "./header.css";
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
        <div className="info-bar">
          <div className="info-bar_category">
            <LiaBarsSolid size="30" />
          </div>
          <div className="info-bar_logo">
            <img className="logo11" alt="11번가" src={logo} />
          </div>
          <div className="info-bar_search">
            <IoSearchSharp size="30" />
          </div>
          <div className="info-bar_icons">
            <AiOutlineUser alt="마이" />
            <BsTruck alt="주문/배송현황" />
            <BsCart2 alt="장바구니" />
            <TbSquares alt="최근 본 상품" />
          </div>
        </div>
        <nav className="navigation-bar">
          <div className="navigation-bar_navigations">
            <div>베스트</div>
            <div>쇼킹딜</div>
            <div>슈팅배송</div>
            <div>쿠폰/기획전</div>
            <span>|</span> {/* 구분 기호 */}
            <div>신선식품</div>
            <div>장보기</div>
            <div>9900원샵</div>
            <div>리퍼블리</div>
            <div>T공식대리점</div>
            <span>|</span> {/* 구분 기호 */}
            <div>아마존</div>
          </div>
          <div className="navigation-bar_my">마이 | 바로가기 OFF</div>
        </nav>
      </header>
      <main>메인</main>
      <footer>하단</footer>
    </>
  );
}

export default App;
