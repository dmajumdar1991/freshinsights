const Newsletter = () => {
  return (
    <>
      <div className="bg-gray-50 pt-1 pb-16 shadow-sm">
        <div className="w-10/12 m-auto mt-10">
          <h1 className="text-center text-4xl font-bold mb-5">Newsletter</h1>

          <div className="md:flex gap-6">
            <div className="w-9/12 mb-4 w-fullscreen768">
              <input
                type="text"
                placeholder="Enter your email here..."
                className="border focus:outline-none rounded-full px-8 py-3 w-full focus:shadow-md"
              />
            </div>

            <div className="w-1/4 w-fullscreen768">
              <button className="border px-8 py-3 w-full text-white bg-blue-700 hover:bg-white hover:text-black hover:shadow-md rounded-full transition-all hover:scale-100 duration-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
