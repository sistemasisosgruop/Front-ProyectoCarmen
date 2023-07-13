import { type ToursInfo } from 'types/tour'

interface Props {
  tourInformation: ToursInfo
}

function TourInformation({ tourInformation }: Props) {
  return (
    <table className="w-full table-fixed">
      <thead className="bg-gray-300">
        <tr>
          <th className="py-1 px-2">Fotos</th>
          <th className="py-2 px-4">Que harás</th>
          <th className="py-2 px-4">Buena elección para</th>
          <th className="py-2 px-4">Política de cancelación</th>
          <th className="py-2 px-4">Precio por persona</th>
          <th className="py-2 px-4">Fechas disponibles</th>
          <th className="py-2 px-4">Horario</th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        <tr>
          <td className="px-4 py-2 text-center">Fotos</td>
          <td className="px-4 py-2 text-center">{tourInformation?.whatToDo}</td>
          <td className="px-4 py-2 text-center">{tourInformation?.goodChoiseFor}</td>
          <td className="px-4 py-2 text-center">{tourInformation?.cancellationPolicy}</td>
          <td className="px-4 py-2 text-center">$ {tourInformation?.pricePerPerson}</td>
          <td className="px-4 py-2 text-center">{tourInformation?.availableDates.join(' - ')}</td>
          <td className="px-4 py-2 text-center">{tourInformation?.schedule}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default TourInformation
