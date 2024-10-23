import "swiper/css";
import "swiper/css/navigation";
import React, { useEffect, useState } from "react";
import products from "./Products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const TimeDeal = () => {
  const [time, setTime] = useState(7200); // 남은 시간을 초 단위로 설정(2시간)
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

    setShuffledProducts(shuffleArray(products)); //  처음에만 섞은 상품 배열을 상태로 설정
  }, []);

  return (
    // 전체 타임딜 박스
    <div className="p-6 bg-white">
      {/* 섹션 제목 */}
      <div className="flex justify-between">
        <h2 className="text-[23px] font-extrabold text-black">타임딜</h2>
        <button>더보기﹥</button>
      </div>

      {/* Swiper로 상품 넘기는 기능 구현 */}
      <Swiper
        navigation={true} // Swiper 내비게이션 활성화
        modules={[Navigation]}
        slidesPerView={1} // 한 번에 보여줄 상품 개수
        loop={false} // 무한 루프
      >
        {shuffledProducts.map((product) => (
          <SwiperSlide
            key={product.id}
            className="hover:shadow-xl transition-shadow"
          >
            {/* 상품 상세정보 박스 */}
            <div className="flex flex-row justify-stretch bg-white mt-4">
              {/* 상품 이미지 */}
              <div className="basis-1/2 aspect-h-1 aspect-w-3 overflow-hidden border border-gray-300">
                <img
                  alt={product.mainImageAlt}
                  src={product.mainImageSrc}
                  className="object-center object-cover h-full w-full"
                />
              </div>

              {/* 상품 상세정보 */}
              <div className="flex flex-col items-start basis-1/2 ">
                {/* 타이머 */}
                <div className="">
                  <p className="text-[35px] text-red-500 font-extrabold">
                    {formatTime(time)}
                  </p>
                </div>

                {/* 상품 태그 */}
                <div className="flex justify-center">
                  <p className=" bg-sale-color border p-[2px] border-sale-btn text-[13px] text-sale-btn inline-block ">
                    ↓즉시할인중
                  </p>
                </div>

                {/* 상품명 */}
                <div className="mt-1">
                  <h3 className="text-[17px] text-black font-semibold">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </h3>
                </div>

                {/* 타임딜가 */}
                <div className="flex gap-x-2 items-baseline mt-1">
                  <p className="text-[20px] font-semibold text-red-500">
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
                  <p className="text-[15px] text-yellow-400">
                    {"★".repeat(product.review)}
                    {"☆".repeat(5 - product.review)}
                  </p>
                  <p className="text-[10px] text-gray-600">
                    {product.reviewCount}
                  </p>
                </div>

                {/* 배송 */}
                <div className="flex justify-start items-baseline mt-1">
                  {product.freeDeliver ? (
                    <div className="flex items-baseline">
                      <p className="text-[12px] text-gray-600">무료배송</p>
                    </div>
                  ) : (
                    <div className="w-[0px]"></div>
                  )}

                  {/* 포인트 적립율 */}
                  <div className="flex">
                    <p className="text-[12px] text-gray-700">11pay 최대 </p>
                    <p className="text-blue-600 text-[12px]">{product.point}</p>
                    <p className="text-[12px] text-gray-700"> 적립</p>
                  </div>
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
