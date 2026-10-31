
import { Link } from "react-router-dom";
import { FiShoppingBag, FiArrowUpRight } from "react-icons/fi";
import { useCart } from "../../Context/CartContext.jsx";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(price);

// const ProductCard = ({ product, onAddToCart }) => {
  
const ProductCard = ({ product }) => {

const { addToCart } = useCart();

  return (
    <article className="group">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-[#EAE3D9]">
        <Link
          to={`/products/${product.id}`}
          aria-label={`View ${product.name}`}
          className="block"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-[#F7F3EC] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-stone-800">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          // onClick={() => onAddToCart(product)}
          onClick={() => addToCart(product, "M", 1)}
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center bg-white text-xl text-stone-900 shadow-sm transition hover:bg-stone-900 hover:text-white"
        >
          <FiShoppingBag />
        </button>
      </div>

      {/* Product Information */}
      <div className="pt-4">
        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-stone-500">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h3 className="font-serif text-lg text-stone-900 transition hover:text-[#8B7055]">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-stone-900">
            {formatPrice(product.price)}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-stone-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        <Link
          to={`/products/${product.id}`}
          className="mt-4 inline-flex items-center gap-2 border-b border-stone-300 pb-1 text-xs font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
        >
          View Details <FiArrowUpRight />
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;

