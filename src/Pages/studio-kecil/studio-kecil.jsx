import Banner from "../../Components/Banner";

export default function StudioKecil() {
  return (
    <>
      <section>
        <div className="relative w-full h-[90vh] overflow-hidden">
          <Banner />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 z-10">
            <h1 className="text-4xl sm:text-4xl md:text-3xl mb-6 text-center drop-shadow-lg font-bold tracking-tight">
              Studio Kecil
            </h1>

            <p className="text-center text-lg md:text-lg text-white/90 max-w-3xl font-semibold leading-relaxed"></p>
          </div>
        </div>
      </section>
    </>
  );
}
