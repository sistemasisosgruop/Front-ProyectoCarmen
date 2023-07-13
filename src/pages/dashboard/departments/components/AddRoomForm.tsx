import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import InputAddText from '@components/forms/InputAddText'
import NumberPicker from '@components/forms/NumberPicker'
import Input from '@forms/Input'
import UploadImageRoom from './UploadImageRoom'
import { type FieldErrors, type FieldValues, type UseFormRegister } from 'react-hook-form'
import { type DepartmentRoom } from 'types/department'

interface Props {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  setDepartmentRooms: (departmentRoom: SetStateAction<DepartmentRoom[]>) => void
}

function AddRoomForm({
  register,
  errors,
  setDepartmentRooms
}: Props) {
  const [numBeds, setNumBeds] = useState(1)
  const [numBaths, setNumBaths] = useState(0)
  const [typeBeds, setTypeBeds] = useState<string[]>([])
  const [image, setImage] = useState<File | null>(null)

  useEffect(() => {
    setDepartmentRooms((prevState) => [
      ...prevState,
      {
        typeRoom: '',
        numBed: numBeds,
        typeBeds,
        Images: image
      }
    ])
  }, [])

  return (
    <div className='w-full flex flex-col justify-center items-start gap-4 mb-4'>
      <div className='w-full grid grid-cols-5 gap-4'>
        <div className='col-span-3'>
          <Input
            name='departmentRooms.typeRoom'
            label='Tipo de habitación'
            register={register}
            errors={errors}
            required={true}
          />
        </div>
        <article>
          <span className='text-gray-600 text-sm mb-1'>
            Número de camas
          </span>
          <NumberPicker
            value={numBeds}
            onChangeValue={setNumBeds}
          />
        </article>
        <article>
          <span className='text-gray-600 text-sm mb-1'>
            Número de baños
          </span>
          <NumberPicker
            value={numBaths}
            onChangeValue={setNumBaths}
          />
        </article>
      </div>
      <div className='w-full'>
        <span className='text-gray-600 text-sm'>
          Tipos de camas
        </span>
        <InputAddText
          name='typeBed'
          placeholder='Ingresa los tipos de camas'
          data={typeBeds}
          setData={setTypeBeds}
        />
      </div>

      <UploadImageRoom setFiles={setImage} />
    </div>
  )
}

export default AddRoomForm
