import Categories from "../../Components/Categories/Categories.jsx";
import Hero from "../../Components/Hero/Hero.jsx";
import ProductsSection from "../../Components/ProductsSection/ProductsSection.jsx";



const Home = () => {
  return (
    <main>
      <Hero />
      <Categories/>
      <ProductsSection/>
    </main>
  );
};

export default Home;

