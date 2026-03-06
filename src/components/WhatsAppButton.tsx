import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "2348123456789";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your collection at Maison Lagos."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-[#fff]" />
    </button>
  );
};

export default WhatsAppButton;
