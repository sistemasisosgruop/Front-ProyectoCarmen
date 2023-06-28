import { useModal } from '@hooks/useModal'
import Heading from '@components/Heading'
import AdminLayout from '@layouts/AdminLayout'
import AdminSection from '@layouts/AdminSection'
import DepartmentList from './components/DepartmentList'
import AddDepartmentModal from './components/AddDepartmentModal'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

function Departments() {
  const createModal = useModal()

  return (
    <>
      <AdminLayout title="Registro de camas">
        <Heading title="Departamentos" />

        <AdminSection>
          <article className="flex flex-col justify-between items-end gap-4 mb-8 sm:flex-row">
            <div className="relative w-full">
              <label
                htmlFor="searchClient"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600"
              >
                <AiOutlineSearch size={18} />
              </label>
              <input
                type="search"
                name="searchClient"
                placeholder="Buscar cliente..."
                className="w-full pl-8 pr-6 py-2 rounded-xl border border-gray-200 text-base text-gray-600 focus:outline-none focus:border-blue focus:text-blue sm:w-auto"
              />
            </div>

            <button
              type="button"
              onClick={createModal.onOpen}
              className="bg-orange px-6 py-2 rounded-xl text-white font-bold flex justify-center items-center gap-2 hover:bg-opacity-90"
            >
              <span>Agregar</span>
              <IoMdAdd size={18} />
            </button>
          </article>

          <DepartmentList />
        </AdminSection>
      </AdminLayout>

      <AddDepartmentModal createModal={createModal} />
    </>
  )
}

export default Departments
