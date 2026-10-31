

import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
 import pic1 from "../../assets/images/b1.jpg"

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/products?category=${category.slug}`}
      className="group block"
    >
      <div className="relative h-[320px] overflow-hidden bg-[#E8DDCE] sm:h-[380px]">
        {/* <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        /> */}

         <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/80">
              Explore Collection
            </p>

            <h3 className="font-serif text-2xl text-white sm:text-3xl">
              {category.name}
            </h3>
          </div>

          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F3EC] text-xl text-stone-900 transition duration-300 group-hover:bg-[#8B7055] group-hover:text-white">
            <FiArrowUpRight />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

