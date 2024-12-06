import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import AddEquipment from "../pages/addEquipment/AddEquipment";
import AllEquipment from "../pages/allSportsEquipment/AllEquipment";
import Equipment from "../pages/Equipment/Equipment";
import MyEquipmentList from "../pages/myEquipmentList/MyEquipmentList";
import PrivateRoute from "./PrivateRoute";
import MyEquipmentComponent from "../pages/myEquipmentList/MyEquipmentComponent";
import UpdateEquipment from "../pages/updateEquipment/UpdateEquipment";
import NotFound from "../pages/404/NotFound";

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
    element: (
      <PrivateRoute>
        <AddEquipment />
      </PrivateRoute>
    ),
  },
  {
    path: "/allEquipment",
    element: <AllEquipment />,
    loader: () => fetch("https://faisasportsserver.vercel.app/all_equipment"),
  },
  {
    path: "/equipment/:id",
    element: (
      <PrivateRoute>
        <Equipment />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://faisasportsserver.vercel.app/equipment/${params.id}`),
  },
  {
    path: "/myEquipment/",
    element: (
      <PrivateRoute>
        <MyEquipmentList />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <MyEquipmentComponent />,
      },
    ],
  },
  {
    path: "equipment/update_info/:id",
    element: (
      <PrivateRoute>
        <UpdateEquipment />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://faisasportsserver.vercel.app/equipment/${params.id}`),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
