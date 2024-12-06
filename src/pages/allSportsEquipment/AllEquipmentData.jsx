import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEquipmentData = ({ allEquipment }) => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen max-w-screen-lg mx-auto flex-col ">
        <h2 className="text-4xl font-bold my-8">All Equipment List</h2>
        <div className=" overflow-x-scroll ">
          <table className="table table-zebra table-auto">
            {/* head */}
            <thead>
              <tr className="*:text-base">
                <th>Equipment Name</th>
                <th>Equipment Category</th>
                <th>Equipment Price ($)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allEquipment.map((equipment, i) => (
                <tr key={i} className="">
                  <td>{equipment.eqName}</td>
                  <td>{equipment.eqCategory}</td>
                  <td>{equipment.eqPrice}</td>
                  <td>
                    <Link
                      to={`/equipment/${equipment._id}`}
                      className="btn btn-neutral"
                    >
                      view details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

AllEquipmentData.propTypes = {
  allEquipment: PropTypes.array,
};

export default AllEquipmentData;
