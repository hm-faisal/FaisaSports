import { useLoaderData } from "react-router-dom";

const EquipmentDetails = () => {
  const item = useLoaderData();
  return (
    <>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <h2 className="text-4xl my-8">Equipment Details</h2>
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2 p-4">
              <img
                src={item.eqImage}
                alt={item.eqName}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-3xl font-semibold text-gray-800">
                {item.eqName}
              </h1>
              <p className="text-lg text-gray-500 mt-2">
                Category: {item.eqCategory}
              </p>

              <div className="my-2">
                <p className="text-yellow-500 text-lg">{item.eqRating} ⭐</p>
                <p className="my-2 text-gray-500">
                  Delivery: {item.eqDelivery} days
                </p>
              </div>

              <p className="mt-4 text-gray-600">{item.eqDescription}</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-6">
                ${item.eqPrice}
              </h2>

              <p className="text-gray-600 mt-2">
                Available colors: {item.eqCustom}
              </p>

              <p className="text-gray-600 mt-2">
                Stock: {item.eqStock} available
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentDetails;
