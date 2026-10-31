
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { ProductData } from "../../assets/images/data.js";

import {
  FiSearch,
  FiSliders,
  FiShoppingBag,
  FiArrowUpRight,
} from "react-icons/fi";

 console.log(ProductData);

 const products = ProductData.map((product) => {
  const categoryMap = {
    "Man Boski": "Boski",
    "Man Kurta": "Kurtas",
    "Man Shawl": "Shawls",
    "Man Cotten": "Cotton",
  };

  return {
    id: product.id,
    name: `${product.title} ${product.id}`,
    category: categoryMap[product.title] || "Other",
    price: Number(String(product.price).replace(/[^0-9.]/g, "")),
    oldPrice: null,
    color: "Classic",
    image: product.image,
    badge: product.rating >= 5 ? "FEATURED" : "",
    rating: product.rating,
  };
});

const categories = [
  "All Products",
  "Boski",
  "Kurtas",
  "Shawls",
  "Cotton",
];


// const products = [
//   {
//     id: 1,
//     name: "Classic Ivory Boski",
//     category: "Boski",
//     price: 5490,
//     oldPrice: 6490,
//     color: "Ivory",
//     image:
//       "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=85",
//     badge: "BESTSELLER",
//   },
//   {
//     id: 2,
//     name: "Premium Black Kurta",
//     category: "Kurtas",
//     price: 4290,
//     oldPrice: null,
//     color: "Black",
//     image:
//       "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=85",
//     badge: "NEW ARRIVAL",
//   },
//   {
//     id: 3,
//     name: "Sand Beige Boski",
//     category: "Boski",
//     price: 5990,
//     oldPrice: null,
//     color: "Sand Beige",
//     image:
//       "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=85",
//     badge: "",
//   },
//   {
//     id: 4,
//     name: "Heritage White Kurta",
//     category: "Kurtas",
//     price: 3890,
//     oldPrice: null,
//     color: "White",
//     image:
//       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
//     badge: "",
//   },
//   {
//     id: 5,
//     name: "Classic Charcoal Shawl",
//     category: "Shawls",
//     price: 3290,
//     oldPrice: null,
//     color: "Charcoal",
//     image:
//       "https://images.unsplash.com/photo-1520975958225-9e7b0c4b8b2d?auto=format&fit=crop&w=800&q=85",
//     badge: "LIMITED",
//   },
//   {
//     id: 6,
//     name: "Midnight Blue Boski",
//     category: "Boski",
//     price: 6290,
//     oldPrice: null,
//     color: "Midnight Blue",
//     image:
//       "https://images.unsplash.com/photo-1618354691229-88d47f285158?auto=format&fit=crop&w=800&q=85",
//     badge: "",
//   },
//   {
//     id: 7,
//     name: "Everyday Beige Kurta",
//     category: "Kurtas",
//     price: 3490,
//     oldPrice: 3990,
//     color: "Beige",
//     image:
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=85",
//     badge: "SALE",
//   },
//   {
//     id: 8,
//     name: "Premium Winter Shawl",
//     category: "Shawls",
//     price: 4590,
//     oldPrice: null,
//     color: "Brown",
//     image:
//       "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=85",
//     badge: "",
//   },
// ];

// const categories = ["All Products", "Boski", "Kurtas", "Shawls"];

// const formatPrice = (price) =>
//   `Rs. ${price.toLocaleString("en-PK")}`;

const formatPrice = (price) => `$${price}`;

