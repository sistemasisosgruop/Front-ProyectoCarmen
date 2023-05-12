interface Props {
  text: string
  background?: string
  textColor?: string
  isIcon?: boolean
  icon?: JSX.Element
  position?: string
}

const Button = ({
  text,
  background = 'bg-blue',
  textColor = 'text-white',
  isIcon,
  icon,
  position = 'right'
}: Props): JSX.Element => {
  return (
    <button
      type='button'
      className={`${background} ${textColor} px-6 py-2 rounded-xl text-center font-bold flex justify-center items-center gap-2 hover:bg-opacity-90`}
    >
      {isIcon !== undefined && position === 'left' && icon}
      <span>
        {text}
      </span>
      {isIcon !== undefined && position === 'right' && icon}
    </button>
  )
}

export default Button
