import { popular_items } from "../data/Data";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PopularPost = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "260px",
    slidesToShow: 1,
    speed: 500,
    arrows: true,
    nextArrow: <FaChevronLeft />,
    prevArrow: <FaChevronRight />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerMode: false,
          centerPadding: "initial",
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-10/12 m-auto mt-16">
        <h1 className="text-center text-4xl font-bold mb-6">
          Most Popular Posts
        </h1>

        <Slider {...settings}>
          {popular_items.map((val, i) => (
            <div key={i}>
              <div className="trend mx-10">
                <img
                  src={val.trending_img}
                  alt={`img_${i + 1}`}
                  className="rounded-lg w-full h-full transition-all hover:scale-95 duration-700 mb-2"
                />
              </div>
              <div className="mx-10">
                <div className="flex gap-3">
                  <p className="font-bold">{val.purpose}</p>
                  <span className="text-gray-500">&#x2015; {val.date}</span>
                </div>

                <h2 className="text-xl font-medium my-3 line-clamp-2">
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
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PopularPost;
