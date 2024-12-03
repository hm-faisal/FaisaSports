import { MdEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Log In</h2>
        <form className="flex justify-center items-center gap-6 flex-col">
          <label className="input input-bordered flex items-center gap-2">
            <MdEmail />
            <input type="email" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <IoKey />
            <input type="password" className="grow" placeholder="password" />
          </label>
          <button type="submit" className="btn btn-primary w-full">
            Log in
          </button>
        </form>

        <div className="googleLogin my-4">
          <button className="btn btn-info w-full ">Login With Google</button>
        </div>
        <div className="info mt-8 ">
          Don&apos;t Have an Account{" "}
          <Link to={"/register"} className="text-sky-900">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
