import type { EmblaCarouselType } from "embla-carousel-react";
import { createContext, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import s from "@styles/carousel.module.css";

interface ContextValue {
  embla: EmblaCarouselType | undefined;
  selectedIndex: number;
}

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const CarouselContext = createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1,
});

const Carousel = ({ children, className }: Props): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [ClassNames(), Autoplay()]
  );

  const onSelect = useCallback(() => {
    if (emblaApi === undefined) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (emblaApi === undefined) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div
        ref={viewportRef}
        className={`${s.viewport} w-full overflow-hidden ${className ?? ""}`}
      >
        <div className={`${s.container} flex`}>{children}</div>
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
