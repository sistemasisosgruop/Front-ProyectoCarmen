import { useState } from 'react'
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'
import Button from '../Button'

function DestinationForm() {
  const [numChildren, setNumChildren] = useState<number>(1)
  const [numAdults, setNumAdults] = useState<number>(1)

  const addAdultPassenger = (): void => {
    setNumChildren(numChildren + 1)
  }

  const subtractAdultPassenger = (): void => {
    setNumChildren(numChildren - 1)
  }

  const addChildPassenger = (): void => {
    setNumAdults(numAdults + 1)
  }

  const subtractChildPassenger = (): void => {
    setNumAdults(numAdults - 1)
  }

  return (
    <div className="col-span-2 bg-white rounded-xl p-8 overflow-hidden">
      <h2 className="uppercase text-2xl text-center text-dark font-bold">Valle sagrado de los incas</h2>
      <p className="text-dark flex justify-center items-end gap-1">
        <span>desde</span>
        <strong className="text-blue text-xl font-bold">S/. 1,722.00</strong>
        <span>por persona</span>
      </p>
      <form className="mt-8">
        <div className="mb-4 flex flex-col justify-center items-center gap-2">
          <label htmlFor="date" className="text-center text-xl font-bold">
            Fechas de viaje
          </label>
          <input type="text" name="date" placeholder="" className="border border-gray-400 rounded-xl px-4 py-2" />
        </div>
        <div className="mb-4 flex justify-between items-center gap-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <label htmlFor="date" className="text-center text-xl font-bold">
              N° de adultos
            </label>

            <div className="flex justify-start items-center gap-4">
              {numChildren > 1 && (
                <button type="button" onClick={subtractAdultPassenger} className="p-{2px}">
                  <IoIosRemoveCircleOutline size={22} />
                </button>
              )}
              <p className="text-xl font-bold">{numChildren}</p>
              <button type="button" onClick={addAdultPassenger} className="p-[2px]">
                <IoIosAddCircleOutline size={22} />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <label htmlFor="date" className="text-center text-xl font-bold">
              N° de niños
            </label>

            <div className="flex justify-start items-center gap-4">
              {numAdults > 1 && (
                <button type="button" onClick={subtractChildPassenger} className="p-{2px}">
                  <IoIosRemoveCircleOutline size={22} />
                </button>
              )}
              <p className="text-xl font-bold">{numAdults}</p>
              <button type="button" onClick={addChildPassenger} className="p-[2px]">
                <IoIosAddCircleOutline size={22} />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-b border-b-gray-200 my-8" />

        <div className="mb-8">
          <p className="text-center text-xl text-dark">
            <strong>Martes 14 de Marzo</strong>
          </p>
          <p className="text-center text-dark mb-4">08:30 a.m. - 06:30 p.m.</p>
        </div>
        <div className="flex justify-center items-center">
          <Button text="Agregar al carrito de compras" background="bg-orange" />
        </div>
      </form>
    </div>
  )
}

export default DestinationForm
