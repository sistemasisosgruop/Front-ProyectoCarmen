interface Props {
  headers: string[]
}
const THead = ({ headers }: Props): JSX.Element => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className='bg-gray-50 px-8 py-2 border-b border-b-gray-200 text-start text-dark text-lg'
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default THead
