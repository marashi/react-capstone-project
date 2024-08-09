import { useEffect, useState } from "react";
import NavBar from "shared-components/NavBar";
import * as plantService from "services/plant";
import { useParams } from "react-router-dom";
import LoadingSpinner from "shared-components/NavBar/LoadingSpinner";
import PlantInfoSection from "./PlantInfoSection";

const PlantShowPage = () => {
  const [plant, setPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { plantId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlantById(plantId);
      setPlant(await response.json());
      setIsLoading(false);
    })();
  }, [plantId]);

  return (
    <>
      <NavBar />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex justify-center bg-green-50 min-h-screen font-lato">
          <div className="w-full max-w-5xl px-8 py-24">
            <PlantInfoSection plant={plant} />
          </div>
        </div>
      )}
    </>
  );
};

export default PlantShowPage;
