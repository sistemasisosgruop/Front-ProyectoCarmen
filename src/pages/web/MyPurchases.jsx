import LayoutPage from '@layouts/LayoutPage'
import Section from '@layouts/Section'
import { IoMdDownload } from 'react-icons/io'

const MyPurchases = () => {
  return (
    <LayoutPage title="Mi carrito de compras">
      <Section className="mb-32 pt-16">
        <h1 className="text-4xl text-center text-dark font-bold">
          Mis compras
        </h1>
        <div className="bg-white rounded-xl overflow-hidden border border-gray-400 p-4 mt-8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-b-gray-200">
                <th className="pb-4 text-start text-lg text-dark">
                  Tipo de producto
                </th>
                <th className="pb-4 text-start text-lg text-dark">
                  Monto de compra
                </th>
                <th className="pb-4 text-start text-lg text-dark">
                  Fecha de compra
                </th>
                <th className="pb-4 text-start text-lg text-dark">
                  Boleta de pago
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index, orders) => (
                <tr
                  key={index}
                  className={
                    index === orders.length - 1
                      ? ''
                      : 'border-b border-b-gray-200'
                  }
                >
                  <td className="py-4">
                    <article>
                      <p className="uppercase text-xs text-gray-600 mb-1">
                        Hospedaje
                      </p>
                      <div className="flex justify-start items-start gap-4">
                        <img
                          src="https://mb.web.sapo.io/916b85f50be85f8d7a2c1e33cf8e95f20f832ef5.jpg"
                          alt="imagen"
                          className="w-48 h-24 rounded-xl"
                        />
                        <div>
                          <h4 className="text-lg text-dark font-bold">
                            Habitacion doble
                          </h4>
                          <p className="text-lg text-gray-600">
                            10 diciembre - 14 diciembre
                          </p>
                        </div>
                      </div>
                    </article>
                  </td>
                  <td>
                    <p className="text-2xl text-blue text-start font-bold">
                      $ 500
                    </p>
                  </td>
                  <td>
                    <p className="text-gray-600 text-start">08/12/2023</p>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="bg-orange text-white px-4 py-2 rounded-xl flex justify-center items-center gap-2 hover:bg-opacity-90"
                    >
                      <span>Descargar</span>
                      <IoMdDownload size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </LayoutPage>
  )
}

export default MyPurchases
