import clsx from "clsx";
import { useState } from "react";
import { POT_COLORS } from "shared-components/util";
import * as cartService from "services/cart";

const PlantPurchaseOptions = ({ plant, imageIdx, setImageIdx }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div>
        <div className="text-emerald-700 mt-8">
          <i className="fa-solid fa-brush mr-2"></i>
          Pot Colors
        </div>
        <div className="flex my-4">
          {plant.images.map((image, idx) => {
            return (
              <div key={image.pot_color} className="flex flex-col items-center">
                <button
                  className={clsx(
                    "w-10 h-10 m-2 border border-slate-500 rounded-full",
                    POT_COLORS[image.pot_color],
                    idx === imageIdx &&
                      "outline outline-emerald-700 outline-offset-2",
                    "hover:outline hover:outline-emerald-700 hover:outline-offset-2"
                  )}
                  onMouseEnter={() => setImageIdx(idx)}
                ></button>
                <div
                  className={clsx(
                    "m-1",
                    idx === imageIdx ? "text-slate-700" : "text-slate-500"
                  )}
                >
                  {image.pot_color}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex">
        <div className="rounded-full flex items-center text-xl text-slate-500 border border-slate-300 px-3 py-4">
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="mx-4 text-2xl text-emerald-700">{quantity}</div>
          <button onClick={() => setQuantity(quantity + 1)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button
          onClick={async () => {
            setIsLoading(true);
            const response = await cartService.addPlantToCart({
              plantId: plant.id,
              quantity,
              potColor: plant.images[imageIdx].pot_color,
            });
            setIsLoading(false);
            console.log(response.status);
          }}
          className="bg-emerald-700 text-white px-8 py-4 rounded-full ml-4 flex justify-center items-center flex-1 hover:bg-emerald-800"
        >
          {isLoading ? (
            <i className="fa-solid fa-spinner mr-2 text-2xl animate-spin"></i>
          ) : (
            <i className="fa-solid fa-cart-plus mr-2 text-2xl"></i>
          )}
          add to cart
        </button>
      </div>
    </>
  );
};

export default PlantPurchaseOptions;
