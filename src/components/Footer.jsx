import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-serif font-bold mb-3">Henna by Nivi</h3>
          <p className="text-sm text-amber-200 font-sans">
            Bringing elegance, tradition, and artistry to your hands and feet with intricate mehendi designs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-serif font-semibold mb-3 text-amber-400">Quick Links</h4>
          <ul className="space-y-2 text-sm font-sans">
            <li><a href="#hero" className="hover:text-amber-400">Home</a></li>
            <li><a href="#about" className="hover:text-amber-400">About</a></li>
            <li><a href="#gallery" className="hover:text-amber-400">Gallery</a></li>
            <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-serif font-semibold mb-3 text-amber-400">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
              className="bg-amber-400 text-amber-900 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
              className="bg-amber-400 text-amber-900 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/9087711029" target="_blank" rel="noopener noreferrer"
              className="bg-amber-400 text-amber-900 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-amber-700 pt-4 text-center text-sm text-amber-200 font-sans">
        © {new Date().getFullYear()} Henna by Nivi. All Rights Reserved.
      </div>
    </footer>
  );
}
