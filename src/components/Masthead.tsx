import { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const sliderImages = [
  '/images/home-slider/01.jpg',
  '/images/home-slider/02.jpg',
  '/images/home-slider/03.jpg',
  '/images/home-slider/04.jpg',
  '/images/home-slider/05.jpg'
]

const Masthead = (): JSX.Element => {
  return (
    <section className='w-full overflow-hidden relative'>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        loop
        autoplay={{ delay: 3000 }}
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`los mejores lugares turisticos 0${index + 1}`}
              className='w-full h-[420px] object-cover object-bottom'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <article className='absolute top-0 left-0 w-full h-full px-64 py-4 z-10 grid place-content-center'>
        <h2 className='text-6xl font-bold text-white'>
          Reserva ahora y disfruta de una estadía perfecta
        </h2>
        <p className='text-white text-center text-lg font-semibold'>
          ¡Aprovecha esta oportunidad única y reserva ahora para vivir una experiencia inolvidable en nuestra acogedoras habitaciones!
        </p>
      </article>
    </section>
  )
}

export default Masthead

