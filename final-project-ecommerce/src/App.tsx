import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import LoginPage from "./pages/login/LoginPage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SignupPage from "./pages/sign-up/SignupPage.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import Cart from "./components/cart/Cart.tsx";
import Wishlist from "./components/wishlist/Wishlist.tsx";
import ContactPage from "./pages/contact/ContactPage.tsx";
import AboutPage from "./pages/about/AboutPage.tsx";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Cart />
      <Wishlist />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
