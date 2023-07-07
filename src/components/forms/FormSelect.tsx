import { type IconType } from 'react-icons'

interface Props {
  label: string
  labelStyles?: string
  name: string
  showIcon?: boolean
  icon?: IconType
  iconPosition?: string
  options?: Array<{
    text: string
    value: string
  }>
  placeholder?: string
}

const FormSelect = ({
  label,
  labelStyles = 'text-base font-bold text-gray-800',
  name,
  showIcon,
  icon: Icon,
  iconPosition,
  options,
  placeholder
}: Props) => {
  const formatedPlaceholder =
    placeholder?.toLowerCase().replace(/ /g, '-') ?? ''

  return (
    <div className="w-full flex flex-col justify-start items-start gap-1">
      {label !== undefined && (
        <label
          htmlFor={name}
          className="text-gray-400 flex justify-center items-center gap-2"
        >
          {showIcon !== undefined && iconPosition === 'left' && (
            <Icon size={18} />
          )}
          <span className={`${labelStyles ?? ''} lg:text-lg whitespace-nowrap`}>
            {label}
          </span>
          {showIcon !== undefined && iconPosition === 'right' && (
            <Icon size={18} />
          )}
        </label>
      )}
      <select
        name={name}
        required
        className="w-full bg-transparent text-gray-600 py-2 px-6 border border-gray-400 rounded-xl focus:border-blue"
        defaultValue={formatedPlaceholder}
      >
        {placeholder && (
          <option disabled value={formatedPlaceholder}>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} className="w-full">
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FormSelect
