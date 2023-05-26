interface Props {
  index: number;
}

const Related = ({ index }: Props): JSX.Element => {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden w-full flex flex-col border border-white shadow-dark group/descripcion">
      <img
        src="https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/09/turismo-no-peru-machu-pichu.jpg"
        alt={`image ${index}}`}
        className=""
      />
      <div className="absolute top-2 right-2 rounded-md px-2 py-1 bg-white border border-blue border-opacity-90">
        <p className="text-dark text-center font-bold">4.5</p>
      </div>
      <article className="p-4">
        <div>
          <p className="uppercase text-blue text-center">TOUR FULLDAY</p>
          <h3 className="text-dark text-xl text-center font-bold">
            Laguna azul
          </h3>
        </div>
        <ul>
          <li>5 (10)</li>
          <li>Cusco, Perú</li>
          <li>8 horas</li>
          <li>Hasta 12 personas</li>
        </ul>
        <div className="flex justify-between items-center">
          <p className="flex flex-col justify-start">
            <span className="text-gray-600">Precio por persona</span>
            <span className="text-lg font-bold">
              <strong className="text-blue">S/.&nbsp;</strong>
              <strong className="text-dark">90.00</strong>
            </span>
          </p>
          <button
            type="button"
            className=" bg-blue rounded-xl px-4 py-1 text-white text-center"
          >
            Ver más
          </button>
        </div>
      </article>
    </div>
  );
};

export default Related;
