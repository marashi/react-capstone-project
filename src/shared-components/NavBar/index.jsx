import SessionContext from "contexts/SessionContext";
import { useContext } from "react";

const NavBar = () => {
  const sessionContext = useContext(SessionContext);
  return (
    <nav className="flex bg-emerald-800 px-8 py-4 justify-center font-lato">
      <div className="w-full max-w-5xl flex justify-between items-center">
        <div
          className="flex font-playfair text-green-50 text-2xl items-center
      "
        >
          <img
            className="w-12 mr-3"
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
            alt="logo"
          />
          Richa's Plants
        </div>
        <div className="text-emerald-200">
          <i className="fa-solid fa-user mr-2"></i>
          {sessionContext.username ?? "Guest"}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
