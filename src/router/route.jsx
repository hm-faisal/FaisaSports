import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import AddEquipment from "../pages/addEquipment/AddEquipment";
import AllEquipment from "../pages/allSportsEquipment/AllEquipment";
import Equipment from "../pages/Equipment/Equipment";
import MyEquipmentList from "../pages/myEquipmentList/MyEquipmentList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
  {
    path: "/addEquipment",
    element: <AddEquipment />,
  },
  {
    path: "/allEquipment",
    element: <AllEquipment />,
    loader: () => fetch("http://localhost:5000/all_equipment"),
  },
  {
    path: "/equipment/:id",
    element: <Equipment />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/equipment/${params.id}`),
  },
  {
    path: "/myEquipment/:email",
    element: <MyEquipmentList />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/equipments/${params.email}`),
  },
]);

export default router;
