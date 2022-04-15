import { Routes, Route } from "react-router-dom";
import useReadData from "./hooks/useReadData";
import useDataProvider from "./store/useDataProvider";
import Home from "./screens/clients/Home";
import Category from "./screens/clients/Category";
import Contact from "./screens/clients/Contact";
import Footer from "./components/client/Footer";
import Menu from "./screens/clients/Menu";
import NavigationBar from "./components/client/NavigationBar";
import Error from "./screens/clients/Error";
import Product from "./screens/clients/Product";
import Login from "./screens/admin/Login";
import AdminHome from "./screens/admin/AdminHome";
import "./styles/Styles.css";
import CategoryInfo from "./screens/admin/CategoryInfo";

export default function App() {
  const dataContext = useDataProvider();
  const { categoriesHandler, isLoggedIn } = dataContext;
  const { status } = useReadData(categoriesHandler, "menu");

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu status={status} />} />
        <Route path="/menu/:category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu/:category/:product" element={<Product />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        {isLoggedIn && <Route path="/admin-home" element={<AdminHome />} />}
        {isLoggedIn && (
          <Route path="/category-edit/:category" element={<CategoryInfo />} />
        )}
      </Routes>
      <Footer />
    </div>
  );
}
