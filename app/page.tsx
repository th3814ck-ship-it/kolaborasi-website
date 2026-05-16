```tsx
"use client";

import { useState } from "react";

export default function Home() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      name: "Villa Modern Tropis",
      client: "Bapak Andi Wijaya",
      location: "Bandung, Jawa Barat",
      images: [
        "/projects/exterior1.jpg",
        "/projects/exterior2.jpg",
        "/projects/exterior3.jpg",
      ],
    },

    {
      name: "Luxury Cafe Interior",
      client: "Cafe Ruang Senja",
      location: "Jakarta Selatan",
      images: [
        "/projects/interior1.jpg",
        "/projects/interior2.jpg",
        "/projects/interior3.jpg",
      ],
    },

    {
      name: "Modern House Design",
      client: "Ibu Clara",
      location: "Surabaya",
      images: [
        "/projects/exterior4.jpg",
        "/projects/exterior5.jpg",
        "/projects/exterior6.jpg",
      ],
    },

    {
      name: "Luxury Bedroom",
      client: "Bapak Kevin",
      location: "Bali",
      images: [
        "/projects/interior4.jpg",
        "/projects/interior5.jpg",
        "/projects/interior6.jpg",
      ],
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <img
          src="/projects/slide1.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-5xl">

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8">
            Kolaborasi
            <br />
            Architecture
          </h1>

          <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed mb-10">
            Studio arsitektur modern dengan desain premium,
            interior luxury, dan konstruksi profesional.
          </p>

          <a
            href="#portfolio"
            className="inline-block bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition duration-300"
          >
            Lihat Portfolio
          </a>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="px-6 py-24 bg-neutral-950"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-black text-center mb-20">
            Gallery Proyek
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {projects.map((project, index) => (

              <div
                key={index}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImage(0);
                }}
                className="relative overflow-hidden rounded-[2rem] cursor-pointer group"
              >

                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/40" />

                {/* INFO */}
                <div className="absolute bottom-0 left-0 p-6 z-10">

                  <h3 className="text-2xl font-bold">
                    {project.name}
                  </h3>

                  <p className="text-sm text-neutral-300 mt-2">
                    {project.client}
                  </p>

                  <p className="text-sm text-neutral-400">
                    {project.location}
                  </p>

                </div>

                {/* ARROW */}
                <div className="absolute top-5 right-5 z-10">

                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                    →
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* MODAL */}
      {selectedProject && (

        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-6">

          {/* CLOSE */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-8 text-white text-5xl"
          >
            ×
          </button>

          {/* IMAGE */}
          <div className="relative w-full max-w-6xl">

            <img
              src={selectedProject.images[currentImage]}
              alt={selectedProject.name}
              className="w-full max-h-[80vh] object-contain rounded-[2rem]"
            />

            {/* PREV */}
            <button
              onClick={() => {
                if (currentImage === 0) {
                  setCurrentImage(selectedProject.images.length - 1);
                } else {
                  setCurrentImage(currentImage - 1);
                }
              }}
              className="absolute left-5 top-1/2 -translate-y-1/2"
            >

              <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-3xl hover:scale-110 transition duration-300">
                ←
              </div>

            </button>

            {/* NEXT */}
            <button
              onClick={() => {
                if (currentImage === selectedProject.images.length - 1) {
                  setCurrentImage(0);
                } else {
                  setCurrentImage(currentImage + 1);
                }
              }}
              className="absolute right-5 top-1/2 -translate-y-1/2"
            >

              <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-3xl hover:scale-110 transition duration-300">
                →
              </div>

            </button>

          </div>

          {/* INFO */}
          <div className="text-center mt-10">

            <h3 className="text-4xl font-black">
              {selectedProject.name}
            </h3>

            <p className="text-xl text-neutral-300 mt-3">
              {selectedProject.client}
            </p>

            <p className="text-neutral-500 mt-2">
              {selectedProject.location}
            </p>

          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-4 mt-8 overflow-x-auto max-w-full pb-2">

            {selectedProject.images.map((image, index) => (

              <img
                key={index}
                src={image}
                alt="Thumbnail"
                onClick={() => setCurrentImage(index)}
                className={`w-28 h-20 object-cover rounded-xl cursor-pointer border-2 transition duration-300 ${
                  currentImage === index
                    ? "border-white scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              />

            ))}

          </div>

        </div>

      )}

    </main>
  );
}
```
