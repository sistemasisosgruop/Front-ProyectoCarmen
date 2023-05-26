import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLang } from "../hooks/useLang";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const Masthead = (): JSX.Element => {
  const { t } = useLang();

  return (
    <section className="w-full overflow-hidden relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 3000 }}
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <img
              src="http://blog.redbus.pe/wp-content/uploads/2017/08/arequipa-x.jpg"
              alt={`los mejores lugares turisticos 0${index + 1}`}
              className="w-full h-[420px] object-cover object-bottom"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <article className="absolute top-0 left-0 w-full h-full bg-dark bg-opacity-30 px-8 py-4 z-10 grid place-content-center xl:px-64">
        <h2 className="text-4xl text-center font-bold text-white xl:text-6xl">
          {t("components.masthead.title")}
        </h2>
        <p className="text-white text-center text-lg font-semibold">
          {t("components.masthead.description")}
        </p>
      </article>
    </section>
  );
};

export default Masthead;
