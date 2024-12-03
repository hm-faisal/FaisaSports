import { FaDumbbell, FaUser } from "react-icons/fa";
import { MdEmail, MdSportsBasketball } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdPriceChange } from "react-icons/md";
import { MdGeneratingTokens } from "react-icons/md";
import { GiDeliveryDrone } from "react-icons/gi";
import { GrStorage } from "react-icons/gr";
import { BiSolidCustomize } from "react-icons/bi";

const AddEquipmentForm = () => {
  return (
    <>
      <div className="flex justify-center item-center min-h-screen flex-col ">
        <h2 className="text-3xl font-bold mb-8 text-center  my-4">
          Add Your Equipment
        </h2>
        <form className="grid grid-cols-2 gap-4 max-w-screen-md mx-auto mb-12">
          <label className="input input-bordered flex items-center gap-2 ">
            <FaDumbbell />
            <input type="text" className="grow" placeholder="Equipment Name" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdSportsBasketball />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Image URL"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <BiSolidCategoryAlt />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Category"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdPriceChange />
            <input type="text" className="grow" placeholder="Equipment Price" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdGeneratingTokens />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Ratings"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <GiDeliveryDrone />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Delivery Time"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdEmail />
            <input type="email" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaUser />
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <GrStorage />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Stock Status"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <BiSolidCustomize />
            <input
              type="text"
              className="grow"
              placeholder="Customize Equipment"
            />
          </label>
          <label className="input input-bordered flex items-start p-4 gap-2 col-span-2 min-h-20">
            <BiSolidCustomize />
            <textarea
              name="Equipment Description"
              className="grow"
              placeholder="Write Your Equipment Description"
              cols={"3"}
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
