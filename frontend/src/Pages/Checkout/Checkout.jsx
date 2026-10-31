

import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

export default function Checkout() {
  const { cartItems, cartTotal } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f7f3ec] px-5 py-20 text-center text-[#29251f]">
        <h1 className="font-serif text-4xl">
          Order Details Submitted
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#797168]">
          Your checkout form has been completed. This is a frontend
          demo; your order has not been saved or sent to the store.
        </p>

        <Link
          to="/shop"
          className="mt-8 inline-block bg-[#29251f] px-7 py-4 text-xs uppercase tracking-widest text-white"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f3ec] px-5 py-12 text-[#29251f] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.25em] text-[#8a7967]">
          YousufBin / Checkout
        </p>

        <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
          Checkout
        </h1>

        {cartItems.length === 0 ? (
          <div className="mt-10 border border-[#dfd6ca] p-8">
            <p>Your cart is empty.</p>
            <Link
              to="/shop"
              className="mt-5 inline-block underline"
            >
              Return to Shop
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <h2 className="font-serif text-2xl">
                Shipping Information
              </h2>

              {[
                {
                  name: "fullName",
                  label: "Full Name",
                  type: "text",
                },
                {
                  name: "email",
                  label: "Email Address",
                  type: "email",
                },
                {
                  name: "phone",
                  label: "Phone Number",
                  type: "tel",
                },
                {
                  name: "city",
                  label: "City",
                  type: "text",
                },
              ].map((field) => (
                <label
                  key={field.name}
                  className="block text-sm"
                >
                  {field.label}

                  <input
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full border border-[#dcd2c5] bg-[#fbf8f3] px-4 py-3 outline-none focus:border-[#29251f]"
                  />
                </label>
              ))}

              <label className="block text-sm">
                Complete Shipping Address

                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-2 w-full border border-[#dcd2c5] bg-[#fbf8f3] px-4 py-3 outline-none focus:border-[#29251f]"
                />
              </label>

              <button
                type="submit"
                className="w-full bg-[#29251f] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#544638]"
              >
                Submit Checkout Details
              </button>

              <p className="text-xs leading-5 text-[#81776d]">
                Demo only: this form does not place a real order
                or process payment.
              </p>
            </form>

            <aside className="h-fit border border-[#dfd6ca] bg-[#fbf8f3] p-6 sm:p-8">
              <h2 className="font-serif text-2xl">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex justify-between gap-4 text-sm"
                  >
                    <div>
                      <p>{item.name}</p>
                      <p className="mt-1 text-xs text-[#81776d]">
                        Size: {item.size} · Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="shrink-0">
                      Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between border-t border-[#dfd6ca] pt-5 font-semibold">
                <span>Total</span>
                <span>{`Rs. ${cartTotal.toLocaleString("en-PK")}`}</span>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
