import { createContext, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import s from '@styles/carousel.module.css'

export const CarouselContext = createContext({
  embla: undefined,
  selectedIndex: -1
})

const Carousel = ({ children, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false
    },
    [ClassNames(), Autoplay()]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div
        ref={viewportRef}
        className={`${s.viewport} w-full overflow-hidden ${className}`}
      >
        <div className={`${s.container} flex`}>{children}</div>
      </div>
    </CarouselContext.Provider>
  )
}

export default Carousel
