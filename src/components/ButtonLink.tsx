import { Link } from 'react-router-dom'

interface Props {
  to: string
  text: string
  textColor?: string
  background?: string
  showIcon?: boolean
  icon?: JSX.Element
  iconPosition?: string
  extraClasses?: string
}

const ButtonLink = ({
  to,
  text,
  background = 'bg-turquoise',
  textColor = 'text-white',
  showIcon,
  icon,
  iconPosition,
  extraClasses
}: Props): JSX.Element => {
  return (
    <Link
      to={to}
      className={`${background ?? ''} ${
        textColor ?? ''
      } font-bold rounded-xl px-6 py-2 flex justify-center items-center gap-2 hover:bg-opacity-90 ${
        extraClasses ?? ''
      }`}
    >
      {showIcon !== undefined && iconPosition === 'left' && icon}
      <span>{text}</span>
      {showIcon !== undefined && iconPosition === 'right' && icon}
    </Link>
  )
}

export default ButtonLink
