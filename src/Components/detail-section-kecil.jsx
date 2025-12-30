import Banner from "./Banner";

export default function DetailSectionKecil() {
  return (
    <>
      <section>
        <div>
          <section>
            <div className="relative w-full h-[95vh] overflow-hidden">
              <Banner />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 z-10">
                <h1 className="text-4xl sm:text-4xl md:text-4xl mb-6 text-center drop-shadow-lg font-bold tracking-tight">
                  Studio Besar
                </h1>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
