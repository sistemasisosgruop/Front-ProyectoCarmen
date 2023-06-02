import Types from 'prop-types'

const FormInput = ({
  name,
  label,
  type = 'text',
  placeholder,
  register,
  rules,
  errors,
  labelColor = 'text-gray-600',
  extraClasses
}) => {
  return (
    <div
      className={`w-full flex flex-col justify-start items-start ${extraClasses}`}
    >
      <article className="w-full flex justify-between items-center">
        <label htmlFor={name} className={`${labelColor} text-sm mb-1`}>
          {label}
        </label>
        {errors[name]?.type === 'required' && (
          <span className="text-red-400 text-sm">{errors[name]?.message}</span>
        )}
        {errors[name]?.type === 'minLength' && (
          <span className="text-red-400 text-sm">
            The min lenght is 10 characters
          </span>
        )}
      </article>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue focus:text-blue"
      />
    </div>
  )
}

FormInput.propTypes = {
  label: Types.string.isRequired,
  name: Types.string.isRequired,
  type: Types.string,
  placeholder: Types.string,
  register: Types.func.isRequired,
  rules: Types.object.isRequired,
  errors: Types.object,
  labelColor: Types.string,
  extraClasses: Types.string
}

export default FormInput
