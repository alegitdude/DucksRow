import { Navbar, Sidebar, Footer } from "./components/index.js";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserContext } from "./context/userContext.jsx";
import {
  HomePage,
  AboutPage,
  Cart,
  Checkout,
  Error,
  // Private,
  Products,
  SingleProduct,
  Login,
  Register,
} from "./pages/index.js";
import AccountPage from "./pages/AccountPage.jsx";

function App() {
  const { user } = useUserContext();
  return (
    <BrowserRouter>
      <ToastContainer limit={4} />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="account" element={user ? <AccountPage /> : <Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="login" element={<Login />} />
        <Route path="Register" element={user ? <HomePage /> : <Register />} />
        <Route path="checkout" element={user ? <Checkout /> : <Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
