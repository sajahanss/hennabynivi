import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919087711029?text=Hi%20Nivi,%20I%20would%20like%20to%20book%20a%20Mehendi%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
