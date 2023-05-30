const Product = (): JSX.Element => {
  return (
    <article className="flex justify-between items-center gap-4">
      <input type="checkbox" name="" />
      <div className="w-full sm:flex sm:justify-start">
        <img
          src="https://i0.wp.com/robbreport.mx/wp-content/uploads/2019/04/tribeca-bed41-1600x995-1.jpg"
          alt="imagen producto"
          className="w-full h-32 rounded-xl object-cover object-center sm:w-48 sm:h-24"
        />
        <div className="w-full p-2 sm:px-4">
          <article className="flex justify-between items-center gap-4">
            <div>
              <h3 className="text-dark text-lg font-bold">Habitación doble</h3>
              <p className="text-base text-gray-600">
                10 diciembre - 14 diciembre
              </p>
            </div>

            <p className="flex flex-col">
              <span className="text-gray-600 text-center text-xs">
                $100 / 4 días
              </span>
              <span className="text-xl text-blue text-center font-bold whitespace-nowrap">
                $ 500.00
              </span>
            </p>
          </article>

          <button
            type="button"
            className="text-sm text-gray-400 underline hover:text-gray-800"
          >
            Borrar
          </button>
        </div>
      </div>
    </article>
  )
}

export default Product
