import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "2348123456789";

const ProductCard = ({ product }: { product: Product }) => {
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to order the *${product.name}* (${product.price}) from Maison Lagos.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handlePayNow = () => {
    toast.success("Payment gateway coming soon! Please use WhatsApp to complete your order.", {
      duration: 4000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-sm bg-card border border-border hover-gold-glow transition-all duration-500">
        {/* Image */}
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] tracking-[0.2em] uppercase font-body font-medium bg-background/80 backdrop-blur-sm text-primary px-3 py-1 rounded-sm">
            {product.category}
          </span>
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="font-display text-xl font-medium text-foreground mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground font-body mb-3 line-clamp-2">
            {product.description}
          </p>
          <p className="font-display text-2xl font-semibold text-primary mb-4">
            {product.price}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleWhatsAppOrder}
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-[#fff] text-xs font-body font-semibold tracking-wider uppercase py-3 rounded-sm hover:bg-[#20bd5a] transition-colors"
            >
              <ShoppingBag size={14} />
              WhatsApp Order
            </button>
            <button
              onClick={handlePayNow}
              className="flex-1 bg-gold-gradient text-primary-foreground text-xs font-body font-semibold tracking-wider uppercase py-3 rounded-sm hover:opacity-90 transition-opacity"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
