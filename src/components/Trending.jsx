import { trending } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trending = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 2500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="w-10/12 m-auto">
        <h1 className="text-center text-4xl font-bold mt-4 mb-6">Trending</h1>

        <Slider {...settings}>
          {trending.map((val, i) => (
            <div key={i}>
              <div className="lg:flex gap-8 items-center mb-10" key={i}>
                <div className="lg:w-1/3">
                  <img
                    src={val.trending_img}
                    alt={`img_${i + 1}`}
                    className="rounded-lg w-full h-full transition-all hover:scale-95 duration-700"
                  />
                </div>
                <div className="lg:w-2/3">
                  <div className="flex gap-3">
                    <p className="font-bold">{val.purpose}</p>
                    <span className="text-gray-500">&#x2015; {val.date}</span>
                  </div>

                  <h2 className="text-3xl font-medium my-3 line-clamp-2">
                    {val.title}
                  </h2>
                  <p className="text-gray-500 mb-4 text-lg line-clamp-2">
                    <span>&#x2015; {val.description}</span>
                  </p>

                  <div className="flex gap-4">
                    <div className="h-12 w-12">
                      <img
                        src={val.logo}
                        alt="logo"
                        className="rounded-full w-full h-full shadow-md hover:scale-125 transition-all duration-700 cursor-pointer"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{val.name}</h4>
                      <p className="font-semibold text-gray-600">
                        {val.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Trending;
