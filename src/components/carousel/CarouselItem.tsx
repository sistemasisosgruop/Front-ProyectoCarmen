import { useCallback, useContext } from 'react'
import { CarouselContext } from './Carousel'
import s from '@styles/carousel.module.css'

const CarouselItem = ({ children, index }) => {
  const { embla: emblaApi, selectedIndex } = useContext(CarouselContext)
  const isActive = selectedIndex === index

  const handleClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
  }, [emblaApi, index])

  return (
    <div
      className={`${s.slide} relative space-x-8 ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default CarouselItem
