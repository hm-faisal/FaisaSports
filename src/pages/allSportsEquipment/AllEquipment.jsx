import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AllEquipmentData from "./AllEquipmentData";

const AllEquipment = () => {
  const allEquipment = useLoaderData();
  return (
    <>
      <Header />
      <h2 className="text-4xl font-bold my-8 text-center">
        All Equipment List
      </h2>
      <div className="overflow-x-auto">
        <AllEquipmentData allEquipment={allEquipment} />
      </div>

      <Footer />
    </>
  );
};

export default AllEquipment;
