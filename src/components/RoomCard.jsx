import CardHover from './CardHover'
import ButtonLink from './ButtonLink'


const RoomCard = ({ imagePath, alt }) => {
  return (
    <CardHover imagePath={imagePath} alt={alt}>
      <div className="flex justify-between items-start">
        <span className="uppercase text-sm text-gray-600">Habitación</span>
        <p className="text-lg font-bold text-dark">
          $45 / <span className="text-gray-600">día</span>
        </p>
      </div>
      <div className="flex flex-col items-start gap-4">
        <p className="text-2xl text-dark font-bold">Matrimonial</p>
        <ButtonLink to="/habitacion" text="Ver más" background="bg-orange" />
      </div>
    </CardHover>
  )
}

export default RoomCard
