import Types from 'prop-types'

const Button = ({
  text,
  type = 'button',
  background = 'bg-blue',
  textColor = 'text-white',
  showIcon,
  icon,
  position = 'right',
  extraClasses,
  onClick
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full ${background} ${textColor} px-6 py-2 rounded-xl text-center font-bold flex justify-center items-center gap-2 hover:bg-opacity-90 sm:w-auto ${
        extraClasses ?? ''
      }`}
    >
      {showIcon !== undefined && position === 'left' && icon}
      <span>{text}</span>
      {showIcon !== undefined && position === 'right' && icon}
    </button>
  )
}

Button.propTypes = {
  text: Types.string.isRequired,
  type: Types.string,
  background: Types.string,
  textColor: Types.string,
  showIcon: Types.bool,
  icon: Types.element,
  position: Types.string,
  extraClasses: Types.string,
  onClick: Types.func
}

export default Button
