import ButtonLinkSm from "@components/ButtonLinkSm";
import { MdGroup } from "react-icons/md";

interface Props {
  imagePath: string;
  alt: string;
  index: number;
}

const PopularRoomCard = ({ imagePath, alt, index }: Props): JSX.Element => {
  return (
    <div
      className={`
        relative rounded-xl border border-white overflow-hidden bg-white w-full flex flex-col
        ${
          index === 0
            ? "col-span-12 md:col-span-6 lg:row-span-2 xl:col-span-3 xl:row-span-1"
            : ""
        }
        ${
          index === 1
            ? "col-span-12 md:col-span-6 lg:row-span-2 xl:col-span-4 xl:row-span-2"
            : ""
        } 
        ${
          index === 2
            ? "col-span-12 sm:col-span-12 lg:row-span-2 xl:col-span-5 xl:row-span-1"
            : ""
        }
        ${
          index === 3
            ? "col-span-12 md:col-span-6 lg:row-span-2 xl:col-span-3 xl:row-span-1"
            : ""
        }
        ${
          index === 4
            ? "col-span-12 md:col-span-6 lg:row-span-2 xl:col-span-5 xl:row-span-1"
            : ""
        }
      `}
    >
      <img
        src={imagePath}
        alt={alt}
        className={`object-cover object-center h-full w-full ${
          index === 1 ? "h-full" : "max-h-[220px]"
        }`}
      />
      <div className="absolute top-2 right-2 bg-white px-2 py-[2px] rounded-md flex justify-center items-center">
        <p className="text-dark">4.5</p>
      </div>
      <article className="flex flex-col gap-2 p-2">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">Dúplex</p>
          <p className="flex gap-1">
            <span className="text-blue">S/.</span>
            <strong className="font-bold">{"70.00"}</strong>
            <span>/</span>
            <i>por dia</i>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex justify-start items-center gap-2">
            <MdGroup size={18} className="text-blue" />
            <span>Hasta {"2"} personas</span>
          </p>
          <ButtonLinkSm
            to="/habitaciones/detalle"
            text="Ver más"
            background="bg-orange"
          />
        </div>
      </article>
    </div>
  );
};

export default PopularRoomCard;
