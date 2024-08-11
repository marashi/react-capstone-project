import SessionContext from "contexts/SessionContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const MobileMenuModal = ({ onCartOpenClick }) => {
  const sessionContext = useContext(SessionContext);
  return (
    <motion.div
      initial={{ translateY: "-100%" }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-emerald-900 flex flex-col items-start p-4 rounded-bl-md text-emerald-200 pt-16 pr-16 text-xl shadow-md"
    >
      <div className="py-2">
        <i className="fa-solid fa-user mr-2"></i> {sessionContext.username}
      </div>
      <button className="py-2" onClick={sessionContext.signOut}>
        <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i> Sign out
      </button>
      <button className="py-2" onClick={onCartOpenClick}>
        <i className="fa-solid fa-cart-shopping mr-2"></i> Cart
      </button>
    </motion.div>
  );
};

export default MobileMenuModal;
