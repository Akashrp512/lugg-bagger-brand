const CustomTextarea = ({
  label,
  id,
  name,
  value,
  onChange,
  required = false,
  className,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block text-slate-gray font-semibold font-palanquin mb-1">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-100 rounded-md"
        rows="4"
        required={required}
      />
    </div>
  );
};

export default CustomTextarea;
