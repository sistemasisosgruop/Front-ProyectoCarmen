interface Props {
  headers: string[]
  rowCellStyles?: string
}
const THead = ({
  headers,
  rowCellStyles = 'bg-gray-50 px-8 py-2 border-b border-b-gray-200 text-start text-dark text-lg'
}: Props): JSX.Element => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className={rowCellStyles}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default THead
