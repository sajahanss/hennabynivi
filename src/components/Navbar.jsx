import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const sections = ["hero", "about", "gallery", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (st / docHeight) * 100;

      setScrollTop(st);
      setScrollProgress(progress);

      // detect active section
      const scrollPosition = st + 200;
      let current = "hero";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // navbar background fade (0 = transparent, 150px = fully white)
  const bgOpacity = Math.min(scrollTop / 150, 1);

  // logo shrink effect
  const logoScale = 1 - Math.min(scrollTop / 800, 0.15);

  // navbar height shrink (scroll 0 → py-4, scroll 150px → py-2)
  const navPadding = scrollTop > 100 ? "py-2" : "py-4";

  return (
    <>
      <motion.nav
        className={`fixed w-full top-0 z-50 px-8 flex justify-between items-center transition-all duration-300 border-b border-amber-200 ${navPadding}`}
        style={{
          backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
          backdropFilter: bgOpacity < 1 ? "blur(12px)" : "none",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Brand Logo */}
        <motion.h1
          className="text-2xl md:text-3xl font-serif font-bold text-amber-800 tracking-wide origin-left"
          style={{ scale: logoScale }}
          transition={{ duration: 0.3 }}
        >
          ✨ Henna by Nivi ✨
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.slice(1).map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative text-lg font-medium transition-colors ${
                activeSection === item
                  ? "text-amber-700"
                  : "text-amber-900 hover:text-amber-700"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-amber-600 transition-all duration-300 ${
                  activeSection === item ? "w-full" : "w-0 hover:w-full"
                }`}
              ></span>
            </a>
          ))}

          {/* Book Now CTA */}
          <a
            href="#contact"
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-5 py-2 rounded-full shadow-md hover:from-amber-700 hover:to-amber-800 transform transition duration-300 hover:scale-105 font-medium"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-amber-800 text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] bg-amber-600 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 left-0 w-full bg-white shadow-lg border-t border-amber-200 z-40"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {sections.slice(1).map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-medium transition ${
                    activeSection === item
                      ? "text-amber-700"
                      : "text-amber-900 hover:text-amber-700"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}

              {/* Book Now Button inside Mobile Menu */}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-full shadow-md hover:from-amber-700 hover:to-amber-800 transform transition duration-300 hover:scale-105 font-medium"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
