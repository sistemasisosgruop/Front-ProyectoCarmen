const FormTextArea = ({
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
      className={`flex flex-col justify-start items-start ${
        extraClasses ?? ''
      }`}
    >
      <label htmlFor={name} className={`${labelColor ?? ''} text-sm mb-1`}>
        {label}
      </label>
      <textarea
        {...register(name, rules)}
        rows={5}
        className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 resize-none focus:outline-none focus:border-blue focus:text-blue"
      ></textarea>
      <span>
        {errors[name]?.type === 'required' && 'El campo es requerido'}
      </span>
    </div>
  )
}

export default FormTextArea
