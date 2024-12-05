import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Fade } from "react-awesome-reveal";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [sortProducts, setSortProducts] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/all_equipment")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const sortHandler = () => {
    setProducts(products.sort((a, b) => a.eqPrice - b.eqPrice));
    setSortProducts(true);
    console.log(products);
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col my-16">
        <div className="flex mb-6 justify-around w-full">
          <h2 className="text-4xl font-bold">See Our Product</h2>{" "}
          <button className="btn" onClick={sortHandler}>
            Sort By Price
          </button>
        </div>

        <div className="Products grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {products.length > 0 ? (
            sortProducts ? (
              products.map((product, i) => (
                <Fade key={i}>
                  <ProductCard product={product} />
                </Fade>
              ))
            ) : (
              products.map((product, i) => (
                <Fade key={i}>
                  <ProductCard product={product} />
                </Fade>
              ))
            )
          ) : (
            <div>No Product found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
