import { FieldValues, UseFormRegister } from 'react-hook-form'
import { AiOutlineCaretDown } from 'react-icons/ai'

interface Props {
  id: string
  label: string
  results: {
    text: string
    value: string
  }[]
  register: UseFormRegister<FieldValues>
}

function Autocomplete({ id, label, results, register }: Props) {
  return (
    <div>
      <label htmlFor={id} className="text-gray-600 text-sm inline-block mb-1">
        {label}
      </label>
      <article className="relative w-full">
        <input
          type="search"
          list={id}
          placeholder={label}
          className="w-full border border-gray-400 rounded-xl px-6 py-2 text-gray-600 focus:outline-none focus:border-blue focus:text-blue"
          {...register(id)}
        />
        <AiOutlineCaretDown className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-600" />
      </article>
      <datalist id={id}>
        {results.map((result, index) => (
          <option key={index} value={result.value}>
            {result.text}
          </option>
        ))}
      </datalist>
    </div>
  )
}

export default Autocomplete
