import SessionContext from "contexts/SessionContext";
import { useCallback, useContext, useEffect, useState } from "react";
import * as cartService from "services/cart";
import LoadingSpinner from "../LoadingSpinner";
import CartItem from "./CartItem";

const CartModal = ({}) => {
  const { username } = useContext(SessionContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    const response = await cartService.getCart();
    if (response.status === 200) {
      setItems(await response.json());
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalItems = 0;
  let subTotal = 0;
  for (let item of items) {
    totalItems += item.quantity;
    subTotal += item.price_per_unit * item.quantity;
  }

  return (
    <div className="bg-white h-screen w-full max-w-lg flex flex-col">
      <div className="bg-emerald-800 text-white font-playfair text-center py-8 text-3xl shadow-md relative">
        {` ${username}'s Cart`}
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col justify-between flex-1 overflow-y-scroll">
          <div>
            {items.map((item) => (
              <div
                key={item.id}
                className="border-t border-slate-200 first:border-none mx-8 py-6"
              >
                <CartItem item={item} fetchCart={fetchCart}></CartItem>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-200 flex flex-col justify-center m-4">
            <div className="flex justify-between my-4 text-slate-500">
              <div>{totalItems} items</div>
              <div>
                Subtotal{" "}
                <span className="text-lg text-slate-600">${subTotal}</span>
              </div>
            </div>
            <button
              onClick={() =>
                alert("This app is not a real plant selling site :)")
              }
              className="bg-emerald-700 text-white py-3 rounded-full flex justify-center items-center text-lg "
            >
              <i className="fa-solid fa-arrow-right-to-bracket mr-1 text-2xl"></i>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartModal;
