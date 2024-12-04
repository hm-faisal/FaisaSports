import { FaUser } from "react-icons/fa";
import { FaImagePortrait } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import swal from "sweetalert";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    emailPasswordNewUser,
    setUser,
    updateUserProfile,
    googleLoginHandler,
  } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const profile = form.get("profile");
    const email = form.get("email");
    const password = form.get("password");
    emailPasswordNewUser(email, password)
      .then((res) => {
        setUser(res.user);
        updateUserProfile(name, profile);
        swal(
          "Registration Successful",
          "You Successfully Registered",
          "success"
        );
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        swal("Registration Failed", `${e}`, "error");
      });
  };

  const googleLogin = () => googleLoginHandler();
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Register</h2>
        <form
          className="flex justify-center items-center gap-6 flex-col"
          onSubmit={handleRegister}
        >
          <label className="input input-bordered flex items-center gap-2">
            <FaUser />
            <input
              type="text"
              className="grow"
              placeholder="Username"
              name="name"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaImagePortrait />
            <input
              type="text"
              className="grow"
              placeholder="Username profile URL"
              name="profile"
            />
          </label>
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
            Register
          </button>
          <p>or</p>
          <div className="googleLogin w-full">
            <button className="btn btn-info w-full " onClick={googleLogin}>
              Login With Google
            </button>
          </div>
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
