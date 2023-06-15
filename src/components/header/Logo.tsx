import { Link } from 'react-router-dom'

interface Props {
  isScrolled: boolean
}

function Logo({ isScrolled }: Props) {
  return (
    <Link to="/" className="flex flex-col md:ml-16 xl:ml-32">
      <img
        src="/logo.png"
        alt="logo carmen - agencia de viajes y turismo"
        className={isScrolled ? 'h-16 xl:h-16' : 'h-16 xl:h-24'}
      />
    </Link>
  )
}

export default Logo
