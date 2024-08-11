import * as cartService from "services/cart";

const CartItem = ({ item, fetchCart }) => {
  return (
    <div className="flex">
      <img
        src={item.image_src}
        alt={item.plant_name}
        className="w-28 rounded-md"
      />
      <div className="flex justify-between flex-1">
        <div className="mx-4">
          <div className="font-playfair text-emerald-700 text-lg">
            {item.plant_name}
          </div>
          <div className="flex text-slate-500 my-1">
            <div className="text-slate-400 w-14">Color:</div>
            {item.pot_color}
          </div>
          <div className="flex text-slate-500 my-1 ">
            <div className="text-slate-400 w-14">Qty:</div>
            {item.quantity}
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="text-slate-500">
            ${item.price_per_unit * item.quantity}
          </div>
          <button
            onClick={async () => {
              cartService.removeItemFromCart(item.id);
              fetchCart();
            }}
            className="text-sm text-slate-400 hover:text-red-800"
          >
            <i className="fa-regular fa-trash-can mr-1 text-base"></i>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
