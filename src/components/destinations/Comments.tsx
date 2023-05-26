import { BiLoader } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

const Comments = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col justify-center items-end">
        <select className="rounded-xl border border-gray-400">
          <option className="inline-block rounded-xl text-red-700">
            Lo mas reciente
          </option>
          <option>Mejor calificacion</option>
          <option>Peor calificacion</option>
        </select>
      </div>
      <div className="mb-8">
        <p className="text-lg text-dark font-bold">10 comentarios</p>
      </div>
      <div className="flex flex-col gap-8">
        {[...Array(3)].map((_, index, array) => (
          <>
            <article key={index}>
              <div className="flex justify-between items-center mb-4">
                <p className="text-dark font-bold">Jane Doe</p>
                <div className="flex justify-start items-center gap-2 text-orange">
                  <BsStarFill size={18} />
                  <BsStarFill size={18} />
                  <BsStarFill size={18} />
                  <BsStarFill size={18} />
                  <BsStarFill size={18} />
                </div>
              </div>
              <p className="text-dark mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                at iste animi dignissimos inventore quo blanditiis voluptate,
                recusandae nihil vitae eum ducimus porro reiciendis veritatis,
                aliquid quod cum iure illum? Quo hic maxime error consequatur
                tempora eum iure, mollitia inventore.
              </p>
              <p className="text-gray-600 text-sm">
                <span>Hace 10 horas</span>
              </p>
            </article>
            {index === array.length - 1 || (
              <hr className="border-none py-[0.5px] bg-gray-200" />
            )}
          </>
        ))}
        <div className="grid place-content-center">
          <button
            type="button"
            className="flex justify-center items-center gap-2 px-6 py-1 rounded-xl border border-blue text-blue font-bold"
          >
            <BiLoader size={24} />
            <span>Ver más comentarios</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Comments;
