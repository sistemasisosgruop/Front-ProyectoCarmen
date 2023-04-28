import { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useLang } from '../hooks/useLang'
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
  const { t } = useLang()

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
      <article className='absolute top-0 left-0 w-full h-full px-8 py-4 z-10 grid place-content-center xl:px-64'>
        <h2 className='text-4xl text-center font-bold text-white xl:text-6xl'>
          {t('masthead.title')}
        </h2>
        <p className='text-white text-center text-lg font-semibold'>
          {t('masthead.description')}
        </p>
      </article>
    </section>
  )
}

export default Masthead

