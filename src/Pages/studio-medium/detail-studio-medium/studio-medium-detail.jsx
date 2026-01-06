import { useParams } from "react-router-dom";
import Banner from "../../../Components/Banner";
import DetailSectionMedium from "../../../Components/detail-section-medium";
export default function StudioSedangDetail() {
  const { id } = useParams();
  const data = {
    "sedang-satu": {
      title: "Studio Sedang Satu",
    },
    "sedang-dua": {
      title: "Studio Sedang Dua",
    },
    "sedang-tiga": {
      title: "Studio Sedang Tiga",
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
                <DetailSectionMedium data={studio} />
              </h1>

              <p className="text-center text-lg md:text-lg text-white/90 max-w-3xl font-semibold leading-relaxed"></p>
            </div>
          </div>
        </section>
      </div>{" "}
      <section>
        <h2 className="font-semibold text-3xl text-center mt-15">
          Detail Studio
        </h2>
        <div className="flex gap-10  mt-10 mb-20">
          <div className="w-2xl h-full rounded-xl shadow-lg ml-30 mt-10 hover-scale-105 transition-transform">
            <Photo />
          </div>
          <div className="flex-col space-y-2">
            <div>
              <h3 className="font-bold text-xl mb-2">Harga</h3>
              <p className="font-semibold font-sans">Rp 200.000,00 / sesi</p>
              <p className="font-semibold font-sans">Satu sesi 25 menit</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Kapasitas</h3>
              <p className="font-semibold font-sans">Maksimal 5 orang</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Mendapatkan</h3>
              <p className="font-semibold font-sans">10 file foto edit</p>
              <p className="font-semibold font-sans">4 foto cetak</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Jam Operasional</h3>
              <p className="font-semibold font-sans">10.00 - 19.00</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
