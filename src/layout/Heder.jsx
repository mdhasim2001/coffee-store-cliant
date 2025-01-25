import { useContext } from "react";
import logo from "../assets/images/more/logo.png";
import { UserContext } from "../AuthContext";

export const Heder = () => {
  const { user, userLogout } = useContext(UserContext);

  const handleUserLogout = () => {
    userLogout()
      .then((result) => {
        // console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="heder_bg bg-cover bg-center h-[15vh] w-full bg-no-repeat flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <img className="h-10 w-10" src={logo} alt="" />
        <h1 className="font_family text-3xl text-white">Espresso Emporium</h1>
      </div>
      {user ? (
        <button
          onClick={handleUserLogout}
          className="text-white cursor-pointer"
        >
          Sign Out
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
