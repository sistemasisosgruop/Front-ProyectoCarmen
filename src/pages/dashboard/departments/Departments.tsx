import Heading from '@components/Heading'
import AdminLayout from '@layouts/AdminLayout'
import AdminSection from '@layouts/AdminSection'
import DepartmentList from './components/DepartmentList'
import AddDepartmentModal from './components/AddDepartmentModal'
import Input from '@forms/Input'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import { useCreateDepartment } from '@hooks/useCreateDepartment'
import { useForm } from 'react-hook-form'

function Departments() {
  const createDepartment = useCreateDepartment()
  const { register, formState: { errors } } = useForm()

  return (
    <>
      <AdminLayout title="Registro de camas">
        <Heading title="Departamentos" />

        <AdminSection>
          <article className="flex flex-col justify-between items-end gap-4 mb-8 sm:flex-row">
            <div>
              <Input
                name='seach'
                label='Buscar cliente...'
                register={register}
                errors={errors}
                showIcon
                icon={AiOutlineSearch}
              />
            </div>

            <button
              type="button"
              onClick={createDepartment.onOpen}
              className="bg-orange px-6 py-2 rounded-xl text-white font-bold flex justify-center items-center gap-2 hover:bg-opacity-90"
            >
              <span>Agregar</span>
              <IoMdAdd size={18} />
            </button>
          </article>

          <DepartmentList />
        </AdminSection>
      </AdminLayout>

      <AddDepartmentModal />
    </>
  )
}

export default Departments
