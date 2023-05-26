import TabItem from "./TabItem";
import Tabs from "./Tabs";
import { BiUniversalAccess } from "react-icons/bi";
import { BsCardChecklist, BsCheckCircle } from "react-icons/bs";
import { TbPaperBag } from "react-icons/tb";

const TourDetails = (): JSX.Element => {
  return (
    <div className="mx-48">
      <Tabs>
        <TabItem label="Incluye" icon={<BsCheckCircle />}>
          <div className="mb-8">
            <h4 className="text-dark text-lg font-bold">
              <span className="border-l-2 border-l-dark mr-2"></span>
              Qu&eacute; est&aacute; incluido:
            </h4>
            <ul>
              <li>Transporte privado</li>
              <li>Almuerzo buffet</li>
              <li>Ticket de ingreso boleto tur&iacute;stico</li>
            </ul>
          </div>
          <div>
            <h4 className="text-dark text-lg font-bold">
              <span className="border-l-2 border-l-dark mr-2"></span>
              Qu&eacute; no est&aacute; incluido:
            </h4>
            <ul>
              <li>Ingreso/entrada: Valle Sagrado de los Incas</li>
            </ul>
          </div>
        </TabItem>
        <TabItem label="Itinerario" icon={<BsCardChecklist />}>
          <div className="mb-4">
            <h4 className="text-dark text-lg font-bold">
              <span className="border-l-2 border-l-dark mr-2"></span>
              Itinerario
            </h4>
            <p className="my-4 text-dark">
              Hacer una parada en: Sacred Valley of the Incas, 0051 Per&uacute;.
            </p>
            <p className="text-dark">
              Explora las ruinas Incas de Ollantaytambo, Pisac y mucho
              m&aacute;s. Salidas diarias para personas solas y grupos de todas
              las edades y el viaje es en bus tur&iacute;stico.
            </p>
          </div>
          <ul className="text-dark">
            <li>
              08:30 - 09:00 Recojo de su hotel y traslado en bus
              tur&iacute;stico.
            </li>
            <li>
              08:30 - 09:00 Recojo de su hotel y traslado en bus
              tur&iacute;stico.
            </li>
            <li>
              08:30 - 09:00 Recojo de su hotel y traslado en bus
              tur&iacute;stico.
            </li>
            <li>
              08:30 - 09:00 Recojo de su hotel y traslado en bus
              tur&iacute;stico.
            </li>
            <li>
              08:30 - 09:00 Recojo de su hotel y traslado en bus
              tur&iacute;stico.
            </li>
            <li>
              08:30 - 09:00 Recojo de su hotel y traslado en bus
              tur&iacute;stico.
            </li>
            <li>
              08:30 - 09:00 Recojo de su hotel y traslado en bus
              tur&iacute;stico.
            </li>
            <li>
              08:30 - 09:00 Recojo de su hotel y traslado en bus
              tur&iacute;stico.
            </li>
          </ul>
        </TabItem>
        <TabItem label="Salida y regreso" icon={<TbPaperBag />}>
          <div className="mb-4">
            <h4 className="text-dark text-lg font-bold mb-2">
              <span className="border-l-2 border-l-dark mr-2"></span>
              Detalles de la salida
            </h4>
            <ul className="list-disc list-inside ml-4 text-dark">
              <li>
                Inticahuary 617, Cusco 08002, Per&uacute; a espaldas del templo
                de Koricancha.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-dark text-lg font-bold mb-2">
              <span className="border-l-2 border-l-dark mr-2"></span>
              Detalles de regreso
            </h4>
            <ul className="list-disc list-inside ml-4 text-dark">
              <li>Vuelve al punto de salida original</li>
            </ul>
          </div>
        </TabItem>
        <TabItem label="Accesibilidad" icon={<BiUniversalAccess />}>
          <div className="mb-4">
            <h4 className="text-dark text-lg font-bold mb-2">
              <span className="border-l-2 border-l-dark mr-2"></span>
              Accesiblidad
            </h4>
            <ul className="ml-4 text-dark">
              <li className="mb-2">
                No se cuenta con acceso para silla de ruedas
              </li>
              <li>
                Si tienes alguna pregunta sobre accesibilidad, estaremos
                encantados de ayudarte.
                <br />
                Simplemente, llama al siguiente numero y diles el siguiente
                codigo de producto:
                <br />
                191384P3. +1 855 275 5071
              </li>
            </ul>
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
};

export default TourDetails;
