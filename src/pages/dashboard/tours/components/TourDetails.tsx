import { ToursDetails } from 'types/tour'

interface Props {
  tourDetails: ToursDetails
}

function TourDetails({ tourDetails }: Props) {
  return (
    <table className="w-full table-fixed">
      <thead>
        <tr className="bg-gray-500 text-gray-100">
          <th colSpan={2} className="py-1 px-2 border-r border-r-gray-300">
            Incluye
          </th>
          <th className="py-2 px-4 border-r border-r-gray-300">Itinerario</th>
          <th colSpan={2} className="py-2 px-4 border-r border-r-gray-300">
            Salida y regreso
          </th>
          <th className="py-2 px-4"></th>
        </tr>
        <tr className="bg-gray-400 text-gray-200">
          <th className="py-1 px-2">Que está incluido</th>
          <th className="py-2 px-4 border-r border-r-gray-300">Que no está incluido</th>
          <th className="py-2 px-4 border-r border-r-gray-300">Día 01</th>
          <th className="py-2 px-4">Detalles de salida</th>
          <th className="py-2 px-4 border-r border-r-gray-300">Detalles de regreso</th>
          <th className="py-2 px-4">Accesibilidad</th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        <tr className="bg-gray-100">
          <td className="px-4 py-2">
            <ul>
              {tourDetails.whatIsIncluded.split(', ').map((included, index) => (
                <li key={index} className="list-disc list-inside">
                  {included}
                </li>
              ))}
            </ul>
          </td>
          <td className="px-4 py-2">
            <ul>
              {tourDetails.whatIsNotIncluded.split(', ').map((notIncluded, index) => (
                <li key={index} className="list-disc list-inside">
                  {notIncluded}
                </li>
              ))}
            </ul>
          </td>
          <td className="px-4 py-2">
            <ul>
              {tourDetails.itinerary.map((itinerary, index) => (
                <li key={index} className="list-disc list-inside">
                  {itinerary}
                </li>
              ))}
            </ul>
          </td>
          <td className="px-4 py-2 text-center">{tourDetails.departureDetails}</td>
          <td className="px-4 py-2 text-center">{tourDetails.returnDetails}</td>
          <td className="px-4 py-2 text-center">{tourDetails.accessibility}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default TourDetails
