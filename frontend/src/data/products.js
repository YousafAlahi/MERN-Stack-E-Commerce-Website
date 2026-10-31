
import pic1 from '../assets/images/k13.jpg'
import pic2 from '../assets/images/k10.jpg'
import pic3 from '../assets/images/k11.jpg'
import pic4 from '../assets/images/k12.jpg'




const products = [
  {
    id: 1,
    name: "Classic Boski Suit",
    category: "boski",
    price: 4500,
    oldPrice: 5200,
    image: pic1,
    // image:
    //   "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=85",
    badge: "Bestseller",
    description: "Premium fabric for an elegant traditional look.",
  },
  {
    id: 2,
    name: "Premium Men's Kurta",
    category: "kurtas",
    price: 3200,
    oldPrice: 3800,
    image: pic2,
    // image:
    //   "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=85",
    badge: "New",
    description: "A timeless kurta designed for comfort and style.",
  },
  {
    id: 3,
    name: "Classic Woven Shawl",
    category: "shawls",
    price: 2500,
    oldPrice: null,
    image: pic3,
    // image:
    //   "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=85",
    badge: "",
    description: "A versatile shawl to complete your outfit.",
  },
  {
    id: 4,
    name: "Everyday Cotton Kurta",
    category: "kurtas",
    price: 2800,
    oldPrice: null,
    image: pic4,
    // image:
    //   "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=85",
    badge: "Popular",
    description: "Everyday comfort with a refined silhouette.",
  },
];

export default products;
