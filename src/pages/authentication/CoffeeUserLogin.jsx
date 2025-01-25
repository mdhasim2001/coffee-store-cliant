import React, { useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/more/14.jpg";
import { UserContext } from "../../AuthContext";

export const CoffeeUserLogin = () => {
  const { userLogin } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const hendleUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((result) => {
        if (result) {
          form.reset();
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="add_coffee_bg py-10 px-5 lg:px-[20%] bg-cover bg-center w-full bg-no-repeat">
      <div>
        <Link to="/">
          <button className="flex items-center gap-3 font-bold cursor-pointer">
            <IoMdArrowRoundBack />
            Back to home
          </button>
        </Link>
      </div>
      <div className="mt-5 p-10">
        <div className="text-center">
          <h1 className="text-4xl mb-2 font-extrabold">Log In</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div>
            <img className="w-full h-full" src={img} alt="" />
          </div>
          <div>
            <form
              onSubmit={hendleUserLogin}
              className="mt-5 flex flex-col gap-5"
            >
              <div className="w-full">
                <p className="mb-2 font-bold">Email</p>
                <input
                  className="w-full py-2 px-2 bg-white rounded-lg text-[11px] border border-black"
                  type="email"
                  required
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="w-full">
                <p className="mb-2 font-bold">Password</p>
                <input
                  className="w-full py-2 px-2 bg-white rounded-lg text-[11px] border border-black"
                  type="password"
                  required
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <p>
                  Do not have an account?
                  <Link to="/register" className="font-bold ml-1">
                    Register
                  </Link>
                </p>
                <button className="py-2 px-5 bg-[#6F4E37] mt-2 cursor-pointer text-[11px] font-bold border border-r-black rounded-lg">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
