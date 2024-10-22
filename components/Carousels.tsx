import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const data_carousel = [
  {
    id: 1,
    img: "/carousel.jpg",
    alt: "gambar 1"
  }
];

const Carousels = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <CarouselContent>
          {data_carousel.map((carousel) => (
            <CarouselItem key={carousel.id}>
              <img src={carousel.img} alt={carousel.alt} id="carousel" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="carousel-navigation prev" />
        <CarouselNext className="carousel-navigation next" />
      </Carousel>
    </div>
  );
};

export default Carousels;
