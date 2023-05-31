
const Button = ({
  text,
  background = 'bg-blue',
  textColor = 'text-white',
  isIcon,
  icon,
  position = 'right',
  extraClasses,
  onClick
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full ${background} ${textColor} px-6 py-2 rounded-xl text-center font-bold flex justify-center items-center gap-2 hover:bg-opacity-90 sm:w-auto ${
        extraClasses ?? ''
      }`}
    >
      {isIcon !== undefined && position === 'left' && icon}
      <span>{text}</span>
      {isIcon !== undefined && position === 'right' && icon}
    </button>
  )
}

export default Button
