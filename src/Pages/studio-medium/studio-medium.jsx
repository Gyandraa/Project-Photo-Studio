import Banner from "../../Components/Banner";
import Photo from "../../Components/Photo";
import { Link } from "react-router-dom";

export default function StudioMedium() {
  return (
    <>
      <section>
        <div className="relative w-full h-[90vh] overflow-hidden">
          <Banner />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 z-10">
            <h1 className="text-4xl sm:text-4xl md:text-3xl mb-6 text-center drop-shadow-lg font-bold tracking-tight">
              Studio Sedang
            </h1>

            <p className="text-center text-lg md:text-lg text-white/90 max-w-3xl font-semibold leading-relaxed">
              Take a picture for ur moment
            </p>
          </div>
        </div>
      </section>

      <div>
        <h1 className="mt-20 text-3xl text-center font-bold">List Studio</h1>
      </div>

      <section className="my-20">
        <div className="flex gap-20 justify-center mt-10">
          <Link to="/studio-medium/sedang-satu">
            <div className="w-72 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform">
              <Photo />
              <div className="p-4 space-y-1 text-center">
                <h2 className="text-lg font-bold text-gray-900">
                  Studio Sedang Satu
                </h2>
              </div>
            </div>
          </Link>

          <Link to="/studio-medium/sedang-dua">
            <div className="w-72 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform">
              <Photo />
              <div className="p-4 space-y-1">
                <h2 className="text-lg font-bold text-gray-900 text-center">
                  Studio Sedang Dua{" "}
                </h2>
              </div>
            </div>
          </Link>

          <Link to="/studio-medium/sedang-tiga">
            <div className="w-72 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform">
              <Photo />
              <div className="p-4 space-y-1 text-center">
                <h2 className="text-lg font-bold text-gray-900">
                  Studio Sedang Tiga{" "}
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
