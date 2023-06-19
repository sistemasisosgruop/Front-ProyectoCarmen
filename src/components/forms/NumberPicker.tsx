import { IconType } from 'react-icons'
import { GrSubtractCircle } from 'react-icons/gr'
import { IoMdAddCircleOutline } from 'react-icons/io'

interface Props {
  value: number
  name?: string
  onChangeValue: (value: number) => void
  label?: string
  showIcon?: boolean
  icon?: IconType
  iconPosition?: string
  textStyle?: string
}

function NumberPicker({ value, name, onChangeValue, label, showIcon, icon: Icon, iconPosition, textStyle }: Props) {
  const increaseValue = () => {
    onChangeValue(value + 1)
  }

  const decreaseValue = () => {
    onChangeValue(value - 1)
  }

  return (
    <div className="w-full flex flex-col justify-start items-start">
      <label htmlFor={name} className={`text-gray-600 mb-1 text-sm flex justify-start items-center gap-2`}>
        <>
          {showIcon && <Icon size={18} />}
          <span className={textStyle}>{label}</span>
          {showIcon && iconPosition === 'right' && <Icon size={18} />}
        </>
      </label>
      <div className="w-full flex justify-start items-start gap-2">
        {value > 1 && (
          <button type="button" onClick={decreaseValue} className="text-gray-600">
            <GrSubtractCircle size={24} />
          </button>
        )}
        <p className="text-xl text-center text-dark font-bold">{value}</p>
        <button type="button" onClick={increaseValue} className="text-gray-600">
          <IoMdAddCircleOutline size={24} />
        </button>
      </div>
    </div>
  )
}

export default NumberPicker
