interface Props {
  image: {
    imagePath: string
    alt: string
  }
  index: number
}

function DepartmentCard({ image, index }: Props) {
  return (
    <div
      key={index}
      className={`
        bg-white flex flex-col rounded-xl overflow-hidden border border-white
        ${index === 0 ? 'col-span-6 row-span-2 sm:col-span-6 lg:col-span-2 lg:row-span-2' : ''}
        ${index === 1 ? 'col-span-6 row-span-2 sm:col-span-3 lg:col-span-2 lg:row-span-1' : ''}
        ${index === 2 ? 'col-span-6 row-span-2 sm:col-span-3 lg:col-span-2 lg:row-span-2' : ''}
        ${index === 3 ? 'col-span-6 row-span-2 sm:col-span-6 lg:col-span-2 lg:row-span-1' : ''}
      `}
    >
      <img src={image.imagePath} alt={image.alt} className="h-full object-cover object-center overflow-hidden" />
      <article className="px-4 py-2 flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-xl font-bold text-dark">Departamento</p>
          <p className="flex gap-2">
            <span className="text-green">S/.</span>
            <strong>90.00</strong>
            <span className="text-gray-600">/ Por noche</span>
          </p>
        </div>
        <div className="flex justify-between items-end">
          <ul>
            <li>4 habitaciones</li>
            <li>Cusco</li>
            <li>Hasta 8 personas</li>
          </ul>
          <button type="button" className="bg-orange text-white rounded-md px-4 py-[2px]">
            Ver mas
          </button>
        </div>
      </article>
    </div>
  )
}

export default DepartmentCard
