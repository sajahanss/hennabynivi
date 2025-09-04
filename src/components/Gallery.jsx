import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Replace with your real henna images + captions
  const images = [
    { src: "/images/henna1.jpeg", title: "Bridal Elegance", desc: "Intricate full-hand bridal mehendi with rich detailing." },
    { src: "/images/henna2.jpeg", title: "Minimal Charm", desc: "Light, modern Arabic-inspired design for casual events." },
    { src: "/images/henna3.jpeg", title: "Festive Glow", desc: "Traditional mehendi with floral motifs for festivals." },
    { src: "/images/henna4.jpeg", title: "Royal Touch", desc: "Heavy design with paisleys and mandalas, perfect for weddings." },
    { src: "/images/henna5.jpeg", title: "Custom Portrait", desc: "Personalized mehendi featuring names or portraits." },
    { src: "/images/henna6.jpeg", title: "Party Vibes", desc: "Trendy Indo-western design with bold strokes." },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-gradient-to-b from-white via-henna-light/20 to-white relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-serif font-bold text-henna mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✨ Our Gallery ✨
        </motion.h2>

        <p className="text-henna-dark font-sans mb-12 max-w-2xl mx-auto">
          A glimpse of the intricate and elegant mehendi designs crafted with love by Nivi. 
          From traditional to modern styles, each design tells its own story.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg border border-amber-100 group"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay for Desktop */}
              <div className="hidden md:flex absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex-col justify-center items-center text-center px-4">
                <h3 className="text-white font-serif text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>

              {/* Always-visible caption for Mobile */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-center">
                <h3 className="text-sm font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="absolute top-3 right-3 text-henna hover:text-amber-600"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes size={24} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-serif font-bold text-henna mb-2">{selectedImage.title}</h3>
                <p className="text-henna-dark text-sm">{selectedImage.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
