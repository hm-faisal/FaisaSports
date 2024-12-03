import { FaUser } from "react-icons/fa";
import { FaImagePortrait } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Register</h2>
        <form className="flex justify-center items-center gap-6 flex-col">
          <label className="input input-bordered flex items-center gap-2">
            <FaUser />
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaImagePortrait />
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdEmail />
            <input type="email" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <IoKey />
            <input type="password" className="grow" placeholder="password" />
          </label>
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>
        <div className="info mt-8 ">
          Already Have an Account{" "}
          <Link to={"/login"} className="text-sky-900">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
