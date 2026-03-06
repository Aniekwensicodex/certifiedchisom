export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Emerald Empress Gown",
    price: "₦185,000",
    image: product1,
    category: "Women",
    description: "Hand-embroidered emerald gown with gold detailing, perfect for owambe celebrations.",
  },
  {
    id: 2,
    name: "Burgundy Ankara Set",
    price: "₦95,000",
    image: product2,
    category: "Women",
    description: "Bold burgundy and gold ankara two-piece with matching gele headwrap.",
  },
  {
    id: 3,
    name: "Ivory Senator Suit",
    price: "₦120,000",
    image: product3,
    category: "Men",
    description: "Tailored cream senator suit with signature gold button detailing.",
  },
  {
    id: 4,
    name: "Royal Aso-Oke Ensemble",
    price: "₦210,000",
    image: product4,
    category: "Women",
    description: "Royal blue aso-oke blouse with handwoven gold-thread gele and ìpèlé.",
  },
  {
    id: 5,
    name: "Heritage Coral Bead Set",
    price: "₦75,000",
    image: product5,
    category: "Accessories",
    description: "Traditional coral and gold beaded necklace set with matching drop earrings.",
  },
  {
    id: 6,
    name: "Amethyst Kaftan Dress",
    price: "₦155,000",
    image: product6,
    category: "Women",
    description: "Flowing purple kaftan with intricate gold threadwork and wide sleeves.",
  },
];
