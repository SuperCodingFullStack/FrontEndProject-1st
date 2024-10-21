/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "해피데이 따뜻한 겨울 손난로 대용량 외 7종",
    href: "#",
    mainImageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    mainImageAlt: "hotpack",
    discountPercent: "30%",
    price: "12,600",
    discountPrice: "18,000",
    review: "⭐️⭐️⭐️⭐️⭐️",
    reviewCount: "19",
    point: "276P",
  },
  {
    id: 2,
    name: "해피데이 따뜻한 겨울 손난로 대용량 외 7종",
    href: "#",
    mainImageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    mainImageAlt: "hotpack",
    discountPercent: "30%",
    price: "12,600",
    discountPrice: "18,000",
    review: "⭐️⭐️⭐️⭐️⭐️",
    reviewCount: "19",
    point: "276P",
  },
  {
    id: 3,
    name: "해피데이 따뜻한 겨울 손난로 대용량 외 7종",
    href: "#",
    mainImageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    mainImageAlt: "hotpack",
    discountPercent: "30%",
    price: "12,600",
    discountPrice: "18,000",
    review: "⭐️⭐️⭐️⭐️⭐️",
    reviewCount: "19",
    point: "276P",
  },
  // More products...
];

export default function MainItem() {
  return (
    <div className="my-8 bg-custom-gray ">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-xl font-bold text-black mt-5">시선 집중</h2>
        <div className=" mt-5 grid grid-cols-3 gap-x-6 gap-y-10">
          {products.map((product) => (
            <div key={product.id} className="group relative border">
              <div className="aspect-h-1 aspect-w-2  overflow-hidden bg-white group-hover:opacity-75 h-90">
                <img
                  alt={product.mainImageAlt}
                  src={product.mainImageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
