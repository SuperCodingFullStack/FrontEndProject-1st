import React from "react";

import ISMP from "../img/ISMP-P.png";
import CCM from "../img/ccm.png";
import KSSQI from "../img/KS-SQI.png";
import KCSI from "../img/kcsi.png";
import KOLSA from "../img/kolsa.png";
import OPEN from "../img/open.png";
import KATS from "../img/kats.png";
import SYSTEM from "../img/system.png";
import PCR from "../img/pcr.png";

const Footer = () => {
  return (
    <footer class="l_footer bg-white text-gray-600 py-8  whitespace-nowrap">
      <div class="b_footer_menu">
        <div class="inner container mx-auto px-4">
          <ul class="c_footer_menu_list flex flex-wrap">
            <li class="mr-4 mb-2">
              <a
                href="https://www.11stcorp.com/"
                target="_blank"
                rel="noreferrer"
                class="lk_f_menu hover:underline"
              >
                11번가소개
              </a>
            </li>
            <li class="mr-4 mb-2">
              <a
                href="https://careers.11stcorp.com/home"
                target="_blank"
                rel="noreferrer"
                class="lk_f_menu hover:underline"
              >
                채용정보
              </a>
            </li>
            <li class="mr-4 mb-2">
              <a
                href="https://www.11st.co.kr/annc/AnncMainPreview.tmall?method=getProvision&amp;anncCd=01"
                target="_blank"
                rel="noreferrer"
                class="lk_f_menu hover:underline"
              >
                이용약관
              </a>
            </li>
            <li class="mr-4 mb-2">
              <a
                href="https://pay-auth.sk-pay.co.kr/pages/termsviewer?category=service-agreement&amp;v=true"
                target="_blank"
                rel="noreferrer"
                class="lk_f_menu hover:underline"
              >
                전자금융거래약관
              </a>
            </li>
            <li class="mr-4 mb-2">
              <a
                href="http://privacy.11st.co.kr/"
                target="_blank"
                rel="noreferrer"
                class="lk_f_menu hover:underline font-bold"
              >
                개인정보처리방침
              </a>
            </li>
            <li class="mr-4 mb-2">
              <a
                href="https://soffice.11st.co.kr/view/intro"
                target="_blank"
                rel="noreferrer"
                class="lk_f_menu hover:underline"
              >
                입점신청
              </a>
            </li>
            <li class="mr-4 mb-2">
              <a
                href="https://openapi.11st.co.kr/openapi/OpenApiIndex.tmall"
                target="_blank"
                rel="noreferrer"
                class="lk_f_menu hover:underline"
              >
                Open API
              </a>
            </li>
            <li class="mr-4 mb-2">
              <a
                href="https://ads.11st.co.kr"
                target="_blank"
                rel="noreferrer"
                class="lk_f_menu hover:underline font-bold"
              >
                광고안내
              </a>
            </li>
            <li class="mr-4 mb-2">
              <a
                href="https://www.11st.co.kr/commons/CommonAbout.tmall?method=serviceMap"
                target="_blank"
                rel="noreferrer"
                class="lk_f_menu hover:underline"
              >
                서비스맵
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="c_footer_info container mx-auto px-4 mt-8">
        <div class="about mb-4">
          <h3 class="font-bold mb-4">
            상호명 및 호스팅 서비스 제공 : 십일번가(주)
          </h3>
          <p class="text-sm">
            대표이사 : 하형일, 안정은, 주소: 경기도 광명시 신기로 20 (일직동,
            유플래닛 타워), Tel: 1599-0110
          </p>
          <p class="text-sm">
            사업자등록번호 : 815-81-01244, 통신판매업신고 :
            2024-경기광명-0910사업자정보확인
          </p>
        </div>
        <p class="copyright text-xs  font-bold">
          11번가(주)는 통신판매중개자로서 오픈마켓 11번가의 거래당사자가 아니며,
          입점판매자가 등록한 상품정보 및 거래에 대해 11번가(주)는 일체 책임을
          지지 않습니다.
        </p>
        <p class="text-xs mb-8">
          Copyright © 2018 11Street Co.,Ltd. All Rights Reserved.
        </p>
        <div className="flex">
          <div className="mr-4">
            <img src={ISMP} alt="ISMP-P" className="w-16 h-10 object-contain" />
          </div>
          <div className="mr-4">
            <img src={CCM} alt="CCM" className="w-16 h-8 object-contain" />
          </div>
          <div className="mr-4">
            <img src={KSSQI} alt="KSSQI" className="w-16 h-8 object-contain" />
          </div>
          <div className="mr-4">
            <img src={KCSI} alt="KCSI" className="w-16 h-8 object-contain" />
          </div>
          <div className="mr-4">
            <img src={KOLSA} alt="KOLSA" className="w-16 h-10 object-contain" />
          </div>
          <div className="mr-4">
            <img src={OPEN} alt="OPEN" className="w-16 h-10 object-contain" />
          </div>
          <div className="mr-4">
            <img src={KATS} alt="KATS" className="w-16 h-10 object-contain" />
          </div>
          <div className="mr-4">
            <img
              src={SYSTEM}
              alt="SYSTEM"
              className="w-16 h-10 object-contain"
            />
          </div>
          <div className="mr-4">
            <img src={PCR} alt="PCR" className="w-16 h-10 object-contain" />
          </div>
        </div>
      </div>
      <div class="c_footer_award container mx-auto px-4 mt-8 flex flex-wrap"></div>
    </footer>
  );
};

export default Footer;
