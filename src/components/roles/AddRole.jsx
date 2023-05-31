import { useForm } from 'react-hook-form'
import Button from '@components/Button'
import MyFormInput from '@forms/FormInput'


const AddRole = ({ closeModal }) => {
  const {
    register,
    formState: { errors }
  } = useForm()

  return (
    <form>
      <MyFormInput
        register={register}
        errors={errors}
        rules={{ required: true }}
        label="Ej: area_jefe, area_usuario"
        name="roleName"
      />
      <article className="my-4">
        <h4 className="text-dark text-lg font-dark">Permisos</h4>
        <div className="flex justify-start items-center gap-2">
          <label htmlFor="createBeds">
            <input type="checkbox" {...register('createBeds')} className="" />
            Crear camas
          </label>
        </div>
        <div className="flex justify-start items-center gap-2">
          <input type="checkbox" name="createBeds" className="" />
          <label htmlFor="users">Usuario</label>
        </div>
        <div className="flex justify-start items-center gap-2">
          <input type="checkbox" name="createBeds" className="" />
          <label htmlFor="createBeds">Visualizar reservas</label>
        </div>
      </article>
      <article className="flex justify-between items-center">
        <Button
          text="Cancelar"
          background="bg-white border border-gray-400"
          textColor="text-dark"
          onClick={closeModal}
        />

        <Button text="Guardar" background="bg-orange" />
      </article>
    </form>
  )
}

export default AddRole
