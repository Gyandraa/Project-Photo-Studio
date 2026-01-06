import { useParams } from "react-router-dom";
import Banner from "../../../Components/Banner";
import DetailSectionBesar from "../../../Components/detail-section-besar";
import Photo from "../../../Components/Photo";

export default function StudioBesarDetail() {
  const { id } = useParams();
  const data = {
    "Besar-satu": {
      title: "Studio Besar Satu",
    },
    "Besar-dua": {
      title: "Studio Besar Dua",
    },
    "Besar-tiga": {
      title: "Studio Besar Tiga",
    },
  };

  const studio = data[id];

  if (!studio) {
    return <div>Studio tidak ditemukan</div>;
  }
  return (
    <>
      <div>
        <section>
          <div className="relative w-full h-[90vh] overflow-hidden">
            <Banner />
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 z-10">
              <h1 className="text-4xl sm:text-4xl md:text-3xl mb-6 text-center drop-shadow-lg font-bold tracking-tight">
                <DetailSectionBesar data={studio} />
              </h1>

              <p className="text-center text-lg md:text-lg text-white/90 max-w-3xl font-semibold leading-relaxed"></p>
            </div>
          </div>
        </section>
      </div>

      <section>
        <h2 className="font-semibold text-3xl text-center mt-15">
          Detail Studio
        </h2>
        <div className="flex gap-10 border-4 rounded-2xl p-5 border-gray-200 mt-10 mb-20">
          <div className="w-2xl h-full rounded-xl shadow-lg ml-30 mt-25 hover-scale-105 transition-transform">
            <Photo />
          </div>
          <div className="flex-col space-y-2">
            <h2 className="text-3xl font-bold mb-5">Deskripsi</h2>
            <div>
              <h3 className="font-semibold text-xl mb-2">Harga</h3>
              <p className="font-sans">Rp 500.000,00 / sesi </p>
              <p className="font-sans">Satu sesi 45 menit</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Kapasitas</h3>
              <p className=" font-sans">Maksimal 20 orang</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Mendapatkan</h3>
              <p className="font-sans">20 file foto edit</p>
              <p className="font-sans">20 foto cetak</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Jam Operasional</h3>
              <p className="font-sans">10.00 - 19.00</p>
            </div>
            <button
              className="px-6 py-2 rounded-lg bg-amber-500 text-white font-semibold
                   hover:bg-amber-600 transition duration-200 shadow-md"
            >
              Booking
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
