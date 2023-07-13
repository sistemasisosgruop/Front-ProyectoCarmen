import { useForm } from 'react-hook-form'
import Button from '@components/Button'
import Input from '@forms/Input'

interface Props {
  closeModal: () => void
}

function AddRole({ closeModal }: Props) {
  const {
    register,
    formState: { errors }
  } = useForm()

  return (
    <form>
      <Input
        id="roleName"
        label="Ej: area_jefe, area_usuario"
        register={register}
        errors={errors}
        required={true}
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
