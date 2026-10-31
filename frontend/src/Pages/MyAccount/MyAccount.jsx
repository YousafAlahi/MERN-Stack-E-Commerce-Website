

import { useState } from "react";
import {
  FiUser,
  FiPackage,
  FiMapPin,
  FiSettings,
  FiLogOut,
  FiEdit2,
  FiShoppingBag,
  FiChevronRight,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const menuItems = [
  { id: "profile", label: "My Profile", icon: FiUser },
  { id: "orders", label: "My Orders", icon: FiPackage },
  { id: "addresses", label: "Address Book", icon: FiMapPin },
  { id: "settings", label: "Account Settings", icon: FiSettings },
];

const demoOrders = [
  {
    id: "YB-1024",
    date: "20 Oct 2026",
    item: "Classic Boski Collection",
    price: 5490,
    status: "Delivered",
  },
  {
    id: "YB-1025",
    date: "24 Oct 2026",
    item: "Premium Kurta",
    price: 3490,
    status: "Processing",
  },
];

const formatPrice = (price) =>
  `Rs. ${price.toLocaleString("en-PK")}`;

export default function MyAccount() {
  const [activeTab, setActiveTab] = useState("profile");

  const [profile, setProfile] = useState({
    name: "Yousuf Ali",
    email: "yousuf@example.com",
    phone: "",
  });

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    city: "",
    details: "",
  });

  const [message, setMessage] = useState("");

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    setMessage(
      "Changes updated in this demo. Connect your backend to save them permanently."
    );
  };

  const activeMenu = menuItems.find(
    (item) => item.id === activeTab
  );

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#29251f]">
      {/* Page Heading */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-12 sm:px-8 lg:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8a7967]">
          YousufBin / Account
        </p>

        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
          My Account<span className="text-[#a68b68]">.</span>
        </h1>

        <p className="mt-3 text-sm text-[#797168]">
          Manage your profile, orders and personal information.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-12">
        {/* Sidebar */}
        <aside className="h-fit border border-[#e3d9cc] bg-[#fbf8f3] p-5">
          <div className="flex items-center gap-4 border-b border-[#e3d9cc] pb-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e8dfd2] font-serif text-2xl">
              {profile.name.trim().charAt(0).toUpperCase() || "Y"}
            </div>

            <div className="min-w-0">
              <p className="truncate font-serif text-lg">
                {profile.name || "Your Name"}
              </p>
              <p className="truncate text-xs text-[#81776d]">
                {profile.email}
              </p>
            </div>
          </div>

          <nav className="mt-5 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id);
                    setMessage("");
                  }}
                  className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition ${
                    isActive
                      ? "bg-[#29251f] text-white"
                      : "text-[#71675c] hover:bg-[#eee6da]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={17} />
                    {item.label}
                  </span>
                  <FiChevronRight size={15} />
                </button>
              );
            })}

            <button
              type="button"
              onClick={() =>
                setMessage("Logout will work after authentication is connected.")
              }
              className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-700 hover:bg-red-50"
            >
              <FiLogOut size={17} />
              Logout
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="min-w-0">
          <div className="border border-[#e3d9cc] bg-[#fbf8f3] p-5 sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8a7967]">
              Account dashboard
            </p>

            <h2 className="mt-2 font-serif text-3xl">
              {activeMenu?.label}
            </h2>

            {message && (
              <p
                role="status"
                className="mt-5 border border-[#d7c9b5] bg-[#f1e9dd] p-4 text-sm leading-6"
              >
                {message}
              </p>
            )}

            {/* Profile */}
            {activeTab === "profile" && (
              <form onSubmit={handleSave} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={profile.name}
                    onChange={handleProfileChange}
                    required
                    className="w-full border border-[#dcd2c5] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a7967]"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider">
                    <FiMail /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    required
                    className="w-full border border-[#dcd2c5] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a7967]"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider">
                    <FiPhone /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleProfileChange}
                    placeholder="03XX XXXXXXX"
                    className="w-full border border-[#dcd2c5] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a7967]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#29251f] px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#665340]"
                >
                  <FiEdit2 className="mr-2 inline" />
                  Save Changes
                </button>
              </form>
            )}

            {/* Orders */}
            {activeTab === "orders" && (
              <div className="mt-8 space-y-4">
                {demoOrders.map((order) => (
                  <article
                    key={order.id}
                    className="border border-[#e3d9cc] p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-xs text-[#8a7967]">
                          Order #{order.id}
                        </p>
                        <h3 className="mt-2 font-serif text-lg">
                          {order.item}
                        </h3>
                        <p className="mt-1 text-xs text-[#81776d]">
                          {order.date}
                        </p>
                      </div>

                      <span
                        className={`px-3 py-2 text-xs ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-[#e3d9cc] pt-4">
                      <span className="text-sm text-[#81776d]">
                        Total
                      </span>
                      <span className="font-medium">
                        {formatPrice(order.price)}
                      </span>
                    </div>
                  </article>
                ))}

                <p className="text-xs leading-6 text-[#81776d]">
                  Sample orders only. Real orders will appear after your
                  backend and checkout system are connected.
                </p>
              </div>
            )}

            {/* Address Book */}
            {activeTab === "addresses" && (
              <form onSubmit={handleSave} className="mt-8 space-y-5">
                <p className="text-sm leading-6 text-[#81776d]">
                  Add your delivery details for future orders.
                </p>

                {[
                  {
                    name: "fullName",
                    label: "Recipient Name",
                    placeholder: "Enter full name",
                  },
                  {
                    name: "phone",
                    label: "Phone Number",
                    placeholder: "03XX XXXXXXX",
                  },
                  {
                    name: "city",
                    label: "City",
                    placeholder: "e.g. Lahore",
                  },
                  {
                    name: "details",
                    label: "Full Address",
                    placeholder: "House, street, area and postal code",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="mb-2 block text-xs uppercase tracking-wider">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      value={address[field.name]}
                      onChange={handleAddressChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full border border-[#dcd2c5] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a7967]"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="bg-[#29251f] px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#665340]"
                >
                  Save Address
                </button>
              </form>
            )}

            {/* Settings */}
            {activeTab === "settings" && (
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4 border border-[#e3d9cc] p-5">
                  <FiSettings className="mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium">Account Information</h3>
                    <p className="mt-2 text-sm leading-6 text-[#81776d]">
                      Update your name, email and phone from My Profile.
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveTab("profile")}
                      className="mt-3 border-b border-[#29251f] pb-1 text-xs uppercase tracking-wider"
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4 border border-[#e3d9cc] p-5">
                  <FiMapPin className="mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="font-medium">Delivery Address</h3>
                    <p className="mt-2 text-sm leading-6 text-[#81776d]">
                      Manage your shipping details in Address Book.
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveTab("addresses")}
                      className="mt-3 border-b border-[#29251f] pb-1 text-xs uppercase tracking-wider"
                    >
                      Manage Address
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              to="/shop"
              className="flex items-center justify-between border border-[#e3d9cc] bg-[#fbf8f3] p-5 transition hover:border-[#a68b68]"
            >
              <span className="flex items-center gap-3 text-sm">
                <FiShoppingBag size={19} />
                Continue Shopping
              </span>
              <FiChevronRight />
            </Link>

            <Link
              to="/cart"
              className="flex items-center justify-between border border-[#e3d9cc] bg-[#fbf8f3] p-5 transition hover:border-[#a68b68]"
            >
              <span className="flex items-center gap-3 text-sm">
                <FiPackage size={19} />
                View My Cart
              </span>
              <FiChevronRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
