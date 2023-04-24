import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const SliderTourPackage = (): JSX.Element => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect='fade'
      loop
      autoplay={{ delay: 5000 }}
      navigation
      pagination={{ clickable: true }}
      className='h-[60vh]'
    >
      <SwiperSlide>
        <img src='/images/promotions-slider/01.avif' alt='paquetes promocionales 01' className='w-full' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/images/promotions-slider/02.jpg' alt='paquetes promocionales 02' className='w-full' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/images/promotions-slider/03.jpg' alt='paquetes promocionales 03' className='w-full' />
      </SwiperSlide>
    </Swiper>
  )
}

export default SliderTourPackage

