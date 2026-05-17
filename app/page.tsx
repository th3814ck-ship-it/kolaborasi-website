"use client";

import { useState } from "react";

export default function Home() {

  const [selectedImage, setSelectedImage] = useState<any>(null);

  const slides = [
    "/projects/slide1.jpg",
    "/projects/slide2.jpg",
    "/projects/slide3.jpg",
    "/projects/slide4.jpg",
    "/projects/slide5.jpg",
    "/projects/slide6.jpg",
  ];

  const exteriorImages = [
    {
      image: "/projects/exterior1.jpg",
      title: "Villa Modern Luxury",
      client: "Bapak Andi Wijaya",
      location: "Bandung, Jawa Barat",
      category: "Modern Luxury House",
    },

    {
      image: "/projects/exterior2.jpg",
      title: "Rumah Tropical Modern",
      client: "Ibu Clara",
      location: "Jakarta Selatan",
      category: "Tropical Modern",
    },

    {
      image: "/projects/exterior3.jpg",
      title: "Hotel Premium",
      client: "PT Graha Nusantara",
      location: "Surabaya",
      category: "Commercial Building",
    },

    {
      image: "/projects/exterior4.jpg",
      title: "Apartment Modern",
      client: "PT Skyline",
      location: "Bandung",
      category: "Apartment",
    },
  ];

  const interiorImages = [
    {
      image: "/projects/interior1.jpg",
      title: "Interior Cafe Luxury",
      client: "Cafe Botanica",
      location: "Bandung",
      category: "Cafe Interior",
    },

    {
      image: "/projects/interior2.jpg",
      title: "Modern Kitchen",
      client: "Bapak Daniel",
      location: "Jakarta",
      category: "Kitchen Interior",
    },

    {
      image: "/projects/interior3.jpg",
      title: "Luxury Bedroom",
      client: "Ibu Siska",
      location: "Bali",
      category: "Bedroom Interior",
    },

    {
      image: "/projects/interior4.jpg",
      title: "Cafe Industrial",
      client: "Kopi Urban",
      location: "Bandung",
      category: "Cafe Interior",
    },
  ];

  return (

    <main className="bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-black">
              Kolaborasi
            </h1>

            <p className="uppercase tracking-[0.35em] text-xs text-neutral-300 mt-2">
              Design • Visual • Architecture • Interior • Contractor
            </p>

          </div>

          <nav className="hidden md:flex gap-10 uppercase tracking-[0.2em] text-sm font-medium">

            <a href="#about">Tentang Kami</a>
            <a href="#services">Layanan Kami</a>
            <a href="#pricing">Estimasi Harga</a>

          </nav>

        </div>

      </header>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        {/* SLIDESHOW */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="slider-track">

            {slides.map((slide, index) => (

              <div
                key={index}
                className="slide-item"
              >

                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />

              </div>

            ))}

          </div>

        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 flex items-center h-full">

          <div className="max-w-7xl mx-auto px-8 w-full">

            <div className="max-w-5xl">

              <h2 className="text-6xl md:text-8xl font-black leading-[1.05] mb-10">

                Mewujudkan
                <br />
                Arsitektur Mewah
                <br />
                Dengan Sentuhan
                <br />
                Modern

              </h2>

              <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed max-w-3xl mb-12">

                Jasa arsitektur dan kontraktor premium
                dengan pengalaman lebih dari 15 tahun
                dalam menangani proyek hunian modern,
                villa eksklusif, interior mewah,
                cafe aesthetic hingga proyek komersial.

              </p>

              <div className="flex flex-wrap gap-5">

                <a
                  href="#portfolio"
                  className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition duration-300"
                >
                  Lihat Portfolio
                </a>

                <a
                  href="https://wa.me/6282188357297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 bg-white/10 backdrop-blur-md px-10 py-5 rounded-2xl text-lg hover:bg-white hover:text-black transition duration-300"
                >
                  Konsultasi Gratis
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="px-8 py-32 bg-black"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <img
            src="/projects/about.jpg"
            alt="About"
            className="rounded-[2rem] w-full h-[700px] object-cover"
          />

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-5">
              Tentang Kami
            </p>

            <h3 className="text-5xl md:text-7xl font-black leading-tight mb-10">
              Desain Modern Dengan Konstruksi Premium
            </h3>

            <p className="text-xl text-neutral-300 leading-relaxed">

              Kolaborasi adalah studio arsitektur dan kontraktor premium
              dengan pengalaman lebih dari 15 tahun dalam menangani
              berbagai proyek hunian modern, villa eksklusif,
              cafe aesthetic, interior mewah, hingga proyek komersial.

              <br /><br />

              Kami menghadirkan desain yang elegan,
              detail konstruksi berkualitas tinggi,
              serta pengerjaan profesional dengan standar modern luxury.

            </p>

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="px-8 py-32 bg-neutral-950"
      >

        <div className="max-w-7xl mx-auto">

          <h3 className="text-5xl md:text-7xl font-black text-center mb-24">
            Gallery Proyek Kolaborasi
          </h3>

          {/* EXTERIOR */}
          <div className="mb-28">

            <h4 className="text-4xl font-bold mb-12">
              Eksterior
            </h4>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {exteriorImages.map((item, index) => (

                <div
                  key={index}
                  onClick={() => setSelectedImage(item)}
                  className="group overflow-hidden rounded-[2rem] cursor-pointer relative"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500" />

                  <div className="absolute bottom-0 left-0 p-6 z-10">

                    <h4 className="text-2xl font-bold">
                      {item.title}
                    </h4>

                    <p className="text-sm text-neutral-300 mt-2">
                      Client: {item.client}
                    </p>

                    <p className="text-sm text-neutral-400">
                      {item.location}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* INTERIOR */}
          <div>

            <h4 className="text-4xl font-bold mb-12">
              Interior
            </h4>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {interiorImages.map((item, index) => (

                <div
                  key={index}
                  onClick={() => setSelectedImage(item)}
                  className="group overflow-hidden rounded-[2rem] cursor-pointer relative"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500" />

                  <div className="absolute bottom-0 left-0 p-6 z-10">

                    <h4 className="text-2xl font-bold">
                      {item.title}
                    </h4>

                    <p className="text-sm text-neutral-300 mt-2">
                      Client: {item.client}
                    </p>

                    <p className="text-sm text-neutral-400">
                      {item.location}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 px-8 py-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20">

          <div>

            <h4 className="text-4xl font-bold mb-10">
              MENU
            </h4>

            <div className="flex flex-col gap-5 text-neutral-300 text-lg">

              <a href="#about">Tentang Kami</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#pricing">Estimasi Harga</a>

            </div>

          </div>

          <div>

            <h4 className="text-4xl font-bold mb-10">
              HUBUNGI KAMI
            </h4>

            <div className="flex flex-col gap-5 text-neutral-300 text-lg">

              <p>
                💬 WhatsApp:
                <br />

                <a
                  href="https://wa.me/6282188357297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  +62 821-8835-7297
                </a>

              </p>

              <p>
                ✉ Email:
                <br />
                info@kolaborasiarchitect.com
              </p>

            </div>

          </div>

          <div>

            <h4 className="text-4xl font-bold mb-10">
              IKUTI KAMI
            </h4>

            <div className="flex gap-6">

              <a href="https://facebook.com" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  className="w-10 h-10 hover:scale-110 transition"
                />
              </a>

              <a href="https://instagram.com" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  className="w-10 h-10 hover:scale-110 transition"
                />
              </a>

              <a href="https://tiktok.com" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
                  className="w-10 h-10 hover:scale-110 transition"
                />
              </a>

              <a href="https://youtube.com" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                  className="w-10 h-10 hover:scale-110 transition"
                />
              </a>

            </div>

          </div>

        </div>

      </footer>

      {/* FULLSCREEN */}
      {selectedImage && (

        <div className="fixed inset-0 z-[999] bg-black/95 flex flex-col">

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-8 text-white text-5xl z-50"
          >
            ×
          </button>

          <div className="flex-1 flex items-center justify-center px-10 pt-20 pb-6">

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] object-contain rounded-2xl"
            />

          </div>

          <div className="bg-white text-black px-10 py-8">

            <div className="max-w-7xl mx-auto">

              <span className="bg-neutral-200 px-4 py-1 rounded-full text-sm font-medium">
                {selectedImage.category}
              </span>

              <h2 className="text-4xl font-black mt-5 mb-4">
                {selectedImage.title}
              </h2>

              <div className="space-y-2 text-lg">

                <p>
                  <span className="font-semibold">
                    Client:
                  </span>{" "}
                  {selectedImage.client}
                </p>

                <p>
                  <span className="font-semibold">
                    Lokasi:
                  </span>{" "}
                  {selectedImage.location}
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}