

import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import {  Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import ProductDetails from './Pages/ProductDetails/ProductDetails.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Boski from './Pages/Boski/boski.jsx';
import Kurtas from './Pages/Kurtas/kurtas.jsx';
import Shawls from './Pages/Shawls/shawls.jsx';
import Shop from './Pages/Shop/shop.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';
import MyAccount from "./Pages/MyAccount/MyAccount";


// const Homee = () => (
//   <section className="px-6 py-24 text-center">
//     <p className="mb-3 text-sm tracking-[0.3em] text-stone-500">
//       THE NEW COLLECTION
//     </p>

//     <h1 className="font-serif text-4xl font-bold text-stone-900 sm:text-6xl">
//       Tradition Meets Modern Style
//     </h1>

//     <p className="mx-auto mt-5 max-w-xl text-stone-600">
//       Discover timeless menswear designed for your everyday style.
//     </p>

//     <a
//       href="/products"
//       className="mt-8 inline-block bg-stone-900 px-7 py-3 text-sm text-white transition hover:bg-stone-700"
//     >
//       Shop Collection
//     </a>
//   </section>
// );


const Products = () => <h1 className="p-10 text-2xl">Our Products</h1>;
// const Cart = () => <h1 className="p-10 text-2xl">Your Shopping Cart</h1>;
// const Account = () => <h1 className="p-10 text-2xl">My Account</h1>;



function App() {

  return (
    <>
      <Navbar/>

      <main className="min-h-screen bg-[#F7F3EC]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/boski" element={<Boski />} />
          <Route path="/kurtas" element={<Kurtas />} />
          <Route path="/shawls" element={<Shawls />} />
          <Route path="/products" element={<Products />} />
           <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<MyAccount />} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
