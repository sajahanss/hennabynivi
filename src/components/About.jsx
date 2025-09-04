import { motion, useScroll, useTransform } from "framer-motion";
import { FaLeaf, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  const { scrollY } = useScroll();

  // Parallax transforms
  const topMandalaY = useTransform(scrollY, [0, 500], [0, 50]);
  const bottomMandalaY = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-henna-light via-white to-henna-light overflow-hidden"
    >
      {/* Mandala Overlay Background */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/mandala-decor.png"
          alt="mandala pattern"
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </motion.div>

      {/* Floating Mandalas with Parallax */}
      <motion.img
        src="/mandala-pattern.png"
        alt="decorative mandala"
        className="absolute top-10 left-10 w-40 h-40 opacity-20"
        style={{ y: topMandalaY }}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/mandala-pattern.png"
        alt="decorative mandala"
        className="absolute bottom-10 right-10 w-52 h-52 opacity-20"
        style={{ y: bottomMandalaY }}
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading with aura */}
        <div className="relative inline-block mb-12">
          <div className="absolute inset-0 bg-gradient-radial from-amber-200/60 via-transparent to-transparent rounded-full blur-3xl opacity-60 -z-10"></div>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-henna"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Elegance in Every Design ✨
          </motion.h2>
        </div>

        {/* Intro Description */}
        <motion.p
          className="text-lg md:text-xl font-sans text-henna-dark leading-relaxed max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          From <span className="font-semibold text-henna">Bridal Mehendi</span>{" "}
          to trendy Arabic, Indo-Western, and minimal designs —{" "}
          <span className="font-semibold text-henna">Nivi’s artistry</span>{" "}
          brings beauty, tradition, and charm to your special occasions. Each
          stroke is crafted with passion, making your moments unforgettable.
        </motion.p>

        {/* Services & Contact */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
        >
          {/* Services */}
          <motion.div
            className="relative p-10 rounded-2xl shadow-xl border border-amber-100 bg-white/90 backdrop-blur-lg transition"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            whileHover={{
              scale: 1.02,
              rotateX: 5,
              rotateY: -5,
              transition: { type: "spring", stiffness: 150, damping: 15 },
            }}
          >
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-gradient-radial from-amber-100/40 via-transparent to-transparent rounded-2xl blur-2xl opacity-70 -z-10"></div>

            <h3 className="text-2xl font-serif font-semibold text-henna mb-6 flex items-center gap-2">
              <FaLeaf className="text-amber-600" /> Our Services
            </h3>
            <motion.ul
              className="space-y-3 text-henna-dark font-sans text-lg"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2 }}
            >
              {[
                "🌸 Bridal Mehendi",
                "🌸 Engagement & Party Mehendi",
                "🌸 Festival & Casual Mehendi",
                "🌸 Custom Name/Portrait Designs",
              ].map((service, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                >
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="relative p-10 rounded-2xl shadow-xl border border-amber-100 bg-white/90 backdrop-blur-lg transition"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            whileHover={{
              scale: 1.02,
              rotateX: -5,
              rotateY: 5,
              transition: { type: "spring", stiffness: 150, damping: 15 },
            }}
          >
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-gradient-radial from-amber-100/40 via-transparent to-transparent rounded-2xl blur-2xl opacity-70 -z-10"></div>

            <p className="text-henna-dark mb-6 font-sans text-lg">
              🎉 Whether it’s a wedding, festival, or celebration,{" "}
              <span className="font-semibold text-henna">
                Nivi’s Mehendi Touch
              </span>{" "}
              makes your moments even more memorable with designs that truly
              stand out.
            </p>

            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.25 }}
            >
              <motion.div
                className="flex items-center space-x-3 text-henna-dark"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
              >
                <FaMapMarkerAlt className="text-amber-600" />
                <span>
                  📍 Based in <b>Coimbatore</b> | ✨ Home Service Available
                </span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 text-henna-dark"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
              >
                <FaPhoneAlt className="text-amber-600" />
                <span>
                  📞 Contact:{" "}
                  <a
                    href="tel:9087711029"
                    className="text-henna font-semibold hover:text-amber-600"
                  >
                    9087711029
                  </a>
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
