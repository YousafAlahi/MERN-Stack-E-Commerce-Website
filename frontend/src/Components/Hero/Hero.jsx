


import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Img1 from '../../assets/images/my1.png'

const Hero = () => {
  return (
    <section className="overflow-hidden bg-[#F7F3EC]">
      <div className="mx-auto grid min-h-[560px] max-w-7xl grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-16">

        {/* Left: Hero Content */}
        <div className="order-2 animate-[fadeIn_0.8s_ease-out] lg:order-1">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B7055] sm:text-sm">
            Men's Fashion Collection
          </p>

          <h1 className="max-w-xl font-serif text-4xl font-medium leading-tight text-[#171717] sm:text-5xl lg:text-6xl xl:text-7xl">
            Tradition Meets{" "}
            <span className="italic text-[#8B7055]">
              Modern Style
            </span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-stone-600 sm:text-base">
            Discover timeless menswear designed for your everyday style.
            Premium quality, elegant looks and unmatched comfort.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-[#171717] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:bg-[#8B7055]"
            >
              Shop Collection
              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/products"
              className="border-b border-stone-400 pb-1 text-sm font-medium text-stone-800 transition hover:border-black"
            >
              Explore Styles
            </Link>
          </div>

          {/* Small trust message */}
          <div className="mt-10 flex items-center gap-3">
            <div className="h-px w-10 bg-[#8B7055]" />
            <p className="text-xs tracking-wide text-stone-500">
              TIMELESS DESIGN. EVERYDAY COMFORT.
            </p>
          </div>
        </div>

        {/* Right: Fashion Image */}
        <div className="group relative order-1 h-[350px] overflow-hidden bg-[#E8DDCE] sm:h-[450px] lg:order-2 lg:h-[540px]">
          {/* <img
            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=85"
            alt="Men's premium fashion collection"
            className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
          /> */}
          <img src={Img1} className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105" />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Image label */}
          <div className="absolute bottom-5 left-5 border border-white/50 bg-white/15 px-4 py-3 text-white backdrop-blur-sm sm:bottom-8 sm:left-8">
            <p className="text-[10px] uppercase tracking-[0.25em]">
              The Signature Collection
            </p>
            <p className="mt-1 font-serif text-xl">
              Made for your style
            </p>
          </div>

          {/* Decorative badge */}
          <div className="absolute right-4 top-4 flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-[#F7F3EC]/90 text-center sm:right-6 sm:top-6">
            <span className="font-serif text-xs leading-5 text-stone-800">
              Style
              <br />
              Redefined
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

