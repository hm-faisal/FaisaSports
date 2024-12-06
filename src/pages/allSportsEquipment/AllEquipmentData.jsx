import { Link } from "react-router-dom";

const AllEquipmentData = ({ allEquipment }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto ">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {allEquipment.map((item, i) => (
              <tr key={i}>
                <td className="px-4 py-2">{item.eqName}</td>
                <td className="px-4 py-2">{item.eqCategory}</td>
                <td className="px-4 py-2">{item.eqPrice}</td>
                <td className="px-4 py-2">
                  <Link to={`/equipment/${item._id}`} className="btn">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllEquipmentData;
