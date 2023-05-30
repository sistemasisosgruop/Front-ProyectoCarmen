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
      effect="fade"
      loop
      autoplay={{ delay: 5000 }}
      navigation
      pagination={{ clickable: true }}
      className="h-[60vh]"
    >
      {[...Array(3)].map((_, index) => (
        <SwiperSlide key={index} className="w-full h-full">
          <img
            src="https://i1.wp.com/www.sendamaya.com/wp-content/uploads/ofertas-hospedaje-en-las-playas-mexianas-.png"
            alt="paquetes promocionales 01"
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderTourPackage
