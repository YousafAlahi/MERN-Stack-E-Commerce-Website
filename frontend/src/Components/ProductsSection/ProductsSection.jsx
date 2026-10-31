

import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
// import products from "../data/products";
import products from "../../data/products.js";
// import ProductCard from "./ProductCard";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useCart } from "../../Context/CartContext.jsx";

const filters = [
  { label: "All Products", value: "all" },
  { label: "Boski", value: "boski" },
  { label: "Kurtas", value: "kurtas" },
  { label: "Shawls", value: "shawls" },
];

const ProductsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  // const [cart, setCart] = useState([]);
  const { cartCount } = useCart();

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter(
          (product) => product.category === activeFilter
        );

  // const handleAddToCart = (product) => {
  //   setCart((currentCart) => {
  //     const existingItem = currentCart.find(
  //       (item) => item.id === product.id
  //     );

  //     if (existingItem) {
  //       return currentCart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     }

  //     return [...currentCart, { ...product, quantity: 1 }];
  //   });
  // };

  // const cartCount = cart.reduce(
  //   (total, item) => total + item.quantity,
  //   0
  // );

  return (
    <section className="bg-[#F7F3EC] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B7055]">
              Handpicked for You
            </p>

            <h2 className="font-serif text-3xl text-stone-900 sm:text-4xl lg:text-5xl">
              Our Collection
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-stone-600">
              Explore timeless essentials crafted for modern men.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-800 hover:text-[#8B7055]"
          >
            View All Products <FiArrowRight />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 text-sm transition ${
                activeFilter === filter.value
                  ? "bg-stone-900 text-white"
                  : "border border-stone-300 text-stone-700 hover:border-stone-900"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Cart Feedback */}
        {/* <p className="mt-4 text-sm text-stone-600" aria-live="polite">
          Items added in this demo: {cartCount}
        </p> */}
        <p className="mt-4 text-sm text-stone-600" aria-live="polite">
        Items in your cart: {cartCount}
        </p>

        {/* Product Grid */}
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            // <ProductCard
            //   key={product.id}
            //   product={product}
            //   onAddToCart={handleAddToCart}
            // />
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="py-12 text-center text-stone-600">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
