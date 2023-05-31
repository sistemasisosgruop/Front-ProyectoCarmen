import { GrSubtractCircle } from 'react-icons/gr'
import { IoMdAddCircleOutline } from 'react-icons/io'

const NumberPicker = ({
  value,
  onChangeValue,
  label,
  htmlFor,
  showIcon,
  icon,
  iconPosition,
  textStyle
}) => {
  const increaseValue = () => {
    onChangeValue(value + 1)
  }

  const decreaseValue = () => {
    onChangeValue(value - 1)
  }

  return (
    <div className="w-full flex flex-col justify-start items-start">
      <label
        htmlFor={htmlFor}
        className={`text-gray-600 mb-1 text-sm flex justify-start items-center gap-2`}
      >
        <>
          {showIcon !== undefined && icon}
          <span className={textStyle}>{label}</span>
          {showIcon !== undefined && iconPosition === 'right' && icon}
        </>
      </label>
      <div className="w-full flex justify-start items-start gap-2">
        {value > 1 && (
          <button
            type="button"
            onClick={decreaseValue}
            className="text-gray-600"
          >
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
