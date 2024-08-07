import { useState } from "react";
import Field from "./Field";

const AuthForm = ({ fields, submitButtonText }) => {
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  return (
    <div className="flex flex-col bg-white border border-slate-200 rounded-lg m-4 p-4 font-lato">
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
      <button className="bg-emerald-700 text-white rounded-lg py-2 mt-4">
        {submitButtonText}
      </button>
    </div>
  );
};

export default AuthForm;
