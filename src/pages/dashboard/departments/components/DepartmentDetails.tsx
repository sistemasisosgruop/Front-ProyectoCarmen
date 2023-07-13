import { type Department } from 'types/department'

interface Props {
  department: Department
}

function DepartmentDetails({ department }: Props) {
  return (
    <table className="w-full table-fixed">
      <thead className="bg-gray-600 text-white">
        <tr>
          <th rowSpan={2}>Fotos</th>
          <th colSpan={2} className="border-r border-r-gray-100">
            Lo que frece este sitio
          </th>
          <th rowSpan={2}>Servicios</th>
          <th rowSpan={2}>
            Extras
          </th>
        </tr>
        <tr className="bg-gray-500">
          <th>Qué está incluido</th>
          <th className="border-r border-r-gray-100">Qué no está incluido</th>
        </tr>
      </thead>
      <tbody className="bg-gray-100">
        <tr>
          <td>
            <div className="w-full flex flex-wrap justify-center items-center gap-4 p-2">
              {department.Images?.map((image, index) => (
                <img
                  key={index}
                  src={image.imageUrl}
                  alt={`Image of the room ${index + 1}`}
                  className="border-md w-32 rounded-md object-cover object-center"
                />
              ))}
            </div>
          </td>
          <td className=''>
            <ul>
              {department?.details?.amenities?.map((included, index) => (
                <li key={index} className='list-disc list-inside'>
                  {included}
                </li>
              ))}
            </ul>
          </td>
          <td>
            <ul>
              {department?.details?.notIncluded?.map((notIncluded, index) => (
                <li key={index} className='list-disc list-inside'>
                  {notIncluded}
                </li>
              ))}
            </ul>
          </td>
          <td>
            <ul>
              {department?.details?.services?.map((service, index) => (
                <li key={index} className='list-disc list-inside'>
                  {service}
                </li>
              ))}
            </ul>
          </td>
          <td>
            <ul>
              {department?.extras?.map((extra, index) => (
                <li key={index} className='list-disc list-inside'>
                  {extra}
                </li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default DepartmentDetails
