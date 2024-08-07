import AuthForm from "./AuthForm";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center">
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
      />
    </div>
  );
};

export default SignInPage;
