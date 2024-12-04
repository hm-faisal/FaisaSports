import { FaDumbbell, FaUser } from "react-icons/fa";
import { MdEmail, MdSportsBasketball } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdPriceChange } from "react-icons/md";
import { MdGeneratingTokens } from "react-icons/md";
import { GiDeliveryDrone } from "react-icons/gi";
import { GrStorage } from "react-icons/gr";
import { BiSolidCustomize } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Loading from "../../components/Loading";
import swal from "sweetalert";

const AddEquipmentForm = () => {
  const { user, loading } = useContext(AuthContext);
  const addEquipmentHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const name = form.get("name");
    const eqName = form.get("eqName");
    const eqImage = form.get("eqImage");
    const eqCategory = form.get("eqCategory");
    const eqPrice = form.get("eqPrice");
    const eqRating = form.get("eqRating");
    const eqDelivery = form.get("eqDelivery");
    const eqStock = form.get("eqStock");
    const eqCustom = form.get("eqCustom");
    const eqDescription = form.get("eqDescription");

    const equipment = {
      email,
      name,
      eqName,
      eqImage,
      eqCategory,
      eqPrice,
      eqRating,
      eqDelivery,
      eqStock,
      eqCustom,
      eqDescription,
    };
    // console.log(equipment);

    // Send Data to Backend
    fetch("http://localhost:5000/add_equipment", {
      method: "POST",
      body: JSON.stringify(equipment),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal(
          "Equipment Add Successful",
          "You Successfully Added an Equipment",
          "success"
        );
      })
      .catch((e) => console.log(e));
  };
  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="flex justify-center item-center min-h-screen flex-col ">
        <h2 className="text-3xl font-bold mb-8 text-center  my-4">
          Add Your Equipment
        </h2>
        <form
          className="grid grid-cols-2 gap-4 max-w-screen-md mx-auto mb-12"
          onSubmit={addEquipmentHandler}
        >
          <label className="input input-bordered flex items-center gap-2">
            <MdEmail />
            <input
              type="email"
              className="grow"
              value={user.email}
              name="email"
              readOnly
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaUser />
            <input
              type="text"
              className="grow"
              value={user.displayName || ""}
              name="name"
              readOnly
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 ">
            <FaDumbbell />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Name"
              name="eqName"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdSportsBasketball />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Image URL"
              name="eqImage"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <BiSolidCategoryAlt />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Category"
              name="eqCategory"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdPriceChange />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Price"
              name="eqPrice"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdGeneratingTokens />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Ratings"
              name="eqRating"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <GiDeliveryDrone />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Delivery Time"
              name="eqDelivery"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <GrStorage />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Stock Status"
              name="eqStock"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <BiSolidCustomize />
            <input
              type="text"
              className="grow"
              placeholder="Customize Equipment"
              name="eqCustom"
            />
          </label>
          <label className="input input-bordered flex items-start p-4 gap-2 col-span-2 min-h-20">
            <BiSolidCustomize />
            <textarea
              className="grow"
              placeholder="Write Your Equipment Description"
              cols={"3"}
              name="eqDescription"
            ></textarea>
          </label>

          <button type="submit" className="btn btn-primary col-span-2">
            Add Your Equipment
          </button>
        </form>
      </div>
    </>
  );
};

export default AddEquipmentForm;
