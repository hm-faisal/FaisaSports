import { MdEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import swal from "sweetalert";

const LoginForm = () => {
  const navigate = useNavigate();
  const { emailPasswordLogin, setUser, googleLoginHandler } =
    useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    emailPasswordLogin(email, password)
      .then((res) => {
        setUser(res.user);
        swal("LogIn Successful", "You Successfully logged In", "success");
        navigate("/");
      })
      .catch(() => {
        swal("LogIn Failed", "Your Email or Password may wrong", "error");
      });
  };

  const googleLogin = () => {
    googleLoginHandler();
  };

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Log In</h2>
        <form
          className="flex justify-center items-center gap-6 flex-col"
          onSubmit={handleLogin}
        >
          <label className="input input-bordered flex items-center gap-2">
            <MdEmail />
            <input
              type="email"
              className="grow"
              placeholder="Email"
              name="email"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <IoKey />
            <input
              type="password"
              className="grow"
              placeholder="password"
              name="password"
            />
          </label>
          <button type="submit" className="btn btn-primary w-full">
            Log in
          </button>
        </form>

        <div className="googleLogin my-4">
          <button className="btn btn-info w-full " onClick={googleLogin}>
            Login With Google
          </button>
        </div>
        <div className="info mt-8 ">
          <p>
            <Link className="text-sky-900">Forget Password ?</Link>
          </p>
          <span>or</span>
          <p>
            Don&apos;t Have an Account{" "}
            <Link to={"/register"} className="text-sky-900">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
