const MyFormInput = ({
  type = 'text',
  name,
  value,
  handleChange,
  label,
  labelColor = 'text-gray-600',
  extraClasses
}) => {
  const handleInputChange = event => {
    handleChange(event)
  }

  return (
    <div
      className={`w-full flex flex-col justify-start items-start ${
        extraClasses ?? ''
      }`}
    >
      <label htmlFor={name} className={`${labelColor ?? ''} text-sm mb-1`}>
        {label}
      </label>
      <input
        type={type}
        placeholder=""
        value={value}
        onChange={handleInputChange}
        className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
      />
    </div>
  )
}

export default MyFormInput
