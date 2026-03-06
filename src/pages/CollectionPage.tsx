import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["All", "Women", "Men", "Accessories"];

const CollectionPage = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary font-body mb-3">
              Our Collection
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-light text-foreground">
              The <span className="text-gold-gradient italic font-semibold">Collection</span>
            </h1>
          </motion.div>

          {/* Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs tracking-[0.15em] uppercase font-body font-medium px-6 py-2.5 rounded-sm border transition-all duration-300 ${
                  active === cat
                    ? "bg-gold-gradient text-primary-foreground border-transparent"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CollectionPage;
