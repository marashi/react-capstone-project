import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import * as plantService from "services/plant";
import { useEffect, useState } from "react";
import PlantItem from "./PlantItem";

const PlantListPage = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    plantService
      .getPlants()
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Could not fetch plants");
        }
      })
      .then((data) => {
        console.log(data);
        setPlants(data);
      })
      .catch((e) => {
        console.error(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="bg-green-50 min-h-screen">
        {isLoading ? (
          <div className="pt-40">
            <i className="fa-solid fa-spinner animate-spin text-2xl text-emerald-700 flex justify-center"></i>
          </div>
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl">
              <h1 className="text-3xl font-bold text-emerald-700 font-playfair mb-6 px-4">
                Plants in Stock
              </h1>
              <div className="flex flex-wrap justify-center">
                {plants.map((plant) => (
                  <PlantItem key={plant.id} plant={plant} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
