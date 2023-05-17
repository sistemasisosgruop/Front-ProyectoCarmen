interface OptionProp {
  text: string
  value: string
}

interface Props {
  label?: string
  name: string
  showIcon?: boolean
  icon?: JSX.Element
  iconPosition?: string
  options: OptionProp[]
  placeholder?: string
}

const FormSelect = ({
  label,
  name,
  showIcon,
  icon,
  iconPosition,
  options,
  placeholder
}: Props): JSX.Element => {
  const formatedPlaceholder = placeholder?.toLowerCase().replace(/ /g, '-') ?? ''

  return (
    <div className='w-full flex flex-col justify-start items-start gap-1'>
      {label !== undefined && (
        <label htmlFor={name} className='text-gray-400 flex justify-center items-center gap-2'>
          {showIcon !== undefined && iconPosition === 'left' && (
            <span>{icon}</span>
          )}
          <span className='text-base font-bold text-gray-800 lg:text-lg whitespace-nowrap'>
            {label}
          </span>
          {showIcon !== undefined && iconPosition === 'right' && (
            <span>{icon}</span>
          )}
        </label>
      )}
      <select
        name={name}
        required
        className='w-full bg-transparent text-gray-600 py-2 px-6 border border-gray-400 rounded-xl focus:border-blue'
        defaultValue={formatedPlaceholder}
      >
        {placeholder !== undefined && (
          <option disabled value={formatedPlaceholder}>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} className='w-full'>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FormSelect