import React, { useContext, useRef } from "react";
// Swiper React 컴포넌트 가져오기
import { Swiper, SwiperSlide } from "swiper/react";
import { AppContext } from "../AppContext"; // AppContext 가져오기
import { Autoplay } from "swiper/modules"; // 필요한 모듈 가져오기
import "swiper/css"; // Swiper 스타일 가져오기
import "./styles.css"; // 사용자 정의 스타일 가져오기

import { AiOutlinePause } from "react-icons/ai";
import { IoPlayOutline } from "react-icons/io5";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const imageData = [
  {
    id: 1,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/browsing/space/banner/2024/9/29/2409291601158900773_81.jpg",
  },
  {
    id: 2,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/browsing/space/banner/2024/10/22/2410221341102501264_159.png",
  },
  {
    id: 3,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/browsing/space/banner/2024/10/23/2410231556525401264_18.jpg",
  },
  {
    id: 4,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/browsing/space/banner/2024/10/23/2410231619340901264_19.jpg",
  },
  {
    id: 5,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/browsing/space/banner/2024/10/18/2410181533578600985_124.jpg",
  },
  {
    id: 6,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/browsing/space/banner/2024/9/19/2409191757217700505_47.png",
  },
  {
    id: 7,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/browsing/space/banner/2024/9/13/2409131721231900773_539.png",
  },
  {
    id: 8,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/browsing/space/banner/2024/10/2/2410022200079000773_66.jpg",
  },
  {
    id: 9,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/http://cdn.011st.com/ds/2024/10/17/1667/1650942bab01ae4450c01f526136ce8a.jpg",
  },
  {
    id: 10,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/http://cdn.011st.com/ds/2024/10/17/1667/a9e2e6519f2319af685663f228814c83.jpg",
  },
  {
    id: 11,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/http://cdn.011st.com/ds/2024/10/17/1667/54a40947f043b2e055a6d03ae22f9346.jpg",
  },
  {
    id: 12,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/http://cdn.011st.com/ds/2024/10/17/1667/00dfcab14aace4f47474127a88b95792.jpg",
  },
  {
    id: 13,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/http://cdn.011st.com/ds/2024/10/02/1667/e4f78097f48f8293723d1da4a361f714.jpg",
  },
  {
    id: 14,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/http://cdn.011st.com/ds/2024/10/17/1667/2b3fe41389f60fd7cd37fd410d1c51dd.jpg",
  },
  {
    id: 15,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/http://cdn.011st.com/ds/2024/10/11/1667/60797ebefd3e1b787e103014526fee54.jpg",
  },
  {
    id: 16,
    src: "//cdn.011st.com/11dims/resize/1240x400/quality/75/11src/http://cdn.011st.com/ds/2024/10/23/1667/d0dd4189d11cdeb06bbefcfd7d77211d.jpg",
  },
];

const SwiperComponent = () => {
  const { isAutoPlaying, toggleAutoSwipe } = useContext(AppContext);
  const swiperRef = useRef(null); // swiperRef 선언
  const totalSlide = 16; // 총 슬라이드 수

  const handleAutoSwipeClick = () => {
    if (isAutoPlaying) {
      swiperRef.current.swiper.autoplay.stop();
    } else {
      swiperRef.current.swiper.autoplay.start();
    }
    toggleAutoSwipe(); // 자동 스와이프 상태 토글
  };

  // 이전 슬라이드로 이동
  const toPreviousSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };
  // 다음 슬라이드로 이동
  const toNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="swiper-container">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true} // 슬라이드가 원형이동
        modules={[Autoplay]} // Autoplay 모듈 포함
        className="mySwiper"
        onInit={(swiper) => {
          console.log(
            "Swiper initialized with",
            swiper.slides.length,
            "slides"
          );
        }}
      >
        {imageData.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.src} alt={`Slide ${image.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 일시정지 */}
      <div
        onClick={handleAutoSwipeClick}
        className={`bg-[rgba(0,0,0,0.2)] text-white flex items-center justify-center rounded-full p-2 w-10 h-10 cursor-pointer absolute bottom-5 right-40`}
        style={{ zIndex: 10 }}
      >
        {isAutoPlaying ? (
          <AiOutlinePause size="32" className="w-8 h-8" />
        ) : (
          <IoPlayOutline size="32" className="w-8 h-8" />
        )}
      </div>
      {/* 슬라이드 이동 */}
      <div
        onClick={toPreviousSlide}
        className={`bg-[rgba(0,0,0,0.2)] text-white flex items-center justify-center rounded-full p-2 w-10 h-10 cursor-pointer absolute bottom-5 right-20`}
        style={{ zIndex: 10 }}
      >
        <BsChevronLeft size="24" />
      </div>
      <div
        onClick={toNextSlide}
        className={`bg-[rgba(0,0,0,0.2)] text-white flex items-center justify-center rounded-full p-2 w-10 h-10 cursor-pointer absolute bottom-5 right-5`}
        style={{ zIndex: 10 }}
      >
        <BsChevronRight size="24" />
      </div>
    </div>
  );
};

export default SwiperComponent;
