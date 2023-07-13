import { Tour } from 'types/tour'
import camelcaseKeys from 'camelcase-keys'
import { useState } from 'react'
import TourInformation from './TourInformation'
import TourDetails from './TourDetails'
import { BiChevronDown, BiChevronUp, BiEdit, BiTrash } from 'react-icons/bi'

interface Props {
  index: number
  tour: Tour
}
function TourItem({ index, tour }: Props) {
  const [showInformation, setShowInformation] = useState<number | null>(null)
  const [showDetails, setShowDetails] = useState<number | null>(null)

  const handleShowInformation = (index: number) => {
    setShowInformation(prevState => (prevState === index ? null : index))
  }

  const handleShowDetails = (index: number) => {
    setShowDetails(prevState => (prevState === index ? null : index))
  }

  return (
    <>
      <tr className="text-sm">
        <td>{index + 1}</td>
        <td className="whitespace-nowrap px-4 py-2">{tour.tourName}</td>
        <td className="px-4 py-2">{tour.tourDescription}</td>
        <td className="whitespace-nowrap px-4 py-2">
          {tour.extras?.map(extra => extra) ?? '-'}
        </td>
        <td className="whitespace-nowrap px-4 py-2">{tour.location}</td>
        <td className="whitespace-nowrap px-4 py-2">{tour.duration}</td>
        <td className="whitespace-nowrap px-4 py-2">{tour.difficulty}</td>
        <td className="whitespace-nowrap px-4 py-2">
          {tour.languages?.join(', ') ?? '-'}
        </td>
        <td className="px-4 py-2">
          Máximo {tour.numberOfPeople} personas por grupo
        </td>
        <td className="whitespace-nowrap px-4 py-2">{tour.ages}</td>
        <td className="whitespace-nowrap px-4 py-2">
          <button
            type="button"
            onClick={() => handleShowInformation(index)}
            className="p-1 text-dark"
          >
            {showInformation === index ? (
              <BiChevronUp size={24} />
            ) : (
              <BiChevronDown size={24} />
            )}
          </button>
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <button
            type="button"
            onClick={() => handleShowDetails(index)}
            className="p-1 text-dark"
          >
            {showDetails === index ? (
              <BiChevronUp size={24} />
            ) : (
              <BiChevronDown size={24} />
            )}
          </button>
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <article className="flex justify-center items-center gap-2">
            <button type="button" className="p-1 text-dark">
              <BiEdit size={18} />
            </button>
            <button type="button" className="p-1 text-dark">
              <BiTrash size={18} />
            </button>
          </article>
        </td>
      </tr>
      {showInformation === index && (
        <tr>
          <td colSpan={13}>
            <TourInformation tourInformation={camelcaseKeys(tour.toursInfo)} />
          </td>
        </tr>
      )}

      {showDetails === index && (
        <tr>
          <td colSpan={13}>
            <TourDetails tourDetails={camelcaseKeys(tour.toursDetails)} />
          </td>
        </tr>
      )}
    </>
  )
}

export default TourItem
