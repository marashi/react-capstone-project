import clsx from "clsx";
import { useState } from "react";

const POT_COLORS = {
  stone: "bg-stone-200",
  slate: "bg-slate-300",
  sky: "bg-sky-700",
  black: "bg-gray-600",
  white: "bg-gray-50",
  amber: "bg-amber-600",
};

const getRandomElement = (array) => Math.floor(Math.random() * array.length);

const PlantItem = ({ plant }) => {
  const [imageIdx, setImageIdx] = useState(() =>
    getRandomElement(plant.images)
  );

  return (
    <div className="p-4 rounded-lg my-8 mx-4">
      <img
        src={plant.images[imageIdx]?.src}
        alt={plant.name}
        className="w-[240px] h-[320px] object-cover rounded-lg"
      />
      <div className="flex justify-between my-3">
        <div className="text-xl font-playfair text-emerald-700">
          {plant.name}
        </div>
        <div className="text-lg text-emerald-600">${plant.price}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-slate-500">
          {plant.images[imageIdx].pot_color}
        </div>
        <div className="flex">
          {plant.images.map((image, idx) => (
            <button
              key={idx}
              className="m-1"
              onMouseEnter={() => setImageIdx(idx)}
            >
              <div
                className={clsx(
                  POT_COLORS[image.pot_color],
                  idx === imageIdx &&
                    "outline outline-emerald-600 outline-offset-1",
                  "rounded-full w-3 h-3 border border-slate-300"
                )}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
