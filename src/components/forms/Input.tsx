import { useLang } from '@hooks/useLang'
import Types from 'prop-types'

const Input = ({
  id,
  label,
  labelStyles = 'text-sm mb-1',
  containerStyles,
  type = 'text',
  placeholder = ' ',
  register,
  errors,
  required
}) => {
  const { t } = useLang()

  return (
    <div
      className={`w-full flex flex-col justify-start items-start ${containerStyles}`}
    >
      <label
        htmlFor={id}
        className={`
          ${labelStyles}
          ${errors[id] ? 'text-red-400' : 'text-gray-600'}
        `}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id, { required })}
        className={`
          w-full border text-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:text-blue
          ${errors[id] ? 'focus:border-red-400' : 'focus:border-blue'}
          ${errors[id] ? 'border-red-400' : 'border-gray-400'}
          ${errors[id] ? 'text-red-400' : 'text-blue'}
        `}
      />
      {errors[id] && (
        <p className="text-red-400 text-sm pl-2">
          {errors[id]?.type === 'required' &&
            t('errors.required', { name: label })}
        </p>
      )}
    </div>
  )
}

Input.propTypes = {
  id: Types.string,
  label: Types.string,
  labelStyles: Types.string,
  containerStyles: Types.string,
  type: Types.string,
  placeholder: Types.string,
  register: Types.func,
  errors: Types.object,
  required: Types.bool
}

export default Input
