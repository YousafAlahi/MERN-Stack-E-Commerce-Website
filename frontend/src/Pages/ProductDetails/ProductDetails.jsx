
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiCheck,
} from "react-icons/fi";
// import products from "../data/products";
import products from "../../data/products.js";
import { useCart } from "../../Context/CartContext.jsx";



const formatPrice = (price) =>
  new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(price);

const ProductDetails = () => {

  const { id } = useParams();
  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const { addToCart } = useCart();

  const sizes = ["S", "M", "L", "XL", "XXL"];

  // const handleAddToCart = () => {
  //   if (!selectedSize) {
  //     setMessage("Please select a size first.");
  //     return;
  //   }

  
  //   // Temporary feedback. Shared cart functionality
  //   // will be connected in Step 7.
  //   setMessage(
  //     `${product.name} (${selectedSize}) selected — quantity: ${quantity}.`
  //   );
  // };

const handleAddToCart = () => {
  if (!selectedSize) {
    setMessage("Please select a size first.");
    return;
  }

  addToCart(product, selectedSize, quantity);

  setMessage(`${product.name} added to cart successfully!`);
};

  if (!product) {
    return (
      <section className="min-h-[60vh] bg-[#F7F3EC] px-5 py-20 text-center">
        <h1 className="font-serif text-3xl text-stone-900">
          Product Not Found
        </h1>

        <p className="mt-3 text-stone-600">
          Sorry, this product does not exist.
        </p>

        <Link
          to="/products"
          className="mt-6 inline-flex bg-stone-900 px-6 py-3 text-white hover:bg-stone-700"
        >
          Back to Products
        </Link>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F3EC] px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Back Link */}
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm text-stone-600 transition hover:text-stone-900"
        >
          <FiArrowLeft />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Product Image */}
          <div className="overflow-hidden bg-[#EAE3D9]">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8B7055]">
              YousufBin / {product.category}
            </p>

            <h1 className="mt-4 font-serif text-3xl text-stone-900 sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="text-xl font-semibold text-stone-900">
                {formatPrice(product.price)}
              </span>

              {product.oldPrice && (
                <span className="text-base text-stone-400 line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}

              {product.badge && (
                <span className="bg-[#E8DDCE] px-3 py-1 text-xs text-stone-800">
                  {product.badge}
                </span>
              )}
            </div>

            <p className="mt-6 max-w-lg text-sm leading-7 text-stone-600 sm:text-base">
              {product.description}
            </p>

            <div className="my-7 border-t border-stone-300" />

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-stone-900">
                  Select Size
                </h2>

                <span className="text-xs text-stone-500">
                  Choose your size
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      setSelectedSize(size);
                      setMessage("");
                    }}
                    aria-pressed={selectedSize === size}
                    className={`flex h-11 min-w-12 items-center justify-center border px-3 text-sm transition ${
                      selectedSize === size
                        ? "border-stone-900 bg-stone-900 text-white"
                        : "border-stone-300 text-stone-800 hover:border-stone-900"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <h2 className="text-sm font-semibold text-stone-900">
                Quantity
              </h2>

              <div className="mt-3 inline-flex items-center border border-stone-300">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  className="p-3 text-stone-800 hover:bg-stone-200 disabled:opacity-40"
                >
                  <FiMinus />
                </button>

                <span className="min-w-12 text-center text-sm">
                  {quantity}
                </span>

                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  className="p-3 text-stone-800 hover:bg-stone-200"
                >
                  <FiPlus />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-8 flex w-full items-center justify-center gap-3 bg-stone-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-[#8B7055]"
            >
              <FiShoppingBag />
              Add to Cart
            </button>

            {message && (
              <p
                role="status"
                className={`mt-4 flex items-center gap-2 text-sm ${
                  message.startsWith("Please")
                    ? "text-red-700"
                    : "text-green-700"
                }`}
              >
                {!message.startsWith("Please") && <FiCheck />}
                {message}
              </p>
            )}

            <div className="mt-6 border-t border-stone-300 pt-5">
              <p className="text-sm leading-6 text-stone-600">
                Premium style • Comfortable fit • Made for everyday wear
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;

