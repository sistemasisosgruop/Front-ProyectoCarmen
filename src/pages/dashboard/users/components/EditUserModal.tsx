import { useEditUserModal } from '../hooks/useEditUserModal'
import Modal from '@components/Modal'
import Input from '@components/forms/Input'
import { useGetRequest } from '@hooks/useGetRequest'
import { usePostRequest } from '@hooks/usePostRequest'
import { useEffect } from 'react'
import { type FieldValues, useForm, type SubmitHandler } from 'react-hook-form'
import { type RoleResponse } from 'types/role'

import { type User } from 'types/user'

interface Props {
  user: User | null
}

function EditUserModal({ user }: Props) {
  const editModal = useEditUserModal()
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<FieldValues>()
  const { data } = useGetRequest<RoleResponse>({ url: 'roles' })
  const { onSubmit } = usePostRequest({
    url: 'users',
    modal: editModal,
    successMessage: '¡Usuario editado correctamente!'
  })

  useEffect(() => {
    setValue('firstName', user?.firstName)
    setValue('lastName', user?.lastName)
    setValue('genre', user?.genre)
    setValue('countryCode', user?.countryCode)
    setValue('documentType', user?.documentType)
    setValue('documentNumber', user?.documentNumber)
    setValue('birthday', user?.birthday)
    setValue('student', user?.student)
    setValue('phoneNumber', user?.phoneNumber)
    setValue('roleId', user?.roleId)
    setValue('email', user?.email)
    setValue('password', user?.password)
  }, [])

  const onHandleSubmit: SubmitHandler<FieldValues> = (data): void => {
    onSubmit(data)
    reset()
    editModal.onClose()
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
        <select
          {...register('genre', { required: true })}
          className='inline-flex w-full px-4 h-[35.5px] bg-transparent border border-gray-400 rounded-xl'
        >
          <option value='male'>
            Masculino
          </option>
          <option value='female'>
            Femenino
          </option>
        </select>
        <select
          {...register('countryCode', { required: true })}
          className='inline-block w-full px-4 h-[35.5px] bg-transparent border border-gray-400 rounded-xl'
        >
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
      title="Editar usuario"
      actionLabel='Editar usuario'
      disabled={false}
      isOpen={editModal.isOpen}
      body={bodyContent}
      onClose={editModal.onClose}
      onSubmit={handleSubmit(onHandleSubmit)}
    />
  )
}

export default EditUserModal
