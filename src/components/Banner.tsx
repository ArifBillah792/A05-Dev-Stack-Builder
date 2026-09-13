
import BannerImage from "../assets/banner-stack.png"

const Banner = () => {
  return (

    <div className=" flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-8 container mx-auto">
      {/* Left: text block  */}

      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="text-5xl font-extrabold leading-tight">
          <span className="block text-gray-900">Build Your Ideal</span>
          <span
            className="block bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 
          bg-clip-text text-transparent"
          >
            Development Stack
          </span>
        </h1>

        <p className="text-gray-500 max-w-md">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className=" flex gap-4 items-center">
          <button
            className="btn btn-sm bg-linear-to-r from-orange-500 to-pink-500
         text-white border-none rounded-b-md px-6"
          >
            Explore Technologies
          </button>

          <button className="btn btn-sm btn-outline rounded-b-md px-6">
            Learn More
          </button>
        </div>
      </div>

      {/* Right: Image block */}

      <div className="flex-1 flex justify-center-safe">
        <img src={BannerImage} alt="Banner stack" className="max-w-md w-full" />
      </div>
    </div>
  );
};

export default Banner;
