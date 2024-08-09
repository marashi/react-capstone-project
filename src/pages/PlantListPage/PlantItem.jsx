import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getRandomIdx, POT_COLORS } from "shared-components/util";

const PlantItem = ({ plant }) => {
  const [imageIdx, setImageIdx] = useState(() => getRandomIdx(plant.images));

  return (
    <div className="p-4 rounded-lg my-8 mx-4">
      <Link to={`/plants/${plant.id}`}>
        <img
          src={plant.images[imageIdx]?.src}
          alt={plant.name}
          className="w-[240px] h-[320px] object-cover rounded-lg"
        />
      </Link>
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
