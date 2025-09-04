import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center px-6 bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 overflow-hidden"
    >
      {/* 🌟 Radial Glow Aura */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1100px] h-[1100px] rounded-full bg-gradient-radial from-amber-300 via-amber-200 to-transparent blur-3xl opacity-30"></div>
      </div>

      {/* Mandala with Animated Gold Gradient */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-40"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{
          rotate: { duration: 100, repeat: Infinity, ease: "linear" },
          scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-[950px] h-[950px]"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth={0.8}
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37">
                <animate
                  attributeName="offset"
                  values="-1; 1"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#ffd700">
                <animate
                  attributeName="offset"
                  values="0; 2"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#b8860b">
                <animate
                  attributeName="offset"
                  values="1; 3"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>

          {/* Outer lotus petals */}
          <g>
            <path d="M256 40 C280 100, 360 100, 400 160 C360 140, 280 140, 256 200 C232 140, 152 140, 112 160 C152 100, 232 100, 256 40Z" />
            <path d="M472 256 C412 280, 412 360, 352 400 C372 360, 372 280, 312 256 C372 232, 372 152, 352 112 C412 152, 412 232, 472 256Z" />
            <path d="M256 472 C232 412, 152 412, 112 352 C152 372, 232 372, 256 312 C280 372, 360 372, 400 352 C360 412, 280 412, 256 472Z" />
            <path d="M40 256 C100 232, 100 152, 160 112 C140 152, 140 232, 200 256 C140 280, 140 360, 160 400 C100 360, 100 280, 40 256Z" />
          </g>

          {/* Inner circles */}
          <circle cx="256" cy="256" r="160" />
          <circle cx="256" cy="256" r="100" />
          <circle cx="256" cy="256" r="50" />

          {/* Decorative diamonds */}
          <path d="M256 106 L276 136 L256 166 L236 136 Z" />
          <path d="M406 256 L376 276 L346 256 L376 236 Z" />
          <path d="M256 406 L236 376 L256 346 L276 376 Z" />
          <path d="M106 256 L136 236 L166 256 L136 276 Z" />

          {/* Small dots */}
          <circle cx="256" cy="156" r="5" />
          <circle cx="356" cy="256" r="5" />
          <circle cx="256" cy="356" r="5" />
          <circle cx="156" cy="256" r="5" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Elegance in Every Henna Design ✨
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-amber-800 font-sans mb-10 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          From bridal mehendi to modern minimal designs — Nivi’s artistry brings
          beauty, tradition, and charm to your special occasions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <a
            href="#about"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full shadow-lg font-semibold transition-transform transform hover:scale-105"
          >
            Explore Services
          </a>
          <a
            href="https://wa.me/9087711029"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-lg font-semibold transition-transform transform hover:scale-105"
          >
            <FaWhatsapp size={20} /> Chat on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Floating glowing orbs */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-amber-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </section>
  );
}
