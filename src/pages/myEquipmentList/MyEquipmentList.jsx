import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyEquipmentComponent from "./MyEquipmentComponent";

const MyEquipmentList = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MyEquipmentList;
