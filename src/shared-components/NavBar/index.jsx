import SessionContext from "contexts/SessionContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "./modals/CartModal";
import ModalWrapper from "./modals/ModalWrapper";
import MobileMenuModal from "./modals/MobileMenuModal";

const NavBar = () => {
  const sessionContext = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
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
              Richa&apos;s Plants
            </div>
          </Link>
          <div className=" justify-end flex-1 hidden sm:flex">
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
            <button
              onClick={() => setCartOpen(true)}
              className="text-emerald-100"
            >
              <i className="fa-solid fa-cart-shopping mr-2"></i>
              Cart
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="block sm:hidden"
          >
            <i className="fa-solid fa-bars text-emerald-400 text-4xl"></i>
          </button>
        </div>
      </nav>

      <ModalWrapper isOpen={cartOpen} onCloseClick={() => setCartOpen(false)}>
        <CartModal />
      </ModalWrapper>

      <ModalWrapper
        isOpen={mobileMenuOpen}
        onCloseClick={() => setMobileMenuOpen(false)}
      >
        <MobileMenuModal
          onCartOpenClick={() => {
            setMobileMenuOpen(false);
            setCartOpen(true);
          }}
        />
      </ModalWrapper>
    </>
  );
};

export default NavBar;
