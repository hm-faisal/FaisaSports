import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { Tooltip } from "react-tooltip";
import swal from "sweetalert";

const Header = ({ setLightTheme, lightTheme }) => {
  const { user, logoutUser } = useContext(AuthContext);

  const logOutHandler = () => {
    logoutUser().then(() => {
      swal("Logout Successful", "You Successfully logged out", "success");
    });
  };

  return (
    <>
      <div>
        <div className="navbar bg-base-100 flex-col md:flex-row">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <NavLink className={"text-md px-4 py-2 font-semibold"} to={"/"}>
                  Home
                </NavLink>
                <NavLink
                  className={"text-md px-4 py-2 font-semibold"}
                  to={"/allEquipment"}
                >
                  All Sports Equipment
                </NavLink>
                <NavLink
                  className={"text-md px-4 py-2 font-semibold"}
                  to={"/addEquipment"}
                >
                  Add Equipment
                </NavLink>
                <NavLink
                  className={"text-md px-4 py-2 font-semibold"}
                  to={`/myEquipment`}
                >
                  My Equipment List
                </NavLink>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">FAISASPORTS</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavLink className={"text-md px-4 py-2 font-semibold"} to={"/"}>
                Home
              </NavLink>
              <NavLink
                className={"text-md px-4 py-2 font-semibold"}
                to={"/allEquipment"}
              >
                All Sports Equipment
              </NavLink>
              <NavLink
                className={"text-md px-4 py-2 font-semibold"}
                to={"/addEquipment"}
              >
                Add Equipment
              </NavLink>
              <NavLink
                className={"text-md px-4 py-2 font-semibold"}
                to={`/myEquipment`}
              >
                My Equipment List
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <button
              onClick={() => setLightTheme(!lightTheme)}
              className="btn mr-2"
            >
              switch theme
            </button>
            {user ? (
              <div className="flex gap-4">
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={`profile Image = ${user.photoURL}, Name = ${user.displayName}`}
                >
                  <button
                    className="btn btn-neutral"
                    onClick={logOutHandler}
                    title={`${user.photoURL} ${user.displayName}`}
                  >
                    logout
                  </button>
                </a>
                <Tooltip id="my-tooltip" />
              </div>
            ) : (
              <>
                <Link className="btn btn-neutral" to={"/login"}>
                  Login
                </Link>
                <span className="px-2">or</span>
                <Link className="btn btn-neutral" to={"/register"}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
