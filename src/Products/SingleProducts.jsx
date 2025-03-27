import React from "react";

const SingleProducts = ({ product, handleAddToCart }) => {
  const {title, price, description, image } = product;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 flex flex-col">
      <img className="w-50 h-50 object-contain mx-auto" src={image} alt="" />
      <div className="flex flex-col flex-grow">
        <div className="font-bold text-center text-xl mb-2 mt-4">
          {title.slice(0, 20)}
        </div>
        <p className="text-gray-700 text-base object-right-bottom flex-1">
          {description.length > 200
            ? `${description.slice(0, 200)}...`
            : description}
        </p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-2xl font-bold">{price}$</h3>
        <button onClick={()=> handleAddToCart(product)} className="bg-amber-500 font-semibold text-white px-3 py-1 rounded-2xl cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProducts;
