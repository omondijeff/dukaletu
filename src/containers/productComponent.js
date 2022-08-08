import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div
        class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
        key={id}
      >
        <div>
          <div>
            <img src={image} alt={title} />
          </div>
          <div>
            <a>{title}</a>
            <div>Ksh {price}</div>
            <div>
              <span>{category}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};
export default ProductComponent;
