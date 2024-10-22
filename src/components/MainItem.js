import products from "./Products";
import { useState } from "react";

const productsPerPage = 3;

export default function MainItem() {
  const [currentPage, setCurrentPage] = useState(0);

  const maxPage = Math.ceil(products.length / productsPerPage) - 1;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < maxPage ? prevPage + 1 : 0));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : maxPage));
  };

  const currentProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  return (
    <div className="p-4 bg-custom-gray">
      <div className="p-6">
        {/* 시선집중 섹션 제목 */}
        <h2 className="text-[23px] font-extrabold text-black">시선 집중</h2>
        {/* 상품 넘기는 버튼 */}
        <div className="flex justify-between mb-4">
          <button
            onClick={handlePrevPage}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 p-2 w-10 h-10 bg-white text-gray-400 rounded-full flex items-center justify-center hover:text-pink-400 z-10 border-[1px] border-black-300 hover:shadow-xl transition-shadow"
          >
            ≺
          </button>
          <button
            onClick={handleNextPage}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 p-2 w-10 h-10 bg-white text-gray-400 rounded-full items-center justify-center hover:text-pink-400 z-10 border-[1px] border-black-300 hover:shadow-xl transition-shadow"
          >
            ≻
          </button>
        </div>
        {/* 상품 상세정보 */}
        <div className=" mt-3 grid grid-cols-3 gap-x-4 gap-y-10">
          {currentProducts.map((product) => (
            // 상품 상세정보 박스
            <div
              key={product.id}
              className="relative border bg-white hover:shadow-lg transition-shadow "
            >
              {/* 상품 이미지 */}
              <div className="aspect-h-1 aspect-w-2 overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-180">
                <img
                  alt={product.mainImageAlt}
                  src={product.mainImageSrc}
                  className="h-full w-full object-center object-cover transition-transform duration-300 ease-in-out"
                />
              </div>

              {/* 상품 태그 */}
              <div className="mt-0 ml-3 mr-3">
                <p className=" bg-sale-color mb-2 border border-sale-btn text-[10px] text-sale-btn inline-block ">
                  ↓즉시할인중
                </p>

                {/* 상품 상세정보-상품명 */}
                <div>
                  <h3 className="text-sm text-black font-semibold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>

                {/* 상품 상세정보-상품 할인율 */}
                <div className="mt-1 flex gap-x-2 items-center">
                  {product.discountPercent && (
                    <p className=" text-[20px] font-medium text-red-500">
                      {product.discountPercent}
                      <span className="text-[14px] font-medium text-red-500">
                        %
                      </span>
                    </p>
                  )}

                  {/* 상품 상세정보-상품 가격 */}
                  <div className="flex items-baseline">
                    <p className="text-[20px] font-black text-gray-900 ">
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

                {/* 상품 상세정보-리뷰 */}
                <div className="flex gap-x-1 items-baseline">
                  <p className="text-[12px] text-yellow-400">
                    {"★".repeat(product.review)}
                    {""}
                    {"☆".repeat(5 - product.review)}
                  </p>
                  <p className="text-[10px] text-gray-600 ">
                    {product.reviewCount}
                  </p>
                </div>

                {/* 상품 상세정보-카드 적립율/포인트 적립 */}
                <div className="flex mt-1 mb-2">
                  {product.cardDiscountRate && (
                    <div className="flex">
                      <p className="text-[11px] text-gray-700 ">카드</p>
                      <p className="text-blue-600 text-[11px] gap-x-2">
                        {product.cardDiscountRate}
                      </p>
                      <p className="text-[11px] text-gray-700"> 할인</p>
                      <span className=" text-gray-500">·</span>
                    </div>
                  )}
                  <p className="text-[11px] text-gray-700 ">11pay 최대 </p>
                  <p className="text-blue-600 text-[11px] "> {product.point}</p>
                  <p className="text-[11px] text-gray-700"> 적립</p>
                </div>

                {/* 상품 상세정보-총 판매개수 */}
                <div className="border-t border-gray-200 mb-2">
                  <p className="text-[10px] text-gray-600 flex justify-end mt-2">
                    {product.purchaseNum}개 구매
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
