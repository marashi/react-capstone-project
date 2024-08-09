import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import * as plantService from "services/plant";
import { useEffect, useState } from "react";

const PlantListPage = () => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
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
      });
  }, []);

  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
