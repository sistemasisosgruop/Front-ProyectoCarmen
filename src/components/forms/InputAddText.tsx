import { type SetStateAction, type KeyboardEvent, type Dispatch } from 'react'
import { IoClose } from 'react-icons/io5'

interface Props {
  name: string
  placeholder: string
  required?: boolean
  data: string[]
  setData: (value: SetStateAction<string[]>) => void
  // onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
}

function InputAddText({
  name,
  placeholder,
  required,
  data,
  setData
}: Props) {
  const deleteWord = (word: string) => {
    setData((prevData) => prevData.filter(d => d !== word))
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string[]>>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const word = event.currentTarget.value.trim()
      if (word !== '') {
        setValue((prevState) => [...prevState, word])
        event.currentTarget.value = ''
      }
    }
  }

  return (
    <div
      className={`
        w-full border text-gray-600 rounded-xl px-4 py-2 flex flex-row flex-wrap justify-start items-center focus:border-blue
        ${required ? 'border-red-400' : 'border-gray-400'}
      `}
    >
      <ul className='flex flex-wrap flex-row justify-start items-center gap-1'>
        {data.map((service, index) => (
          <li key={index} className='bg-gray-200 rounded-md px-1 py-[1px] text-blue flex justify-center items-center gap-1'>
            {service}
            <button type='button' onClick={() => deleteWord(service)}>
              <IoClose size={18} />
            </button>
          </li>
        ))}
      </ul>
      <div className='w-full'>
        <input
          name={name}
          placeholder={data.length > 0 ? '' : placeholder}
          onKeyDown={(event) => handleKeyDown(event, setData)}
          className='inline-block w-auto border-none focus:outline-none focus:text-blue'
        />
      </div>
    </div>
  )
}

export default InputAddText
