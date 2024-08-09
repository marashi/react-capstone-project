import { useState } from "react";
import BenefitBox from "./BenefitBox";
import PlantHeading from "./PlantHeading";
import PlantPurchaseOptions from "./PlantPurchaseOptions";
import { getRandomIdx } from "shared-components/util";

const PlantInfoSection = ({ plant }) => {
  const [imageIdx, setImageIdx] = useState(() => getRandomIdx(plant.images));
  return (
    <div className="flex flex-col md:flex-row">
      <div className="block md:hidden mb-8">
        <PlantHeading plant={plant} />
      </div>
      <div className="flex flex-col flex-1">
        <img
          src={plant.images[imageIdx].src}
          alt={plant.name}
          className="rounded-lg"
        />
        <div className="flex justify-between mt-4">
          <BenefitBox
            icon="fa-regular fa-check-circle"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
          <div className="bg-slate-300 w-px"></div>
          <BenefitBox
            icon="fa-solid fa-truck-fast"
            title="Free Shipping"
            description="Get free ground shipping on orders over $50"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 md:px-8">
        <div className="hidden md:block">
          <PlantHeading plant={plant} />
        </div>
        <p className="text-slate-500 mt-6 leading-relaxed">
          {plant.description}
        </p>
        <div>
          <PlantPurchaseOptions
            plant={plant}
            imageIdx={imageIdx}
            setImageIdx={setImageIdx}
          />
        </div>
      </div>
    </div>
  );
};

export default PlantInfoSection;
