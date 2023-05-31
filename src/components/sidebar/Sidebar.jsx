import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import { FiSettings } from 'react-icons/fi'
import { HiOutlineUsers } from 'react-icons/hi'
import { IoMdStats } from 'react-icons/io'
import { TbPlane } from 'react-icons/tb'
import { BiBed, BiBriefcaseAlt2, BiCalendar } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'


const Sidebar = ({ closeSidebar }) => {
  return (
    <aside className="w-full bg-white fixed top-0 left-0 z-10 px-6 py-4 flex justify-between items-center border-b border-b-gray-200 shadow xl:relative xl:w-80 xl:h-screen xl:items-start">
      <nav className="w-full flex flex-col justify-center items-center gap-8">
        <article className="w-full flex justify-between items-center gap-4 xl:justify-center xl:items-center">
          <Link to="/admin" className="">
            <img src="/logo.png" alt="logo" className="h-24" />
          </Link>
          <button
            type="button"
            onClick={closeSidebar}
            className="border-2 border-blue rounded-xl p-1 flex justify-center items-center text-blue xl:hidden"
          >
            <AiOutlineClose size={24} />
          </button>
        </article>

        <ul className="w-full space-y-2">
          <hr className="w-full border-none bg-gray-200 py-[0.5px] my-4" />
          <li>
            <NavLink
              href="/admin/calendario"
              label="Calendario"
              icon={<BiCalendar size={18} />}
            />
          </li>
          <hr className="w-full border-none bg-gray-200 py-[0.5px] my-4" />
          <li>
            <NavLink
              href="/admin/vuelos"
              label="Vuelos"
              icon={<TbPlane size={18} />}
            />
          </li>
          <li>
            <NavLink
              href="/admin/camas"
              label="Camas"
              icon={<BiBed size={18} />}
            />
          </li>
          <li>
            <NavLink
              href="/admin/paquetes-turisticos"
              label="Paquetes turísticos"
              icon={<BiBriefcaseAlt2 size={18} />}
            />
          </li>
          <li>
            <NavLink
              href="/admin/usuarios"
              label="Usuario"
              icon={<HiOutlineUsers size={18} />}
            />
          </li>
          <li>
            <NavLink
              href="/admin/estadisticas"
              label="Estadísticas"
              icon={<IoMdStats size={18} />}
            />
          </li>
          <hr className="w-full border-none bg-gray-200 py-[0.5px] my-4" />
          <li>
            <NavLink
              href="/admin/configuracion"
              label="Configuración"
              icon={<FiSettings size={18} />}
            />
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
