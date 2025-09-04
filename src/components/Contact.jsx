import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",   // Replace with EmailJS service ID
        "your_template_id",  // Replace with EmailJS template ID
        formRef.current,
        "your_public_key"    // Replace with EmailJS public key
      )
      .then(
        () => {
          setIsSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-henna-light px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-serif font-bold text-henna mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✨ Get in Touch ✨
        </motion.h2>

        <p className="text-henna-dark font-sans mb-12">
          Have an event coming up? Reach out to book your mehendi session today.  
          We’d love to make your moments even more special!
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-henna"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 font-sans focus:outline-none focus:ring-2 focus:ring-henna"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 font-sans focus:outline-none focus:ring-2 focus:ring-henna"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 font-sans focus:outline-none focus:ring-2 focus:ring-henna"
              ></textarea>
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg"
              >
                Send Message
              </button>
            </form>
            {isSent && (
              <p className="mt-4 text-green-600 font-sans">
                ✅ Thank you! Your message has been sent.
              </p>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-gold flex flex-col justify-center space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center space-x-3 text-henna-dark font-sans">
              <FaMapMarkerAlt className="text-gold" />
              <span>📍 Coimbatore | Home Service Available</span>
            </div>
            <div className="flex items-center space-x-3 text-henna-dark font-sans">
              <FaPhoneAlt className="text-gold" />
              <a href="tel:9087711029" className="hover:text-gold">
                📞 9087711029
              </a>
            </div>
            <a
              href="https://wa.me/9087711029"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gold text-henna px-6 py-3 rounded-full shadow-lg hover:bg-henna transition font-sans w-max"
            >
              <FaWhatsapp size={20} /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
