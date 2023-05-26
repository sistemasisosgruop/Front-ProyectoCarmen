import { GrSubtractCircle } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";

interface Props {
  value: number;
  onChangeValue: (newValue: number) => void;
  label: string;
  htmlFor: string;
  showIcon?: boolean;
  icon?: JSX.Element;
  iconPosition?: string;
  textStyle?: string;
}

const NumberPicker = ({
  value,
  onChangeValue,
  label,
  htmlFor,
  showIcon,
  icon,
  iconPosition,
  textStyle,
}: Props): JSX.Element => {
  const increaseValue = (): void => {
    onChangeValue(value + 1);
  };

  const decreaseValue = (): void => {
    onChangeValue(value - 1);
  };

  return (
    <div className="w-full flex flex-col justify-start items-start">
      <label
        htmlFor={htmlFor}
        className={`text-gray-600 mb-1 text-sm flex justify-start items-center gap-2`}
      >
        <>
          {showIcon !== undefined && icon}
          <span className={textStyle}>{label}</span>
          {showIcon !== undefined && iconPosition === "right" && icon}
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
  );
};

export default NumberPicker;
