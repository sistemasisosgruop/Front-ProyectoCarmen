import { ReactElement } from 'react'
import { IconType } from 'react-icons'

interface Props {
  text: string | ReactElement
  type?: 'button' | 'submit' | 'reset' | undefined
  background?: string
  textColor?: string
  showIcon?: boolean
  icon?: IconType
  position?: string
  extraClasses?: string
  onClick?: () => void
}

function Button({
  text,
  type = 'button',
  background = 'bg-blue',
  textColor = 'text-white',
  showIcon,
  icon: Icon,
  position = 'right',
  extraClasses,
  onClick,
  ...props
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-full px-6 py-2 rounded-xl text-center font-bold flex justify-center items-center gap-2 hover:bg-opacity-90 sm:w-auto
        ${background}
        ${textColor}
        ${extraClasses ?? ''}
     `}
      {...props}
    >
      {showIcon && position === 'left' && Icon && <Icon size={18} />}
      <span>{text}</span>
      {showIcon && position === 'right' && Icon && <Icon size={18} />}
    </button>
  )
}

export default Button
