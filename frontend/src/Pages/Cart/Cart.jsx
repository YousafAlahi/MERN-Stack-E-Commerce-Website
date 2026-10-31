


import { Link } from "react-router-dom";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiArrowRight,
} from "react-icons/fi";
// import { useCart } from "../context/CartContext";
import { useCart } from "../../Context/CartContext.jsx";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(price);

const Cart = () => {
  const {
    cartItems,
    cartCount,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="min-h-[60vh] bg-[#F7F3EC] px-5 py-20 text-center">
        <h1 className="font-serif text-4xl text-stone-900">
          Your Shopping Cart
        </h1>

        <p className="mt-4 text-stone-600">
          Your cart is currently empty.
        </p>

        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-2 bg-stone-900 px-6 py-3 text-white hover:bg-stone-700"
        >
          Continue Shopping <FiArrowRight />
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F3EC] px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8B7055]">
          Your Selection
        </p>

        <h1 className="mt-3 font-serif text-4xl text-stone-900">
          Shopping Cart
        </h1>

        <p className="mt-3 text-sm text-stone-600">
          {cartCount} item(s) in your cart
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">
          {/* Cart Items */}
          <div className="space-y-5">
            {cartItems.map((item) => (
              <article
                key={`${item.id}-${item.size}`}
                className="flex gap-4 border-b border-stone-300 pb-5 sm:gap-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-36 w-28 bg-[#EAE3D9] object-cover sm:h-44 sm:w-36"
                />

                <div className="flex min-w-0 flex-1 flex-col">
                  <Link
                    to={`/products/${item.id}`}
                    className="font-serif text-lg text-stone-900 hover:text-[#8B7055]"
                  >
                    {item.name}
                  </Link>

                  <p className="mt-2 text-sm text-stone-600">
                    Size: {item.size}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-stone-900">
                    {formatPrice(item.price)}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                    <div className="inline-flex items-center border border-stone-300">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        disabled={item.quantity <= 1}
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.size,
                            item.quantity - 1
                          )
                        }
                        className="p-2 hover:bg-stone-200 disabled:opacity-40"
                      >
                        <FiMinus />
                      </button>

                      <span className="min-w-9 text-center text-sm">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.size,
                            item.quantity + 1
                          )
                        }
                        className="p-2 hover:bg-stone-200"
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(item.id, item.size)
                      }
                      className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-red-700"
                    >
                      <FiTrash2 /> Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Order Summary */}
          <aside className="h-fit border border-stone-300 p-6">
            <h2 className="font-serif text-2xl text-stone-900">
              Order Summary
            </h2>

            <div className="mt-6 flex justify-between gap-4 text-sm text-stone-600">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>

            <div className="mt-4 flex justify-between gap-4 border-t border-stone-300 pt-4 text-sm text-stone-600">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="mt-5 flex justify-between gap-4 border-t border-stone-300 pt-5 font-semibold text-stone-900">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>

            {/* <button
              type="button"
              disabled
              className="mt-6 w-full cursor-not-allowed bg-stone-400 px-5 py-4 text-sm text-white"
            >
              Checkout — Coming Soon
            </button> */}

            <Link
                to="/checkout"
            className="block w-full bg-[#29251f] px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest 
            text-white hover:bg-[#544638]"
            >
            Proceed to Checkout
              </Link>

            <Link
              to="/products"
              className="mt-4 block text-center text-sm text-stone-600 hover:text-stone-900"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;
