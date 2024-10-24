import "swiper/css";
import "swiper/css/navigation";
import React, { useEffect, useState } from "react";
import products from "./Products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const TimeDeal = () => {
  const [time, setTime] = useState(3600); // 남은 시간을 초 단위로 설정(1시간)
  const [shuffledProducts, setShuffledProducts] = useState([]);

  // 남은 시간을 줄이는 타이머 함수
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 해제
  }, []);

  // 시간을 HH:MM:SS 형식으로 변환하는 함수
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  // 상품 데이터를 무작위로 섞는 함수
  useEffect(() => {
    const shuffleArray = (array) => {
      let shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    };

    // 처음에만 섞은 상품 배열을 상태로 설정,
    // 설정 안할시, 초가 바뀔때마다 상품이 섞여서 계속 바뀌는 현상 발생
    setShuffledProducts(shuffleArray(products));
  }, []);

  // 마우스를 올려놨을 때 사진 확대
  const [hoveredId, setHoveredId] = useState(null);

  return (
    // 전체 타임딜 박스
    <div className="p-6 bg-white m-10">
      {/* 섹션 제목 */}
      <div className="flex justify-between">
        <h2 className="text-[23px] font-extrabold text-black">타임딜</h2>
        <div>
          <button className="text-[15px] text-gray-600 hover:underline">
            더보기
          </button>
          <span className="text-[15px] text-gray-600 ml-[2px]">﹥</span>
        </div>
      </div>

      {/* Swiper로 상품 넘기는 기능 구현 */}
      <Swiper
        navigation={true} // Swiper 내비게이션 활성화
        modules={[Navigation]}
        slidesPerView={1} // 한 번에 보여줄 상품 개수
        spaceBetween={0} // 상품 사이의 간격
        loop={true} // 무한 루프
        centeredSlides={true}
      >
        {shuffledProducts.map((product) => (
          <SwiperSlide
            key={product.id}
            className=" hover:shadow-xl transition-shadow"
          >
            {/* 상품 상세정보 박스 */}
            <div className="flex bg-white mt-2">
              {/* 상품 이미지 */}
              <div
                className="w-1/2 aspect-h-1 aspect-w-4 overflow-hidden border border-gray-300"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  alt={product.mainImageAlt}
                  src={product.mainImageSrc}
                  className={`h-full w-full object-center object-cover transition-transform ease-in-out ${
                    hoveredId === product.id ? "scale-105" : ""
                  }`}
                />
              </div>

              {/* 상품 상세정보 */}
              <div className="flex flex-col justify-between w-1/2 border-t border-b ml-[20px]">
                {/* 타이머 */}
                <div>
                  <p className="text-[25px] text-timer-red font-extrabold mt-8">
                    {formatTime(time)}
                  </p>
                </div>

                {/* 상품 태그 */}
                <div className="flex items-start mt-3">
                  <p className=" bg-sale-color border p-[1.5px] border-sale-btn text-[11px] text-sale-btn inline-block ">
                    ↓즉시할인중
                  </p>
                </div>

                {/* 상품명 */}
                <div className="mt-1">
                  <h3 className="text-[16px] text-black font-semibold">
                    {product.name}
                  </h3>
                </div>

                {/* 타임딜가 */}
                <div className="flex gap-x-2 items-baseline">
                  <p className="text-[18px] font-semibold text-red-500">
                    타임딜가
                  </p>

                  {/* 상품 가격 */}
                  <div className="flex items-baseline">
                    <p className="text-[20px] font-black text-gray-900">
                      {product.price}
                    </p>
                    <span className="text-[15px]">원~</span>
                  </div>
                  {product.originalPrice && (
                    <p className="text-[15px] font-medium text-custom-light-gray line-through">
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

                {/* 배송 */}
                <div className="flex justify-start items-baseline ">
                  <div className="flex items-baseline">
                    <p className="text-[12px] text-gray-600">무료배송</p>
                  </div>

                  {/* 포인트 적립율 */}
                  <div className="flex ml-3">
                    <p className="text-[12px] text-gray-700">11pay 최대 </p>
                    <p className="text-blue-600 text-[12px]">{product.point}</p>
                    <p className="text-[12px] text-gray-700"> 적립</p>
                  </div>

                  {/* 남은상품개수 */}
                  <div className="ml-3">
                    <p className="text-[12px] text-gray-600 mt-2">
                      {product.remainProduct}개 남음
                    </p>
                  </div>
                </div>

                {/* 11번가 추천 상품 */}
                <div className="mt-4 mb-8">
                  <p className="text-[13px] text-gray-600 ml-2">
                    11번가 추천상품
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TimeDeal;
