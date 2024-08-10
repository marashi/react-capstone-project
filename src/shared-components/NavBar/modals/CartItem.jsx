const CartItem = ({ item }) => {
  return (
    <div className="flex mx-6 my-8">
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
        <div className="text-slate-500">
          ${item.price_per_unit * item.quantity}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
