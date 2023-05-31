const MyFormInput = ({
  register,
  rules,
  errors,
  name,
  label,
  labelColor = 'text-gray-600',
  extraClasses
}) => {
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
        type="text"
        placeholder=""
        onBlur={() => {
          register(name, rules)
        }}
        className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
      />
      <span>
        {errors[name]?.type === 'required' && 'El campo es requerido'}
      </span>
    </div>
  )
}

export default MyFormInput
