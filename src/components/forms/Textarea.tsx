import { type KeyboardEvent } from 'react'
import { useLang } from '@hooks/useLang'
import { type FieldErrors, type FieldValues, type UseFormRegister } from 'react-hook-form'

interface Props {
  name: string
  label?: string
  labelStyles?: string
  containerStyles?: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  required: boolean
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void
}

const Textarea = ({
  name,
  label,
  labelStyles = 'text-gray-600 text-sm mb-1',
  containerStyles,
  register,
  errors,
  required,
  onKeyDown
}: Props) => {
  const { t } = useLang()

  return (
    <div
      className={`
        flex flex-col justify-start items-start
        ${containerStyles ?? ''}
      `}
    >
      <label
        htmlFor={name}
        className={`
          inlibe-block
          ${labelStyles}
          ${errors[name] ? 'text-red-400' : ''}
        `}
      >
        {label}
      </label>
      <textarea
        id={name}
        {...register(name, { required })}
        onKeyDown={onKeyDown}
        rows={5}
        className="w-full border border-gray-400 text-gray-600 rounded-xl px-4 py-2 resize-none focus:outline-none focus:border-blue focus:text-blue"
      />
      {errors[name] && (
        <p className="text-red-400 text-sm ml-2">
          {errors[name]?.type === 'required' && t('errors.required', { name: label })}
        </p>
      )}
    </div>
  )
}

export default Textarea
