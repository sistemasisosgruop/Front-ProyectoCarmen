import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper";
import { useLang } from "@hooks/useLang";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const SliderDetail = (): JSX.Element => {
  const { t } = useLang();

  return (
    <section className="relative h-[60vh] w-full">
      <Swiper
        modules={[Pagination, Autoplay, Navigation, EffectFade]}
        effect="fade"
        loop
        navigation
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="w-full h-[60vh]"
      >
        <SwiperSlide>
          <img
            src="https://depaseoperu.com/wp-content/uploads/2017/01/peru.jpg"
            alt="imagen slider"
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://depaseoperu.com/wp-content/uploads/2017/01/peru.jpg"
            alt="imagen slider"
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://depaseoperu.com/wp-content/uploads/2017/01/peru.jpg"
            alt="imagen slider"
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
      </Swiper>

      <article className="absolute top-0 left-0 w-full h-full bg-dark bg-opacity-25 grid place-content-center z-10 px-16 sm:px-24 md:px-32 lg:px-48 xl:px-64">
        <h2 className="text-2xl text-white text-center font-bold sm:text-3xl md:text-4xl lg:text-6xl">
          Visita el increible Valle Sagrado de Los Incas
        </h2>
      </article>

      <Link
        to="/destinos"
        className="absolute top-8 left-8 z-20 bg-blue px-6 py-2 rounded-xl flex justify-center items-center gap-2 text-white border border-white border-opacity-40"
      >
        <HiOutlineArrowSmLeft size={18} />
        <span>{t("general.back")}</span>
      </Link>
    </section>
  );
};

export default SliderDetail;
