import { ReactNode, useCallback, useContext } from 'react'
import { CarouselContext } from './Carousel'
import s from '@assets/carousel.module.css'

interface Props {
  children: ReactNode
  index: number
}

function CarouselItem({ children, index }: Props) {
  const { embla: emblaApi, selectedIndex } = useContext(CarouselContext)
  const isActive = selectedIndex === index

  const handleClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
  }, [emblaApi, index])

  return (
    <div className={`${s.slide} relative space-x-8 ${isActive ? 'active' : ''}`} onClick={handleClick}>
      {children}
    </div>
  )
}

export default CarouselItem
