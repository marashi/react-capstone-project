import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import * as userService from "services/user";

const SignUpPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <FormContainer>
      <div className="text-red-700 my-1 text-sm font-loto">{error}</div>
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
          {
            label: "confirm password",
            type: "password",
          },
        ]}
        submitButtonText="create an account"
        onSubmit={async (values) => {
          if (values.username.length < 4) {
            setError("Username too short");
            return;
          }
          if (values.password.length < 4) {
            setError("password too short");
            return;
          }
          if (values.password !== values["confirm password"]) {
            setError("passwords do not match");
            return;
          }
          const response = await userService.createUser({
            username: values.username,
            password: values.password,
          });
          if (response.status === 201) {
            setError("");
            navigate("/", {
              state: {
                accountCreated: true,
              },
            });
          } else {
            const data = await response.json();
            setError(data?.error ?? "Unknown error");
          }
        }}
      />
      <Link to="/" className="text-green-600 text-sm underline">
        Sign-in
      </Link>
    </FormContainer>
  );
};

export default SignUpPage;
