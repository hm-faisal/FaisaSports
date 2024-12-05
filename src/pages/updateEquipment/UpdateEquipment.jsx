import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UpdateEquipmentForm from "./UpdateEquipmentForm";

const UpdateEquipment = () => {
  const product = useLoaderData();

  return (
    <>
      <Header />
      <UpdateEquipmentForm product={product} />
      <Footer />
    </>
  );
};

export default UpdateEquipment;
