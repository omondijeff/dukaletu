import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  // const renderList = products.map((product) => {
  //   const { id, title, image, price, category } = product;
  //   return (
  //     <div class="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
  //       <div class="grid g" key={id}>
  //         <div class="">
  //           <img src={image} alt={title} />

  //           <a>{title}</a>
  //           <div>Kshs {price}</div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });
  // return <>{renderList}</>;
  return (
    <section class="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
      <div class="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, key) => {
          const { id, title, image, price, category } = product;
          return (
            <article
              class="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
              key={key}
            >
              <a href={product.href}>
                <div className="center">
                  <img
                    src={image}
                    alt={title}
                    className=" h-48 rounded-t-md align-middle"
                  />
                </div>
                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                  <div className="flex-none w-10 h-10 rounded-full">
                    <img
                      src={image}
                      className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                      alt={product.title}
                    />
                  </div>
                  <div className="ml-3">
                    <span className="block text-gray-900">
                      {product.category}
                    </span>
                    <span className="block text-gray-400 text-sm">
                      Ksh.{product.price}
                    </span>
                  </div>
                </div>
                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-gray-900">{product.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default ProductComponent;
