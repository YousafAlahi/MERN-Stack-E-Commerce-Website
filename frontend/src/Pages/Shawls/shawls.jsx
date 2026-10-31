

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiArrowUpRight,
} from "react-icons/fi";
import { useCart } from "../../Context/CartContext";
import { ProductData } from "../../assets/images/data.js";



const shawlProducts = ProductData
  .filter((product) => product.title === "Man Shawl")
  .map((product) => ({
    id: product.id,
    name: `${product.title} ${product.id}`,
    price: Number(
      String(product.price).replace(/[^0-9.]/g, "")
    ),
    color: "Classic",
    image: product.image,
    badge: product.rating >= 5 ? "FEATURED" : "",
    rating: product.rating,
  }));

const formatPrice = (price) => `$${price}`;
// const shawlProducts = [
//   {
//     id: 301,
//     name: "Classic Charcoal Shawl",
//     price: 3290,
//     color: "Charcoal",
//     image:
//       "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=85",
//     badge: "BESTSELLER",
//   },
//   {
//     id: 302,
//     name: "Premium Camel Shawl",
//     price: 4590,
//     color: "Camel",
//     image:
//       "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=85",
//     badge: "NEW ARRIVAL",
//   },
//   {
//     id: 303,
//     name: "Ivory Classic Shawl",
//     price: 3890,
//     color: "Ivory",
//     image:
//       "https://images.unsplash.com/photo-1520975958225-9e7b0c4b8b2d?auto=format&fit=crop&w=800&q=85",
//     badge: "",
//   },
//   {
//     id: 304,
//     name: "Midnight Black Shawl",
//     price: 4290,
//     color: "Black",
//     image:
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=85",
//     badge: "",
//   },
//   {
//     id: 305,
//     name: "Warm Brown Shawl",
//     price: 3990,
//     color: "Brown",
//     image:
//       "https://images.unsplash.com/photo-1618354691229-88d47f285158?auto=format&fit=crop&w=800&q=85",
//     badge: "",
//   },
//   {
//     id: 306,
//     name: "Heritage Beige Shawl",
//     price: 4890,
//     color: "Beige",
//     image:
//       "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=85",
//     badge: "LIMITED",
//   },
//   {
//     id: 307,
//     name: "Olive Winter Shawl",
//     price: 4190,
//     color: "Olive",
//     image:
//       "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=85",
//     badge: "",
//   },
//   {
//     id: 308,
//     name: "Sandstone Luxury Shawl",
//     price: 5290,
//     color: "Sand",
//     image:
//       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
//     badge: "NEW",
//   },
// ];

// const formatPrice = (price) =>
//   `Rs. ${price.toLocaleString("en-PK")}`;

export default function Shawls() {
  const { addToCart } = useCart();

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = shawlProducts.filter((product) =>
      `${product.name} ${product.color}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

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
  }, [search, sortBy]);

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#29251f]">
      {/* Hero Section */}
      <section className="mx-auto max-w-[1500px] px-5 pb-10 pt-12 sm:px-8 lg:px-12 lg:pt-16">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8a7967]">
          YousufBin / Collections
        </p>

        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl">
          The Shawl Edit<span className="text-[#a68b68]">.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#797168] sm:text-base">
          Complete your look with timeless shawls, refined textures
          and classic colours for cooler days and special occasions.
        </p>

        {/* Collection Banner */}
        <div className="relative mt-10 flex min-h-[280px] items-center overflow-hidden bg-[#e8dfd2] sm:min-h-[340px] lg:min-h-[400px]">
          <div className="relative z-10 max-w-xl px-6 py-10 sm:px-12 lg:px-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#78654f]">
              The winter collection
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Warmth meets
              <br />
              sophistication.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#71675c]">
              Discover versatile layers and understated elegance
              for the modern gentleman.
            </p>

            <a
              href="#shawl-products"
              className="mt-7 inline-flex items-center gap-3 border-b border-[#29251f] pb-2 text-xs font-semibold uppercase tracking-[0.15em] hover:text-[#997b58]"
            >
              Explore Shawls <FiArrowUpRight size={16} />
            </a>
          </div>

          <div className="absolute inset-y-0 right-0 hidden w-[46%] sm:block">
            <img
              src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1100&q=85"
              alt="Winter fashion collection"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#e8dfd2] via-[#e8dfd2]/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="shawl-products"
        className="mx-auto max-w-[1500px] px-5 pb-20 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col gap-5 border-b border-[#dfd6ca] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8a7967]">
              Essential finishing layers
            </p>

            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
              Premium Shawls
            </h2>

            <p className="mt-2 text-sm text-[#81776d]">
              {filteredProducts.length} products available
            </p>
          </div>

          {/* Search and Sorting */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex items-center gap-3 border border-[#dcd2c5] bg-[#fbf8f3] px-4 py-3 sm:w-64">
              <FiSearch size={17} />

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search shawls..."
                aria-label="Search shawls"
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#a59a8e]"
              />
            </label>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort shawls"
              className="border border-[#dcd2c5] bg-[#fbf8f3] px-4 py-3 text-sm outline-none"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Responsive Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                    <span className="absolute left-3 top-3 bg-[#f7f3ec] px-3 py-2 text-[9px] tracking-[0.15em]">
                      {product.badge}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="absolute bottom-3 left-3 right-3 flex translate-y-3 items-center justify-center gap-2 bg-[#f7f3ec] px-4 py-4 text-xs font-semibold uppercase tracking-[0.13em] opacity-0 transition-all duration-300 hover:bg-[#29251f] hover:text-white group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
                  >
                    <FiShoppingBag size={16} />
                    Add to Cart
                  </button>
                </div>

                <div className="flex items-start justify-between gap-3 pt-4">
                  <div className="min-w-0">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.17em] text-[#8b7d6e]">
                      Shawls · {product.color}
                    </p>

                    <Link
                      to={`/products/${product.id}`}
                      className="font-serif text-lg hover:text-[#997b58]"
                    >
                      {product.name}
                    </Link>
                  </div>

                  <p className="shrink-0 pt-1 text-sm font-medium">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="font-serif text-2xl">
              No shawls found
            </h3>

            <p className="mt-3 text-sm text-[#81776d]">
              Try searching for another colour or product.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-6 border border-[#29251f] px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#29251f] hover:text-white"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

