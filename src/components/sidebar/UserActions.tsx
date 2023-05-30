import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

const UserActions = (): JSX.Element => {
  return createPortal(
    <section className="fixed top-12 right-8 z-20 bg-white rounded-xl p-4 border border-gray-400">
      <ul className="w-full">
        <li>
          <h4 className="text-lg text-dark font-bold">
            Camila Raquel Días Rosas
          </h4>
          <span className="text-gray-600 text-sm">Administrador</span>
        </li>
        <hr className="border-none w-full bg-gray-200 py-[0.5px] my-1" />
        <li>
          <Link
            to="/admin/configuracion/usuario"
            className="w-full inline-block text-dark px-4 py-2 rounded-xl hover:bg-turquoise hover:text-white"
          >
            Configuración
          </Link>
        </li>
        <hr className="border-none w-full bg-gray-200 py-[0.5px] my-1" />
        <li>
          <button
            type="button"
            className="w-full text-dark text-start px-4 py-2 rounded-xl hover:bg-turquoise hover:text-white"
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </section>,
    document.getElementById('portal') ?? document.createDocumentFragment()
  )
}

export default UserActions
