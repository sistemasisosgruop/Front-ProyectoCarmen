import { AiOutlineMinusCircle } from 'react-icons/ai'
import { IoAddCircleOutline } from 'react-icons/io5'

interface Props {
  value: number
  onChangeValue: (value: number) => void
}

function NumberPicker({
  value,
  onChangeValue
}: Props) {
  const increaseValue = () => {
    onChangeValue(value + 1)
  }

  const decreaseValue = () => {
    onChangeValue(value - 1)
  }

  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="w-full flex justify-start items-start gap-2">
        {value > 1 && (
          <button type="button" onClick={decreaseValue} className="text-gray-600">
            <AiOutlineMinusCircle size={24} />
          </button>
        )}
        <p className="text-xl text-center text-dark font-bold">{value}</p>
        <button type="button" onClick={increaseValue} className="text-gray-600">
          <IoAddCircleOutline size={24} />
        </button>
      </div>
    </div>
  )
}

export default NumberPicker
