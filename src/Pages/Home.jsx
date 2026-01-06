import { Link } from "react-router-dom";
import Background from "../../public/assets/background.png";
import Photo from "../Components/Photo";
import About from "./About";
// import Studio from "./studio/Studio";
export default function HomePage() {
  return (
    <>
      <section>
        <div className="relative w-full h-[95vh] overflow-hidden">
          <img
            src={Background}
            alt="Banner"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 z-10">
            <h1 className="text-4xl sm:text-4xl md:text-4xl mb-6 text-center drop-shadow-lg font-bold tracking-tight font-serif">
              Capture Your Best Moment
            </h1>

            <p className="text-center text-lg md:text-lg text-white/90 max-w-3xl font-semibold leading-relaxed">
              Professional photo studio with affordable packages for everyone.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-25 text-center">
        <h1 className="font-semibold font-serif text-2xl">Kategori Studio</h1>
      </div>

      <div className="flex gap-20 justify-center mt-10">
        <Link to="/studio-small">
          <div className="w-72 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform">
            <Photo />
            <div className="p-4 space-y-1">
              <h2 className="text-lg font-bold text-gray-900">Studio Kecil</h2>

              <p className="text-sm text-gray-700 font-semibold">
                Perfect for personal photoshoot
              </p>

              <p className="text-base font-bold text-red-500">Rp 100.000,00</p>
            </div>
          </div>
        </Link>

        <Link to="/studio-medium">
          <div className="w-72 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform">
            <Photo />
            <div className="p-4 space-y-1">
              <h2 className="text-lg font-bold text-gray-900">
                Studio Sedang{" "}
              </h2>

              <p className="text-sm text-gray-700 font-semibold">
                Perfect for personal photoshoot
              </p>

              <p className="text-base text-red-500 font-semibold">
                Rp 300.000,00
              </p>
            </div>
          </div>
        </Link>

        <Link to="/studio-big">
          <div className="w-72 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform">
            <Photo />
            <div className="p-4 space-y-1">
              <h2 className="text-lg font-bold text-gray-900">Studio Besar </h2>

              <p className="text-sm text-gray-700 font-semibold">
                Perfect for personal photoshoot
              </p>

              <p className="text-base text-red-500 font-semibold">
                Rp 500.000,00
              </p>
            </div>
          </div>
        </Link>
      </div>

      <section className="mt-20 ">
        <About />
      </section>
    </>
  );
}
