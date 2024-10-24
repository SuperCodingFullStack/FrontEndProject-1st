import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./HotFocus.css";
import { Navigation } from "swiper/modules";
import products from "./Products"; // 상품 데이터
import { useState } from "react";

// 상품 데이터를 무작위로 섞는 함수
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const shuffledProducts = shuffleArray(products);

export default function HotFocus() {
  // 마우스를 올려놨을 때 사진 확대
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className=" bg-custom-gray">
      <div className=" p-[50px]">
        {/* 섹션 제목 */}
        <h2 className="text-[23px] font-extrabold text-black mb-3">
          시선 집중
        </h2>

        {/* Swiper로 상품 넘기는 기능 구현 */}
        <Swiper
          navigation={true} // Swiper 내비게이션 활성화
          modules={[Navigation]}
          slidesPerView={3} // 한 번에 보여줄 상품 개수
          spaceBetween={20} // 상품 사이 간격
          slidesPerGroup={3} // 한 번에 넘길 슬라이드 개수
          loop={true} // 무한 루프
          centeredSlides={true}
        >
          {shuffledProducts.map((product) => (
            <SwiperSlide
              key={product.id}
              className="hover:shadow-xl transition-shadow"
            >
              {/* 상품 상세정보 박스 */}
              {/* 마우스 올려놓으면 사진 확대 */}
              <div
                className=" border h-68vh bg-white hover:shadow-xl transition-shadow "
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* 상품 이미지 */}
                <div className=" aspect-h-1 aspect-w-2 overflow-hidden transition-transform ease-in-out transform">
                  <img
                    alt={product.mainImageAlt}
                    src={product.mainImageSrc}
                    className={`h-full w-full object-center object-cover transition-transform ease-in-out ${
                      hoveredId === product.id ? "scale-105" : ""
                    }`}
                  />
                </div>

                {/* 상품 상세정보 */}
                <div className=" ml-3 mr-3 ">
                  {/* 상품 태그 */}
                  <p className=" bg-sale-color p-[2px] mb-2 border border-sale-btn text-[10px] text-sale-btn inline-block">
                    ↓즉시할인중
                  </p>

                  {/* 상품 상세정보-상품명 */}
                  <div>
                    <h3 className="text-sm text-black font-semibold">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                  </div>

                  {/* 상품 할인율  */}
                  <div className=" flex gap-x-2 items-center">
                    {product.discountPercent && (
                      <p className="text-[20px] font-medium text-red-500">
                        {product.discountPercent}
                        <span className="text-[14px] font-medium text-red-500">
                          %
                        </span>
                      </p>
                    )}

                    {/* 상품 가격 */}
                    <div className="flex items-baseline">
                      <p className="text-[20px] font-black text-gray-900">
                        {product.price}
                      </p>
                      <span className="text-[12px]">원~</span>
                    </div>
                    {product.originalPrice && (
                      <p className="text-sm font-medium text-custom-light-gray line-through">
                        {product.originalPrice}원
                      </p>
                    )}
                  </div>

                  {/* 상품 리뷰 */}
                  <div className="flex gap-x-1 items-baseline">
                    <p className="text-[12px] text-yellow-400">
                      {"★".repeat(product.review)}
                      {"☆".repeat(5 - product.review)}
                    </p>
                    <p className="text-[10px] text-gray-600">
                      {product.reviewCount}
                    </p>
                  </div>

                  {/* 카드 적립율 및 포인트 */}
                  <div className="flex mb-1 items-baseline">
                    {product.cardDiscountRate && (
                      <div className="flex items-baseline mr-3">
                        <p className="text-[11px] text-gray-700">카드</p>
                        <p className="text-blue-600 text-[11px]">
                          {product.cardDiscountRate}
                        </p>
                        <p className="text-[11px] text-gray-700">할인</p>
                        {/* <span className="text-gray-500">·</span> */}
                      </div>
                    )}
                    <p className="text-[11px] text-gray-700">11pay 최대 </p>
                    <p className="text-blue-600 text-[11px]">{product.point}</p>
                    <p className="text-[11px] text-gray-700"> 적립</p>
                  </div>

                  {/* 쿠폰 정보 */}
                  {product.coupon ? (
                    <div className="border-t border-gray-200 flex">
                      <div className="items-baseline mb-2">
                        <img
                          alt={product.couponImageAlt}
                          src={product.couponImageSrc}
                          className="object-center w-6 h-5 mt-2"
                        />
                      </div>
                      <div className="items-baseline mt-1">
                        <button className="text-[11px] text-gray-600 ml-2">
                          {product.couponName} ﹥
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[40px]"></div>
                  )}
                </div>

                {/* 배송 날짜 및 판매 개수 */}
                <div className="border-t border-gray-200 mx-3 mb-2"></div>
                <div className="flex justify-between items-baseline mx-4 mb-4">
                  {product.freeDeliver ? (
                    <div className="flex items-baseline pb-2">
                      <p className="text-[11px] text-gray-600 ">무료배송</p>
                      {product.deliverDate && (
                        <>
                          <p className="text-blue-600 text-[11px] ml-3">
                            {product.deliverDate}
                          </p>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="w-[80px]"></div>
                  )}

                  {product.purchaseNum && (
                    <p className="text-[11px] text-gray-600 mt-1">
                      {product.purchaseNum}개 구매
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
