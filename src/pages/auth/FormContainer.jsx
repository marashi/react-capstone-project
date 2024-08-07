const FormContainer = ({ children }) => {
  return (
    <div className="flex">
      <div className="relative hidden md:flex">
        <img
          className="h-screen object-cover"
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
        />
        <div className="absolute top-0 left-o w-full h-full bg-black/10"></div>
        <div className="absolute top-0 left-o w-full h-full bg-green-800/30"></div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen bg-green-50 flex-1">
        <div className="flex flex-col items-center mx-2 my-8">
          <img
            className="w-16 mb-2"
            src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
          />
          <div className="font-playfair text-emerald-800 text-4xl">
            Rica's Plants
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
