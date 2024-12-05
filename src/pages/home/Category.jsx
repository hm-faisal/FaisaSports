import { useEffect, useState } from "react";

const Category = () => {
  const [products, setProducts] = useState([]);
  const category = [];
  useEffect(() => {
    fetch("http://localhost:5000/all_equipment")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  products.map((item) => category.push(item.eqCategory));

  return (
    <>
      <div className="flex justify-center items-center flex-col my-8">
        <h2 className="text-4xl font-bold text-center">
          See Our Product Categories
        </h2>
        <div className="category my-4 flex flex-wrap gap-4">
          {category.map((item, i) => (
            <span key={i} className="btn text-lg font-bold">
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
