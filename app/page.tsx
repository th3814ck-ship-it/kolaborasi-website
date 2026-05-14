"use client";

import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const slides = [
    "/projects/slide1.jpg",
    "/projects/slide2.jpg",
    "/projects/slide3.jpg",
    "/projects/slide4.jpg",
    "/projects/slide5.jpg",
    "/projects/slide6.jpg",
  ];

  const exteriorImages = Array.from(
    { length: 20 },
    (_, i) => `/projects/exterior${i + 1}.jpg`
  );

  const interiorImages = Array.from(
    { length: 20 },
    (_, i) => `/projects/interior${i + 1}.jpg`
  );

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

            <a href="#about" className="hover:text-neutral-300 transition">
              Tentang Kami
            </a>

            <a href="#services" className="hover:text-neutral-300 transition">
              Layanan Kami
            </a>

            <a href="#pricing" className="hover:text-neutral-300 transition">
              Estimasi Harga
            </a>

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
                className="slide-item relative"
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

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />

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

                Jasa arsitektur dan kontraktor premium untuk hunian modern,
                villa eksklusif, interior mewah, cafe aesthetic,
                hingga proyek komersial premium.

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
              Kolaborasi menghadirkan layanan arsitektur,
              interior, visualisasi 3D, dan kontraktor premium
              dengan pendekatan modern luxury dan detail elegan.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="px-8 py-32 bg-neutral-950"
      >

        <div className="max-w-7xl mx-auto text-center">

          <h3 className="text-5xl md:text-7xl font-black mb-20">
            Layanan Kami
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Architecture Design",
              "Interior Design",
              "3D Visualization",
              "Contractor",
              "Renovation",
              "Custom Furniture",
            ].map((service, index) => (

              <div
                key={index}
                className="bg-black border border-white/10 rounded-[2rem] p-10 hover:-translate-y-2 transition duration-500"
              >

                <div className="text-5xl mb-6">
                  ✨
                </div>

                <h4 className="text-3xl font-semibold mb-4">
                  {service}
                </h4>

                <p className="text-neutral-400 leading-relaxed">
                  Pengerjaan profesional dengan desain modern luxury premium.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="px-8 py-32 bg-black"
      >

        <div className="max-w-7xl mx-auto text-center">

          <h3 className="text-5xl md:text-7xl font-black mb-20">
            Estimasi Harga
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              ["Desain Arsitektur", "Mulai 50rb/m²"],
              ["Interior Design", "Mulai 150rb/m²"],
              ["Jasa Kontraktor", "Mulai 4jt/m²"],
            ].map(([title, price], index) => (

              <div
                key={index}
                className="bg-neutral-900 rounded-[2rem] p-12 border border-white/10"
              >

                <h4 className="text-3xl font-semibold mb-8">
                  {title}
                </h4>

                <p className="text-5xl font-black">
                  {price}
                </p>

              </div>

            ))}

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

              {exteriorImages.map((image, index) => (

                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="group overflow-hidden rounded-[2rem] cursor-pointer"
                >

                  <img
                    src={image}
                    alt="Exterior"
                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                  />

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

              {interiorImages.map((image, index) => (

                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="group overflow-hidden rounded-[2rem] cursor-pointer"
                >

                  <img
                    src={image}
                    alt="Interior"
                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* FULLSCREEN PREVIEW */}
      {selectedImage && (

        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md flex items-center justify-center p-6 animate-fade cursor-pointer"
        >

          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-[2rem] shadow-2xl animate-zoom"
          />

        </div>

      )}

    </main>
  );
}