import { RemoveScroll } from "react-remove-scroll";
import SessionContext from "contexts/SessionContext";
import { useContext, useEffect, useState } from "react";
import * as cartService from "services/cart";
import LoadingSpinner from "../LoadingSpinner";
import CartItem from "./CartItem";

const CartModal = ({ setCartOpen }) => {
  const { username } = useContext(SessionContext);
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await cartService.getCart();
      if (response.status === 200) {
        setItems(await response.json());
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <RemoveScroll>
      <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end font-lato">
        <div className="bg-white h-screen w-full max-w-lg">
          <div className="bg-emerald-800 text-white font-playfair text-center py-8 text-3xl shadow-md relative">
            {` ${username}'s Cart`}
            <button
              className="absolute top-8 right-8  text-green-200"
              onClick={() => setCartOpen(false)}
            >
              <i className="fa-regular fa-circle-xmark  text-3xl"></i>
            </button>
          </div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            items.map((item) => <CartItem key={item.id} item={item}></CartItem>)
          )}
        </div>
      </div>
    </RemoveScroll>
  );
};
export default CartModal;
