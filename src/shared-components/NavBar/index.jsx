import SessionContext from "contexts/SessionContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const sessionContext = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  return (
    <nav
      onMouseLeave={() => setUserMenuOpen(false)}
      className="flex bg-emerald-800 px-8 py-4 justify-center font-lato"
    >
      <div className="w-full max-w-5xl flex justify-between items-center">
        <Link to="/plants" className="text-emerald-100">
          <div className="flex font-playfair text-green-50 text-2xl items-center">
            <img
              className="w-12 mr-3"
              src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
              alt="logo"
            />
            Richa's Plants
          </div>
        </Link>
        <div className="flex justify-end flex-1">
          <div className="relative min-w-32">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="text-emerald-100"
            >
              <i className="fa-solid fa-user mr-2"></i>
              {sessionContext.username}
            </button>
            {userMenuOpen && (
              <div className="bg-emerald-50 rounded-lg absolute top-6 left-0 p-2 min-w-28 ">
                <button
                  onClick={() => sessionContext.signOut()}
                  className="text-slate-500 hover:text-emerald-800"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket mr-1"></i>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
