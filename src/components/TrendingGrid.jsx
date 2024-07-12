import { gridItems } from "../data/Data";

const TrendingGrid = () => {
  return (
    <>
      <div className="w-10/12 m-auto">
        <div className="mt-16 grid lg:grid-cols-3 sm:grid-cols-2 gap-12">
          {gridItems.map((val, i) => (
            <div key={i} className="p-5 shadow-lg rounded-lg">
              <div>
                <img
                  src={val.trending_img}
                  alt={`img_${i + 1}`}
                  className="rounded-lg w-full h-full transition-all hover:scale-95 duration-700 mb-2"
                />
              </div>
              <div>
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
        </div>
      </div>
    </>
  );
};

export default TrendingGrid;
