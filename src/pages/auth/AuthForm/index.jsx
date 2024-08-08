import { useState } from "react";
import Field from "./Field";

const AuthForm = ({ fields, submitButtonText, onSubmit }) => {
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  const [loading, setLoading] = useState(false);

  return (
    <form
      className="flex flex-col bg-white border border-slate-200 rounded-lg m-4 p-4 font-lato"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit(values);
        setLoading(false);
      }}
    >
      {fields.map((field) => {
        return (
          <Field
            field={field}
            values={values}
            setValues={setValues}
            onChange={(e) =>
              setValues({
                ...values,
                [field.label]: e.target.value,
              })
            }
            key={field.label}
          />
        );
      })}
      <button className="bg-emerald-700 text-white rounded-lg py-2 mt-4 relative">
        {submitButtonText}
        {loading && (
          <div className="absolute top-0 right-3 text-xl h-full flex items-center text-green-300">
            <i className="fa-solid fa-spinner animate-spin"></i>
          </div>
        )}
      </button>
    </form>
  );
};

export default AuthForm;
