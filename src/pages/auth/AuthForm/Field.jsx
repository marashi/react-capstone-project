const Field = ({ field, values, onChange }) => {
  return (
    <div className="flex flex-col my-4">
      <label htmlFor={field.label} className="text-slate-500 pl-1">
        {field.label}
      </label>
      <input
        id={field.label}
        value={values[field.label]}
        onChange={(e) => onChange(e)}
        type={field.type}
        className="bg-slate-50 border border-slate-200 rounded-lg py-1 px-2 focus:outline-emerald-600 w-64"
      />
    </div>
  );
};

export default Field;
