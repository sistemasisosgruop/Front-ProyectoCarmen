import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface Props {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  required: boolean
  name: string
  label?: string
  labelColor?: string
  extraClasses?: string
}
const FormTextArea = ({
  register,
  errors,
  required,
  name,
  label,
  labelColor = 'text-gray-600',
  extraClasses
}: Props) => {
  return (
    <div className={`flex flex-col justify-start items-start ${extraClasses ?? ''}`}>
      <label htmlFor={name} className={`${labelColor ?? ''} text-sm mb-1`}>
        {label}
      </label>
      <textarea
        {...register(name, { required })}
        rows={5}
        className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 resize-none focus:outline-none focus:border-blue focus:text-blue"
      ></textarea>
      <span>{errors[name]?.type === 'required' && 'El campo es requerido'}</span>
    </div>
  )
}

export default FormTextArea
