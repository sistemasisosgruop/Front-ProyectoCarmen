import { IconType } from 'react-icons'

interface Props {
  text: string
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
  icon,
  position = 'right',
  extraClasses,
  onClick,
  ...props
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full ${background} ${textColor} px-6 py-2 rounded-xl text-center font-bold flex justify-center items-center gap-2 hover:bg-opacity-90 sm:w-auto ${
        extraClasses ?? ''
      }`}
      {...props}
    >
      {showIcon !== undefined && position === 'left' && icon}
      <span>{text}</span>
      {showIcon !== undefined && position === 'right' && icon}
    </button>
  )
}

export default Button
