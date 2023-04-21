import { Link } from 'react-router-dom'

interface Props {
  path: string
  text: string
  icon: JSX.Element
  customClass: string
}

const NavLink = ({ path, text, icon, customClass }: Props): JSX.Element => {
  return (
    <Link to={path} className={`flex justify-center items-center gap-2 hover:text-orange ${customClass}`}>
      {icon}
      <span>
        {text}
      </span>
    </Link>
  )
}
export default NavLink

