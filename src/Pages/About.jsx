import background from "../../public/assets/background.png";
export default function About() {
  return (
    <>
      <section id="about" className=" text-slate-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-black">Tentang kami</h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <p className="text-black text-lg leading-relaxed mb-4">
                Kami adalah studio fotografi yang berfokus pada mengabadikan
                momen berharga dengan kualitas visual terbaik. Setiap foto bukan
                sekadar gambar, tetapi cerita, emosi, dan kenangan yang akan
                terus hidup seiring waktu.
              </p>

              <p className="text-black text-lg leading-relaxed">
                Dengan tim yang berpengalaman dan peralatan profesional, kami
                menghadirkan layanan fotografi yang detail, kreatif, dan sesuai
                karakter setiap klien.Kami percaya bahwa setiap momen layak
                untuk dikenang dengan cara terbaik. Oleh karena itu, kami
                berkomitmen memberikan pengalaman pemotretan yang nyaman, proses
                yang profesional, serta hasil akhir yang memuaskan.
              </p>
            </div>

            <img
              src={background}
              alt="MicaStore"
              className="w-full md:w-1/2 rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Kenapa Memilih Kami
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Kami memberikan pengalaman fotografi terbaik untuk setiap momen Anda
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Studio Nyaman</h3>
              <p className="text-gray-600">
                Beragam ukuran studio yang nyaman dan fleksibel sesuai
                kebutuhan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Harga Terjangkau</h3>
              <p className="text-gray-600">
                Kualitas profesional tanpa biaya yang memberatkan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Peralatan Modern</h3>
              <p className="text-gray-600">
                Didukung kamera dan lighting modern untuk hasil maksimal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
