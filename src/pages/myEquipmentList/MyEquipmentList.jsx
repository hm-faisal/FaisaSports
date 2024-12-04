import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyEquipmentComponent from "./MyEquipmentComponent";

const MyEquipmentList = () => {
  const products = useLoaderData();
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center items-center min-h-screen gap-4 my-8">
        {products ? (
          products.map((product, i) => (
            <MyEquipmentComponent product={product} key={i} />
          ))
        ) : (
          <div>No Item Found</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyEquipmentList;
