import { Link } from 'react-router-dom'


const ButtonLinkSm = ({
  to,
  text,
  background = 'bg-turquoise',
  textColor = 'text-white',
  showIcon,
  icon,
  iconPosition,
  extraClasses
}) => {
  return (
    <Link
      to={to}
      className={`${background ?? ''} ${
        textColor ?? ''
      } font-bold rounded-xl px-4 py-1 flex justify-center items-center gap-2 hover:bg-opacity-90 ${
        extraClasses ?? ''
      }`}
    >
      {showIcon !== undefined && iconPosition === 'left' && icon}
      <span>{text}</span>
      {showIcon !== undefined && iconPosition === 'right' && icon}
    </Link>
  )
}

export default ButtonLinkSm
