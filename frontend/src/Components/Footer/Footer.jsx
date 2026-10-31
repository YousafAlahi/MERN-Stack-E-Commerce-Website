

import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/" },
    { name: "Facebook", icon: FaFacebookF, url: "https://facebook.com/" },
    { name: "TikTok", icon: FaTiktok, url: "https://tiktok.com/" },
    { name: "YouTube", icon: FaYoutube, url: "https://youtube.com/" },
  ];

  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">

        {/* Top Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-wide">
                YousufBin
              </span>
              <span className="mt-1 block text-[9px] tracking-[0.35em] text-stone-400">
                PREMIUM MENSWEAR
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-stone-400">
              Discover timeless menswear designed for modern life.
              Premium style, thoughtful details and everyday comfort.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center border border-white/20 text-lg text-stone-300 transition hover:border-white hover:bg-white hover:text-stone-900"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-5 font-serif text-xl">Explore</h2>

            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="transition hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="transition hover:text-white">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/account" className="transition hover:text-white">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="mb-5 font-serif text-xl">Collections</h2>

            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <Link
                  to="/products?category=boski"
                  className="transition hover:text-white"
                >
                  Boski
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=kurtas"
                  className="transition hover:text-white"
                >
                  Kurtas
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=shawls"
                  className="transition hover:text-white"
                >
                  Shawls
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h2 className="mb-5 font-serif text-xl">Customer Care</h2>

            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a href="mailto:support@yousufbin.example" className="transition hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/shipping" className="transition hover:text-white">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="transition hover:text-white">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Banner */}
        {/* <div className="mt-14 flex flex-col justify-between gap-5 border-y border-white/15 py-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-2xl">
              Stay in style.
            </h2>
            <p className="mt-2 text-sm text-stone-400">
              Discover new arrivals and collection updates.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex w-fit items-center gap-3 border border-white/40 px-5 py-3 text-sm transition hover:bg-white hover:text-stone-900"
          >
            Explore Collection <FiArrowUpRight />
          </Link>
        </div> */}

        {/* Bottom Footer */}
        <div className="flex flex-col gap-3 pt-7 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} YousufBin. All rights reserved.</p>
          <p>Designed for modern menswear.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
