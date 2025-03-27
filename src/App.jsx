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

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl">React eCommerce</h1>
      {
        carts.map(cart => <p>Cart Items:{cart.title}</p>)
      }
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <SingleProducts product={product} key={product.id} handleAddToCart={handleAddToCart}></SingleProducts>
        ))}
      </div>
    </div>
  );
};

export default App;
