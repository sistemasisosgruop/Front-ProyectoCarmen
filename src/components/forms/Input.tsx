import { useState } from 'react'
import type { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { type IconType } from 'react-icons'
import s from '@assets/input.module.css'

type InputType = 'text' | 'number' | 'email' | 'password'

interface Props {
  name: string
  label?: string | undefined
  type?: InputType
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  required?: boolean
  showIcon?: boolean
  icon?: IconType
}

function Input({
  name,
  label,
  type = 'text',
  register,
  errors,
  required,
  showIcon,
  icon: Icon
}: Props) {
  const [inputClicked, setInputClicked] = useState(false)

  return (
    <div
      className={`
        w-full flex justify-start items-center gap-1 border rounded-xl
        ${inputClicked ? 'border-blue' : 'border-gray-400'}
        ${errors[name] ? 'border-red-400' : ''}
        ${errors[name] ? 'text-red-400' : 'text-blue'}
        ${errors[name] ? 'focus:border-red-400' : 'focus:border-blue'}
      `}
    >
      {showIcon && Icon && <Icon size={20} className='ml-2' />}
      <div className={`relative w-full ${s.wrapper}`}>
        <input
          type={type}
          id={name}
          placeholder=' '
          {...register(name, { required })}
          onClick={() => setInputClicked(true)}
          onBlur={() => setInputClicked(false)}
          className={`
            pt-[1.05rem] pr-4 pb-[0.2rem]
            ${showIcon ? 'pl-2' : 'pl-4'}
            ${s.input}
          `}
        />
        <label
          htmlFor={name}
          className={`
            ${s.label}
            ${showIcon ? 'left-2' : 'left-4'}
            ${errors[name] ? 'text-red-400' : 'text-gray-600'}
          `}
        >
          {label}
        </label>
      </div>
    </div>
  )
}

export default Input
