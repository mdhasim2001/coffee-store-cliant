import React, { useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/more/12.png";
import { UserContext } from "../../AuthContext";

export const CoffeeUserRegister = () => {
  const { createUser } = useContext(UserContext);
  const navigate = useNavigate();
  const hendleUserRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        if (result) {
          navigate("/login");
          form.reset();
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
          <h1 className="text-4xl mb-2 font-extrabold">Register</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div>
            <img className="w-full h-full" src={img} alt="" />
          </div>
          <div>
            <form
              onSubmit={hendleUserRegister}
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
                  Have an acount?
                  <Link to="/login" className="font-bold ml-1">
                    Login
                  </Link>
                </p>
                <button className="py-2 px-5 mt-3 bg-[#6F4E37] cursor-pointer text-[11px] font-bold border border-r-black rounded-lg">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
