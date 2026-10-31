

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useCart } from "../../Context/CartContext";
// import { useCrt } from "../context/CartContext";




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const navLinks = [
    { name: "Home", path: "/" },
    // { name: "Shop", path: "/products" },
    // { name: "Boski", path: "/products?category=boski" },
    // { name: "Kurtas", path: "/products?category=kurtas" },
    // { name: "Shawls", path: "/products?category=shawls" },
    { name: "Shop", path: "/shop" },
    { name: "Boski", path: "/boski" },
    { name: "Kurtas", path: "/kurtas" },
    { name: "Shawls", path: "/shawls" },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-stone-900"
        : "text-stone-500 hover:text-stone-900"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#F7F3EC]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <span className="font-serif text-2xl font-bold tracking-wide text-stone-900">
            YousufBin
          </span>
          <span className="mt-0.5 block text-[9px] tracking-[0.3em] text-stone-500">
            PREMIUM MENSWEAR
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-4 text-xl text-stone-800">
          <button
            type="button"
            aria-label="Search products"
            className="transition hover:text-stone-500"
          >
            <FiSearch />
          </button>
            {/* Login and Signup Page Link */}
          <Link
            to="/account"
            aria-label="My account"
            className="hidden transition hover:text-stone-500 sm:block"
          >
            <FiUser />
          </Link>

        <Link to="/cart" aria-label={`Shopping cart, ${cartCount} items`} className="relative transition hover:text-stone-500"> 
        <FiShoppingBag />
        {cartCount > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-stone-900 px-1 text-[10px] text-white">
        {cartCount}
        </span>
        )}
        </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl lg:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="border-t border-stone-200 bg-[#F7F3EC] px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

