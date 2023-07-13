import Modal from '@components/Modal'
import { useGetRequest } from '@hooks/useGetRequest'
import { usePostRequest } from '@hooks/usePostRequest'
import { useCreateUserModal } from '../hooks/useCreateUserModal'
import Input from '@components/forms/Input'
import { type FieldValues, useForm, type SubmitHandler } from 'react-hook-form'

import { type RoleResponse } from 'types/role'

function AddUserModal() {
  const createModal = useCreateUserModal()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FieldValues>()
  const { data } = useGetRequest<RoleResponse>({ url: 'roles' })
  const { onSubmit } = usePostRequest({
    url: 'users',
    modal: createModal,
    successMessage: '¡El usuario fue creado correctamente!'
  })

  const onHandleSubmit: SubmitHandler<FieldValues> = (data): void => {
    onSubmit(data)
    reset()
    createModal.onClose()
  }

  const bodyContent = (
    <form className='flex flex-col gap-4'>
      <article className='flex justify-between items-center gap-4'>
        <Input
          name='firstName'
          label='Nombres completos'
          register={register}
          required
          errors={errors}
        />
        <Input
          name='lastName'
          label='Apellidos completos'
          register={register}
          required
          errors={errors}
        />
      </article>

      <article className='flex justify-between items-center gap-4'>
        <select {...register('genre', { required: true })} className='inline-flex w-full px-4 h-[35.5px] bg-transparent border border-gray-400 rounded-xl'>
          <option value='male'>
            Masculino
          </option>
          <option value='female'>
            Femenino
          </option>
        </select>
        <select {...register('countryCode', { required: true })} className='inline-block w-full px-4 h-[35.5px] bg-transparent border border-gray-400 rounded-xl'>
          <option value='1'>
            Perú
          </option>
          <option value='2'>
            México
          </option>
          <option value='3'>
            Colombia
          </option>
        </select>
      </article>

      <article className='flex justify-between items-center gap-4'>
        <select {...register('documentType', { required: true })} className='inline-block w-full px-4 h-[35.5px] bg-transparent border border-gray-400 rounded-xl'>
          <option value='DNI'>
            DNI
          </option>
          <option value='PASSPORT'>
            Pasaporte
          </option>
          <option value='CE'>
            Carnet de extranjería
          </option>
        </select>
        <Input
          name='documentNumber'
          label='Número de documento'
          register={register}
          required
          errors={errors}
        />
      </article>

      <article className='flex justify-between items-center gap-4'>
        <Input
          name='birthday'
          label='Fecha de nacimiento'
          register={register}
          required
          errors={errors}
        />
        <Input
          name='phoneNumber'
          label='Número de teléfono'
          register={register}
          required
          errors={errors}
        />
      </article>

      <article className='flex justify-between items-center gap-4'>
        <select {...register('student', { required: true })} className='inline-block w-full px-4 h-[35.5px] bg-transparent border border-gray-400 rounded-xl'>
          <option value='true'>
            Estudiante
          </option>
          <option value='false'>
            No estudiante
          </option>
        </select>
        <select {...register('roleId', { required: true })} className='inline-block w-full px-4 h-[35.5px] bg-transparent border border-gray-400 rounded-xl'>
          {data?.results?.map((role, index) => (
            <option key={index} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </article>

      <hr />

      <article className='flex justify-between items-center gap-4'>
        <Input
          name='email'
          label='Nombre de usuario / Email'
          register={register}
          required
          errors={errors}
        />
        <Input
          name='password'
          label='Contraseña'
          register={register}
          required
          errors={errors}
        />
      </article>
    </form>
  )

  return (
    <Modal
      title="Crear usuario administrador"
      actionLabel='Crear un nuevo usuario'
      disabled={false}
      isOpen={createModal.isOpen}
      body={bodyContent}
      onClose={createModal.onClose}
      onSubmit={handleSubmit(onHandleSubmit)}
    />
  )
}

export default AddUserModal
