import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MyEquipment = ({ product }) => {
  return (
    <>
      <div className="max-w-xs rounded-lg border border-gray-200 shadow-lg overflow-hidden">
        <img
          src={product.eqImage}
          alt={product.eqName}
          className="w-xs object-cover block "
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {product.eqName}
          </h2>

          <p className="text-sm text-gray-500 mt-1">{product.eqCategory}</p>

          <p className="text-xl font-bold text-gray-900 mt-2">
            ${product.eqPrice}
          </p>

          <div className="flex items-center mt-1">
            <span className="text-yellow-500">{product.eqRating} ⭐</span>
          </div>

          <p className="text-sm text-gray-600 mt-2">{product.eqDescription}</p>

          <p className="text-sm text-gray-600 mt-2">
            Available colors: {product.eqCustom}
          </p>

          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-600">
              Delivery in {product.eqDelivery} days
            </span>
            <span className="text-sm text-gray-600">
              Stock: {product.eqStock}
            </span>
          </div>

          <div className="flex justify-between items-center my-6">
            <Link className="btn btn-success">Update</Link>
            <Link className="btn btn-warning">Delete</Link>
          </div>
        </div>
      </div>
    </>
  );
};

MyEquipment.propTypes = {
  product: PropTypes.object,
};
export default MyEquipment;
