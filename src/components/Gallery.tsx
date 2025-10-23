import { useState } from "react";
import poolNight from "@/assets/pool-night.jpg";
import sunsetPalm from "@/assets/sunset-palm.jpg";
import gardenView from "@/assets/garden-view.jpg";
import barbecueArea from "@/assets/barbecue-area.jpg";
import aerialView from "@/assets/aerial-view.jpg";
import poolAerial from "@/assets/pool-aerial.jpg";
import diningArea from "@/assets/dining-area.jpg";
import gardenSunset from "@/assets/garden-sunset.jpg";

const galleryImages = [
  { src: poolNight, alt: "Piscina iluminada à noite" },
  { src: aerialView, alt: "Vista aérea da granja" },
  { src: diningArea, alt: "Área de churrasqueira" },
  { src: sunsetPalm, alt: "Pôr do sol com palmeira" },
  { src: gardenView, alt: "Jardim com vista para as montanhas" },
  { src: poolAerial, alt: "Vista aérea da piscina" },
  { src: barbecueArea, alt: "Espaço gourmet" },
  { src: gardenSunset, alt: "Jardim ao entardecer" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Conheça Nossos Espaços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square animate-fade-in shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};
