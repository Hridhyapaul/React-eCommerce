import React, { useEffect, useState } from "react";
import SingleProducts from "./Products/SingleProducts";

const App = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (item) => {
    const isExist = carts.find(pd => pd.id == item.id)
    if(!isExist){
      setCarts([...carts, item])
    }
    else{
      alert('This Product already added in the Cart')
    }
  };

  const handleRemoveCart = id => {
    const existItems = carts.filter(i => i.id !== id)
    setCarts(existItems)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl">React eCommerce</h1>
      <div>
      {
        carts.map(cart => 
          <div className="flex justify-start items-center gap-6">
            <p>Cart Items:{cart.title}</p>
            <button onClick={()=>handleRemoveCart(cart.id)} className="bg-amber-500 font-semibold text-white px-3 py-1 rounded-2xl cursor-pointer">Delete</button>
          </div>
        )
      }
      </div>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <SingleProducts product={product} key={product.id} handleAddToCart={handleAddToCart} ></SingleProducts>
        ))}
      </div>
    </div>
  );
};

export default App;
