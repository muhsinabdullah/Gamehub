import B1 from "../../assets/B1.png";
import B2 from "../../assets/B2.png";
import B3 from "../../assets/B3.png";
import B4 from "../../assets/B4.png";
import B5 from "../../assets/B5.png";

const images = [B1, B2, B3, B4, B5];

const Slider = () => {
  return (
    <section className="w-screen h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
      <div className="carousel w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-full flex items-center justify-center"
          >
            {/* Image */}
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Navigation */}
            <div className="absolute flex justify-between -translate-y-1/2 left-4 right-4 top-1/2">
              <a
                href={`#slide${index === 0 ? images.length : index}`}
                className="btn btn-circle btn-sm md:btn-md bg-black/60 border-none text-white hover:bg-black/80"
              >
                ❮
              </a>
              <a
                href={`#slide${index === images.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle btn-sm md:btn-md bg-black/60 border-none text-white hover:bg-black/80"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
