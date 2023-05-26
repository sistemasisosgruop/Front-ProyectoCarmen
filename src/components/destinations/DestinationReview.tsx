import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const DestinationReview = (): JSX.Element => {
  const [selectedStar, setSelectedStar] = useState<number>(0);

  const handleStarClick = (index: number): void => {
    setSelectedStar(index + 1);
  };

  return (
    <form>
      <h4 className="text-dark text-center text-2xl font-bold">
        Agregar una reseña
      </h4>
      <p className="text-dark text-center">
        ¡Agrega un comentario y calificanos!
      </p>
      <div className="mt-8">
        <div className="flex justify-center items-center gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                handleStarClick(index);
              }}
              className={`${
                index <= selectedStar - 1 ? "text-orange" : "text-gray-400"
              }`}
            >
              <BsStarFill size={24} />
            </button>
          ))}
        </div>
        <div className="relative">
          <textarea
            name="comment"
            placeholder="Agregar un comentario..."
            className="w-full border border-gray-400 rounded-xl px-4 pt-2 pb-16 outline-none resize-none focus:border-orange"
            rows={12}
          ></textarea>
          <button
            type="button"
            className="absolute bottom-4 right-4 bg-orange flex justify-center items-center gap-2 text-white font-bold px-6 py-2 rounded-xl"
          >
            <span>Publicar</span>
            <HiOutlineArrowSmRight size={20} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default DestinationReview;
