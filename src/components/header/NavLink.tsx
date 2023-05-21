import { NavLink as NavLinkReactRouter } from 'react-router-dom'

interface Props {
  path: string
  text: string
  icon: JSX.Element
  customClass: string
}

// flex justify-center items-center gap-2 hover:text-orange
// ${customClass}
const NavLink = ({
  path,
  text,
  icon,
  customClass,
  ...props
}: Props): JSX.Element => {
  return (
    <NavLinkReactRouter
      {...props}
      to={path}
      className={({ isActive }) => isActive ? `text-orange pointer-events-none flex justify-center items-center gap-2 hover:text-orange ${customClass ?? ''}` : `flex justify-center items-center gap-2 hover:text-orange ${customClass ?? ''}`}
    >
      {icon}
      <span>
        {text}
      </span >
    </NavLinkReactRouter >
  )
}
export default NavLink
