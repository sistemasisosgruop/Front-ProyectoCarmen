import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation, EffectFade } from 'swiper'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'

const SliderDetail = (): JSX.Element => {
  return (
    <section className='relative h-[60vh] w-full'>
      <Swiper
        modules={[Pagination, Autoplay, Navigation, EffectFade]}
        effect='fade'
        loop
        navigation
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className='w-full h-full'
      >
        <SwiperSlide className='relative'>
          <img
            src='https://depaseoperu.com/wp-content/uploads/2017/01/peru.jpg'
            alt='imagen slider'
            className=''
          />
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img
            src='https://depaseoperu.com/wp-content/uploads/2017/01/peru.jpg'
            alt='imagen slider'
            className=''
          />
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img
            src='https://depaseoperu.com/wp-content/uploads/2017/01/peru.jpg'
            alt='imagen slider'
            className=''
          />
        </SwiperSlide>
      </Swiper>

      <Link
        to='/destinos'
        className='absolute top-8 left-8 z-20 bg-blue px-6 py-2 rounded-xl flex justify-center items-center gap-2 text-white border border-white border-opacity-40'
      >
        <HiOutlineArrowSmLeft size={18} />
        <span>
          Volver
        </span>
      </Link>

      <article className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
        <h2 className='text-6xl text-white text-center font-bold'>
          Visita el increible Valle Sagrado de Los Incas
        </h2>
      </article>
    </section>
  )
}

export default SliderDetail