export default function Shop({ onAddToCart }) {
  const { addToCart } = useCart();

  const [activeCategory, setActiveCategory] = useState("All Products");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const matchesSearch = `${product.name} ${product.category} ${product.color}`
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [activeCategory, search, sortBy]);

  // const handleAddToCart = (product) => {
  //   if (onAddToCart) {
  //     onAddToCart(product);
  //   } else {
  //     alert(`${product.name} — Cart integration abhi connect nahi hai.`);
  //   }
  // };

  const handleAddToCart = (product) => {
  addToCart(product);
          };
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#29251f]">
      {/* Shop Hero */}
      <section className="mx-auto max-w-[1500px] px-5 pb-10 pt-12 sm:px-8 lg:px-12 lg:pt-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#8a7967]">
          The YousufBin Collection
        </p>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
              The Shop<span className="text-[#a68b68]">.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#797168] sm:text-base">
              Discover timeless Pakistani menswear, premium Boski
              fabrics and everyday essentials crafted with elegance.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#797168]">
            <span>Home</span>
            <span>/</span>
            <span className="text-[#29251f]">Shop</span>
          </div>
        </div>

        {/* Collection Banner */}
        <div className="relative mt-10 flex min-h-[230px] items-center overflow-hidden bg-[#e8dfd2] sm:min-h-[280px] lg:min-h-[320px]">
          <div className="relative z-10 max-w-xl px-6 py-10 sm:px-12 lg:px-16">
            <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#78654f]">
              Made for your moments
            </p>

            <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Tradition, tailored
              <br />
              for today.
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#71675c]">
              Refined textures. Effortless silhouettes. A style
              that never goes out of fashion.
            </p>

            <a
              href="#shop-products"
              className="mt-6 inline-flex items-center gap-3 border-b border-[#29251f] pb-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:text-[#9a7953]"
            >
              Explore collection <FiArrowUpRight size={16} />
            </a>
          </div>

          <div className="absolute inset-y-0 right-0 hidden w-[43%] sm:block">
            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1000&q=85"
              alt="Premium menswear collection"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#e8dfd2] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section
        id="shop-products"
        className="mx-auto max-w-[1500px] px-5 pb-20 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col gap-6 border-b border-[#dfd6ca] pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8a7967]">
              Curated for you
            </p>

            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
              Shop All
            </h2>

            <p className="mt-2 text-sm text-[#81776d]">
              {filteredProducts.length} products available
            </p>
          </div>

          {/* Search and Sort */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex min-w-0 items-center gap-3 border border-[#dcd2c5] bg-[#fbf8f3] px-4 py-3 sm:w-64">
              <FiSearch size={17} className="shrink-0 text-[#766b60]" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                aria-label="Search products"
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#a59a8e]"
              />
            </label>

            <label className="flex items-center gap-3 border border-[#dcd2c5] bg-[#fbf8f3] px-4 py-3">
              <FiSliders size={17} className="shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products"
                className="w-full cursor-pointer bg-transparent text-sm outline-none"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </label>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto py-6">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 border px-5 py-3 text-xs uppercase tracking-[0.12em] transition-all duration-200 ${
                activeCategory === category
                  ? "border-[#29251f] bg-[#29251f] text-white"
                  : "border-[#dcd2c5] bg-transparent text-[#63594f] hover:border-[#29251f]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <article key={product.id} className="group min-w-0">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#ebe4da]">
                  <Link
                    to={`/products/${product.id}`}
                    aria-label={`View ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  {product.badge && (
                    <span className="absolute left-3 top-3 bg-[#f7f3ec] px-3 py-2 text-[9px] font-medium tracking-[0.15em]">
                      {product.badge}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className="absolute bottom-3 left-3 right-3 flex translate-y-3 items-center justify-center gap-2 bg-[#f7f3ec] px-4 py-4 text-xs font-semibold uppercase tracking-[0.13em] opacity-0 transition-all duration-300 hover:bg-[#29251f] hover:text-white group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
                  >
                    <FiShoppingBag size={16} />
                    Add to Cart
                  </button>
                </div>

                <div className="flex items-start justify-between gap-3 pt-4">
                  <div className="min-w-0">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.17em] text-[#8b7d6e]">
                      {product.category} · {product.color}
                    </p>

                    <Link
                      to={`/products/${product.id}`}
                      className="font-serif text-lg transition-colors hover:text-[#997b58]"
                    >
                      {product.name}
                    </Link>
                  </div>

                  <div className="shrink-0 pt-1 text-right text-sm">
                    <p className="font-medium">
                      {formatPrice(product.price)}
                    </p>

                    {product.oldPrice && (
                      <p className="mt-1 text-xs text-[#968a7d] line-through">
                        {formatPrice(product.oldPrice)}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="font-serif text-2xl">No products found</h3>
            <p className="mt-3 text-sm text-[#81776d]">
              Try another search or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All Products");
              }}
              className="mt-6 border border-[#29251f] px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#29251f] hover:text-white"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
