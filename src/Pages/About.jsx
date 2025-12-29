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
    </>
  );
}
