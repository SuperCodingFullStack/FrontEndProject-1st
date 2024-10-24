import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductMock from './mock/ProductMock';
import './ImageSwiper.css';
import { Link } from 'react-router-dom';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const ImageSwiper = () => {
  return (
    <Swiper className="image_swiper" slidesPerView = {3} spaceBetween={30} freeMode={true} pagination={{ clickable: true}} modules={[FreeMode, Pagination]}>
      {
        ProductMock.map((pmock) => (
            <SwiperSlide key={pmock.productID}>
                <Link to={`/product/${pmock.productID}`} className="block">
                  <span className="sr-only">상품{`${pmock.productID}`}</span>
                </Link>
                <div className="thumb">
                    <img src={pmock.mainThumb} alt="main_thumb" />
                </div>
                <div className="info p-5">
                    <h2>{pmock.productName}</h2>
                    <div className="price">
                        {
                            pmock.salePrice !== null && <span className="salePercent">{Math.floor(((pmock.originalPrice - pmock.salePrice) / (pmock.originalPrice)) * 100)}<span>%</span></span>
                        }
                        {
                            pmock.salePrice === null ? <span className="saleIsOriginal">{pmock.originalPrice.toLocaleString()}<span>원</span></span> : <span className="sale">{pmock.salePrice.toLocaleString()}<span>원</span></span>
                        }
                        {
                            pmock.salePrice !== null && <span className="sales">{pmock.originalPrice}<span>원</span></span>
                        }
                    </div>
                </div>
            </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default ImageSwiper
