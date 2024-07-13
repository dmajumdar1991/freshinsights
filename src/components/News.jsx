import { Link } from "react-router-dom";
import { gridItems } from "../data/Data";

const News = () => {
  return (
    <>
      <div className="w-10/12 m-auto">
        <div className="mt-24">
          <div className="flex justify-around mb-12">
            <h1 className="text-center text-4xl font-bold mt-4 mb-6">Sports</h1>
            <h1 className="text-center text-4xl font-bold mt-4 mb-6">
              Business
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {gridItems.map((val, i) => (
              <div key={i}>
                <Link to={`/single-product`}>
                  <div className="lg:flex gap-8 items-start mb-10">
                    <div className="lg:w-1/3">
                      <img
                        src={val.trending_img}
                        alt={`img_${i + 1}`}
                        className="rounded-lg w-full h-full transition-all hover:scale-110 duration-700"
                      />
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex gap-3">
                        <p className="font-bold">{val.purpose}</p>
                        <span className="text-gray-500">
                          &#x2015; {val.date}
                        </span>
                      </div>

                      <h2 className="text-xl font-medium my-3 line-clamp-2">
                        {val.title}
                      </h2>

                      <div className="flex gap-4">
                        <div className="h-12 w-12">
                          <img
                            src={val.logo}
                            alt="logo"
                            className="rounded-full w-full h-full shadow-md hover:scale-110 transition-all duration-700 cursor-pointer"
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
