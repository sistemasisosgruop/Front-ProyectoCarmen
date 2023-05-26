import { Link } from "react-router-dom";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const Recommendation = (): JSX.Element => {
  return (
    <div className="mb-8">
      <Link
        to="/"
        className="bg-turquoise text-white rounded-md px-6 py-1 inline-flex justify-center items-center gap-1 hover:bg-opacity-90"
      >
        <HiOutlineArrowSmLeft size={20} />
        <span>Volver</span>
      </Link>
      <div className="mt-4 flex flex-col gap-2">
        <p>&quot;14 habitaciones encontradas&rdquo;</p>
        <h4 className="text-xl font-bold text-dark">
          Tenemos para ti estas habitaciones
        </h4>
      </div>
    </div>
  );
};

export default Recommendation;
