import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AllEquipmentData from "./AllEquipmentData";

const AllEquipment = () => {
  const allEquipment = useLoaderData();
  return (
    <>
      <Header />
      <AllEquipmentData allEquipment={allEquipment} />
      <Footer />
    </>
  );
};

export default AllEquipment;
