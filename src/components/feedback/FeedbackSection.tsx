import HeaderTestimonials from "@components/feedback/HeaderTestimonials";
import Comment from "@components/feedback/Comment";
import Carousel from "@components/carousel/Carousel";
import CarouselItem from "@components/carousel/CarouselItem";

const FeedbackSection = (): JSX.Element => {
  return (
    <section className="bg-white py-32">
      <HeaderTestimonials />

      <Carousel className="">
        {[...Array(5)].map((_, index) => (
          <CarouselItem key={index} index={index}>
            <Comment key={index} />
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
};

export default FeedbackSection;
