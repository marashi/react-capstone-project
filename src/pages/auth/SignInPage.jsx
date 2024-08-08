import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as userService from "services/user";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import SessionContext from "contexts/SessionContext";
import { useContext } from "react";

const SignInPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const sessionContext = useContext(SessionContext);

  console.log(location);

  return (
    <FormContainer>
      <div className="text-red-700 my-1 text-sm font-loto">{error}</div>
      {location.state?.accountCreated && (
        <div className="p-4 mb-8 mt-2 bg-green-200 border border-emerald-500 rounded-lg text-emerald-700">
          Account created successfully, please sign in.
        </div>
      )}
      <AuthForm
        fields={[
          {
            label: "username",
            type: "text",
          },
          {
            label: "password",
            type: "password",
          },
        ]}
        submitButtonText="sign in"
        onSubmit={async (values) => {
          const response = await userService.createSession({
            username: values.username,
            password: values.password,
          });
          if (response.status === 201) {
            console.log("Sign in successful");
            const data = await response.json();
            sessionContext.signIn(data["capstone_session_token"]);
            setError("");
          } else {
            const data = await response.json();
            setError(data?.error ?? "Unknown error");
          }
        }}
      />
      <Link to="/sign-up" className="text-green-600 text-sm underline">
        Create an account
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
