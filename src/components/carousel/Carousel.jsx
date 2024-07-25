import { Carousel } from "react-responsive-carousel";
import { carouseldata } from "../../constants";

const CarouselSection = () => {
  return (
    <Carousel
      autoPlay
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={true}
      infiniteLoop={true}
      interval={4000}
    >
      {carouseldata.map((item, index) => {
        return (
          <div key={index} className="h-full">
            <img
              className="object-cover h-[14rem] lg:h-[28.5rem]" //grayscale hover:grayscale-0
              src={item.image}
              alt="carousel_img"
            />
            {/* <p className="legend font-medium text-gray-900">{item.caption}</p> */}
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselSection;
