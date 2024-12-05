import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all_equipment")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="flex justify-center items-center flex-col my-16">
        <h2 className="text-4xl font-bold">See Our Product</h2>
        <div className="Products grid grid-cols-3 gap-4">
          {products.length > 0 ? (
            products.map((product, i) => (
              <ProductCard product={product} key={i} />
            ))
          ) : (
            <div>No Product found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
