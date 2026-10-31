


// import CategoryCard from "./CategoryCard/CategoryCard.jsx";
// import categories from "../data/categories";
import categories from "../../data/categories.js";
import CategoryCard from "../CategoryCard/CategoryCard.jsx";

const Categories = () => {
  return (
    <section className="bg-[#F7F3EC] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8B7055]">
              Our Categories
            </p>

            <h2 className="font-serif text-3xl text-stone-900 sm:text-4xl lg:text-5xl">
              Shop by Category
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-stone-600">
            Discover timeless essentials and elevate your wardrobe
            with our carefully selected menswear collections.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
