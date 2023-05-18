import type { FieldErrors, FieldValues, RegisterOptions } from 'react-hook-form'

interface Rules {
  required: boolean
}

interface Props {
  register: (name: string, options?: RegisterOptions) => void
  rules: Rules
  errors: FieldErrors<FieldValues>
  name: string
  label: string
  extraClasses?: string
}

const FormTextArea = ({
  register,
  rules,
  errors,
  name,
  label,
  extraClasses
}: Props): JSX.Element => {
  return (
    <div className={`flex flex-col justify-start items-start ${extraClasses ?? ''}`}>
      <label
        htmlFor={name}
        className='text-gray-600 text-sm mb-1'
      >
        {label}
      </label>
      <textarea
        onBlur={() => { register(name, rules) }}
        rows={5}
        className='w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 resize-none focus:outline-none focus:border-blue focus:text-blue'
      ></textarea>
      <span>
        {errors[name]?.type === 'required' && 'El campo es requerido'}
      </span>
    </div>
  )
}

export default FormTextArea
