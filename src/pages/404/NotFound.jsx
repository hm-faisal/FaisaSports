import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen flex-col gap-8">
        <h2>
          <span className="text-9xl font-bold text-yellow-400">4</span>
          <span className="text-9xl font-bold text-sky-500">0</span>
          <span className="text-9xl font-bold text-yellow-400">4</span>
        </h2>
        <p className="text-4xl font-bold text-orange-500">
          Oh ! Page Not Found !!!
        </p>
        <Link to={"/"} className="btn">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
