import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyEquipment from "./MyEquipment";

const MyEquipmentComponent = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://faisasportsserver.vercel.app/equipments/${user.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center min-h-screen gap-4 my-8">
        {products.length > 0 ? (
          products.map((product, i) => (
            <MyEquipment product={product} key={i} />
          ))
        ) : (
          <div className="flex flex-wrap justify-center items-center min-h-screen">
            No Item Found
          </div>
        )}
      </div>
    </>
  );
};

export default MyEquipmentComponent;
