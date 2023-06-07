import { useLang } from '@hooks/useLang'
import Types from 'prop-types'

const Textarea = ({
  id,
  label,
  labelStyles = 'text-gray-600 text-sm mb-1',
  containerStyles,
  register,
  required,
  errors
}) => {
  const { t } = useLang()

  return (
    <div
      className={`
        flex flex-col justify-start items-start
        ${containerStyles}
      `}
    >
      <label
        htmlFor={id}
        className={`
          inlibe-block
          ${labelStyles}
          ${errors[id] ? 'text-red-400' : ''}
        `}
      >
        {label}
      </label>
      <textarea
        id={id}
        {...register(id, { required })}
        rows={5}
        className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 resize-none focus:outline-none focus:border-blue focus:text-blue"
      ></textarea>
      {errors[id] && (
        <p className="text-red-400 text-sm ml-2">
          {errors[id]?.type === 'required' &&
            t('errors.required', { name: label })}
        </p>
      )}
    </div>
  )
}

Textarea.propTypes = {
  id: Types.string,
  label: Types.string,
  labelStyles: Types.string,
  containerStyles: Types.string,
  register: Types.func,
  errors: Types.object,
  required: Types.bool
}

export default Textarea
