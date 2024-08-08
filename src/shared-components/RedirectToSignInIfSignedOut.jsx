import SessionContext from "contexts/SessionContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToSignInIfSignedOut = ({ children }) => {
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  console.log(username);

  useEffect(() => {
    if (username === null) {
      navigate("/");
      return;
    }
  }, [username]);

  return children;
};

export default RedirectToSignInIfSignedOut;
