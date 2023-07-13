import { type Department } from 'types/department'

interface Props {
  department: Department
}

function DepartmentRoomDetails({ department }: Props) {
  return (
    <table className="w-full">
      <thead className="bg-gray-300">
        <tr>
          <th className="py-2 px-4">
            Foto
          </th>
          <th className="py-1 px-2">
            Tipo de habitación
          </th>
          <th className="py-2 px-4">
            Número de camas
          </th>
          <th className="py-2 px-4">
            Número de baños
          </th>
          <th className="py-2 px-4">
            Tipo de camas
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {department?.DepartmentRooms?.map((room, index) => (
          <tr key={index}>
            <td className="px-4 py-2 text-center">
              {room?.Images[0] && (
                <img
                  src={room.Images[0]}
                  alt='Image of room'
                  className='w-32 rounded-md object-center object-cover'
                />
              )}
            </td>
            <td className="px-4 py-2 text-center">
              {room.typeBed}
            </td>
            <td className="px-4 py-2 text-center">
              {room.numBed}
            </td>
            <td className="px-4 py-2 text-center">
              {room.numBaths}
            </td>
            <td className="px-4 py-2 text-center">
              {room.typeBed.join(', ')}.
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DepartmentRoomDetails
