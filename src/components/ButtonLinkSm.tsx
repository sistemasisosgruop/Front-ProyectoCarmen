import { Link } from 'react-router-dom'

interface Props {
  to: string
  text: string
  background?: string
  textColor?: string
  showIcon?: boolean
  icon?: JSX.Element
  iconPosition?: string
  extraClasses?: string
}

function ButtonLinkSm({
  to,
  text,
  background = 'bg-turquoise',
  textColor = 'text-white',
  showIcon,
  icon,
  iconPosition,
  extraClasses
}: Props) {
  return (
    <Link
      to={to}
      className={`
        font-bold rounded-xl px-4 py-1 flex justify-center items-center gap-2 hover:bg-opacity-90
        ${background ?? ''}
        ${textColor ?? ''}
        ${extraClasses ?? ''}
      `}
    >
      {showIcon !== undefined && iconPosition === 'left' && icon}
      <span>{text}</span>
      {showIcon !== undefined && iconPosition === 'right' && icon}
    </Link>
  )
}

export default ButtonLinkSm
