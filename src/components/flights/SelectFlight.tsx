import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsChevronDown, BsFillHandbagFill } from 'react-icons/bs'
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'
import { TbPaperBagOff } from 'react-icons/tb'

const SelectFlight = (): JSX.Element => {
  const [numFlight, setNumFlight] = useState<number | null>(null)
  const navigate = useNavigate()

  const handleToggleSection = (index: number): void => {
    setNumFlight(prevState => (prevState === index ? null : index))
  }

  const handleTab = (): void => {
    navigate('/vuelos/completa-tus-datos')
  }

  console.log(navigate)

  return (
    <div className="w-full grid grid-cols-3 gap-8">
      <div className="bg-white col-span-2 rounded-xl overflow-hidden">
        <div className="bg-gray-200 flex justify-between items-center gap-4 px-4 py-2 text-lg text-center text-dark font-bold">
          <p>Vuelos de ida</p>
          <p>Sabado 01 de abril del 2023</p>
          <p>AQP -&gt; LIM</p>
        </div>
        <div className="px-8">
          {[...Array(3)].map((_, index) => (
            <>
              <label
                key={index}
                htmlFor={`r${index}`}
                className="w-full flex justify-start items-center gap-8 border-b border-b-gray-200 py-2"
              >
                <input
                  type="radio"
                  name="flight"
                  id={`r${index}`}
                  className=""
                />
                <article className="w-full flex justify-between items-center gap-8">
                  <p>LATAM</p>
                  <div className="flex flex-col justify-start items-start">
                    <p className="text-dark text-lg font-bold">
                      12:00 p.m. - 02:00 p.m.
                    </p>
                    <p className="text-dark">Duracion: 01h 0min</p>
                  </div>
                  <p className="text-lg text-dark font-bold">Directo</p>
                  <button
                    type="button"
                    onClick={() => {
                      handleToggleSection(index)
                    }}
                  >
                    <BsChevronDown size={24} />
                  </button>
                </article>
              </label>
              {numFlight === index && (
                <motion.section
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ opacity: 1, duration: 0.5 }}
                  className="py-4 px-8"
                >
                  <article className="flex justify-between items-center gap-4 mb-4">
                    <p className="text-dark text-lg font-bold">
                      Detalles del vuelo:
                    </p>
                    <p className="text-gray-600">
                      JetSmart - Numero de vuelo: 7002 - Clase R
                    </p>
                  </article>
                  <article className="space-y-2">
                    <p className="text-gray-600 flex justify-start items-center gap-2">
                      <FaPlaneDeparture size={18} className="text-blue" />
                      <span>
                        01 abr. 2023 - 12:00 p.m. - Aeropuerto Rodriguez ballon
                        (AQP)
                      </span>
                    </p>
                    <p className="text-gray-600 flex justify-start items-center gap-2">
                      <FaPlaneArrival size={18} className="text-blue" />
                      <span>01 abr. 2023 - 12:00 p.m. - Lima (LIM)</span>
                    </p>
                  </article>
                  <hr className="my-4" />
                  <article className="flex justify-center items-center gap-16 text-lg">
                    <p className="flex justify-start items-center gap-2">
                      <BsFillHandbagFill size={32} className="text-blue" />
                      <span className="text-gray-600">
                        Incluye un bolso o mochila
                      </span>
                    </p>
                    <p className="flex justify-start items-center gap-2">
                      <TbPaperBagOff size={32} className="text-gray-400" />
                      <span className="text-gray-600">
                        No incluye equipaje de mano o facturado
                      </span>
                    </p>
                  </article>
                </motion.section>
              )}
            </>
          ))}
        </div>

        {/* Return */}
        <div className="bg-gray-200 flex justify-between items-center gap-4 px-4 py-2 text-lg text-center text-dark font-bold">
          <p>Vuelos de retorno</p>
          <p>Sabado 01 de abril del 2023</p>
          <p>AQP -&gt; LIM</p>
        </div>
        <div className="px-8">
          {[...Array(1)].map((_, index) => (
            <>
              <label
                key={index}
                htmlFor={`r${index}`}
                className="w-full flex justify-start items-center gap-8 border-b border-b-gray-200 py-2"
              >
                <input
                  type="radio"
                  name="flight"
                  id={`r${index}`}
                  className=""
                />
                <article className="w-full flex justify-between items-center gap-8">
                  <p>LATAM</p>
                  <div className="flex flex-col justify-start items-start">
                    <p className="text-dark text-lg font-bold">
                      12:00 p.m. - 02:00 p.m.
                    </p>
                    <p className="text-dark">Duracion: 01h 0min</p>
                  </div>
                  <p className="text-lg text-dark font-bold">Directo</p>
                  <button
                    type="button"
                    onClick={() => {
                      handleToggleSection(index)
                    }}
                  >
                    <BsChevronDown size={24} />
                  </button>
                </article>
              </label>
              {numFlight === index && (
                <motion.section
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ opacity: 1, duration: 0.5 }}
                  className="py-4 px-8"
                >
                  <article className="flex justify-between items-center gap-4 mb-4">
                    <p className="text-dark text-lg font-bold">
                      Detalles del vuelo:
                    </p>
                    <p className="text-gray-600">
                      JetSmart - Numero de vuelo: 7002 - Clase R
                    </p>
                  </article>
                  <article className="space-y-2">
                    <p className="text-gray-600 flex justify-start items-center gap-2">
                      <FaPlaneDeparture size={18} className="text-blue" />
                      <span>
                        01 abr. 2023 - 12:00 p.m. - Aeropuerto Rodriguez ballon
                        (AQP)
                      </span>
                    </p>
                    <p className="text-gray-600 flex justify-start items-center gap-2">
                      <FaPlaneArrival size={18} className="text-blue" />
                      <span>01 abr. 2023 - 12:00 p.m. - Lima (LIM)</span>
                    </p>
                  </article>
                  <hr className="my-4" />
                  <article className="flex justify-center items-center gap-16 text-lg">
                    <p className="flex justify-start items-center gap-2">
                      <BsFillHandbagFill size={32} className="text-blue" />
                      <span className="text-gray-600">
                        Incluye un bolso o mochila
                      </span>
                    </p>
                    <p className="flex justify-start items-center gap-2">
                      <TbPaperBagOff size={32} className="text-gray-400" />
                      <span className="text-gray-600">
                        No incluye equipaje de mano o facturado
                      </span>
                    </p>
                  </article>
                </motion.section>
              )}
            </>
          ))}
        </div>
      </div>
      <div className="col-span-1 bg-white rounded-xl p-4">
        <header className="mb-4">
          <p className="text-xl text-blue text-end font-bold">
            Precio por adulto
          </p>
          <p className="text-2xl text-blue text-end font-bold">$ 90.00</p>
        </header>
        <article>
          <div className="flex justify-between items-center text-dark">
            <p>Adultos</p>
            <p className="text-lg font-bold">$ 90.00</p>
          </div>
          <div className="flex justify-between items-center text-dark">
            <p>Impuestos, tasas y cargos</p>
            <p className="text-lg font-bold">$ 30.00</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between items-center text-dark text-xl font-bold">
            <p>Total</p>
            <p>$ 120.00</p>
          </div>
          <div className="flex justify-center items-center mt-4">
            <button
              type="button"
              onClick={handleTab}
              className="w-full bg-orange text-xl text-white font-bold px-6 py-2 flex justify-center items-center gap-5 rounded-xl hover:bg-opacity-90"
            >
              <span>Comprar</span>
              <AiOutlineShoppingCart size={18} />
            </button>
          </div>
        </article>
      </div>
    </div>
  )
}

export default SelectFlight
