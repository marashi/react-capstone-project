import SessionContext from "contexts/SessionContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToPlantsIfSignedIn = ({ children }) => {
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== null) {
      navigate("/plants");
      return;
    }
  }, [username]);

  return children;
};

export default RedirectToPlantsIfSignedIn;
