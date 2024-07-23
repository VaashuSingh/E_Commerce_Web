import { Carousel } from "react-responsive-carousel";
import { carouseldata } from "../../constants";

const CarouselSection = () => {
  return (
    <div>
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
            <div key={index}>
              <img className="object-cover image-style" src={item.image} alt="" />
              {/* <p className="legend font-medium text-gray-900">{item.caption}</p> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
