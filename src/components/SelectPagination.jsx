export const SelectPagination = ({
  options = [],
  onChangeFunction,
  children,
  initialValue,
}) => {
  const handleChange = (e) => {
    onChangeFunction(e.target.value);
  };

  return (
    <div className="flex justify-center items-center mx-auto my-4">
      <select
        className="w-fit p-5 bg-primary text-secondary p-3 rounded-lg text-black"
        onChange={handleChange}
        value={initialValue}
      >
        <option disabled className="text-gray-500">
          {children}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
