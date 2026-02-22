import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import LoginPage from "./pages/login/LoginPage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
