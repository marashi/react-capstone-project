import clsx from "clsx";
import { POT_COLORS } from "shared-components/util";

const PlantPurchaseOptions = ({ plant, imageIdx, setImageIdx }) => {
  return (
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
  );
};

export default PlantPurchaseOptions;
