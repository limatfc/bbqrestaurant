import { Routes, Route } from "react-router-dom";
import useReadData from "./hooks/useReadData";
import useDataProvider from "./store/useDataProvider";
import Home from "./pages/clients/Home";
import Category from "./pages/clients/Category";
import Contact from "./pages/clients/Contact";
import Footer from "./components/clients/Footer";
import Menu from "./pages/clients/Menu";
import NavigationBar from "./components/clients/NavigationBar";
import Error from "./pages/clients/Error";
import Product from "./pages/clients/Product";
import Login from "./pages/admin/Login";
import AdminHome from "./pages/admin/AdminHome";
import EditCategory from "./pages/admin/EditCategory";
import AddCategory from "./pages/admin/AddCategory";
import EditProduct from "./pages/admin/EditProduct";
import AddProduct from "./pages/admin/AddProduct";
import "./styles/Styles.css";

export default function App() {
  const dataContext = useDataProvider();
  const { categoriesHandler, isLoggedIn } = dataContext;
  const { status } = useReadData(categoriesHandler, "menu");

  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu status={status} />} />
        <Route path="/menu/:category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu/:category/:product" element={<Product />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        {isLoggedIn && (
          <>
            <Route path="/admin-home" element={<AdminHome />} />
            <Route path="/edit-category/:category" element={<EditCategory />} />
            <Route path="/add-new-category" element={<AddCategory />} />
            <Route
              path="/edit-category/:category/edit-product/:product"
              element={<EditProduct />}
            />
            <Route path="/:category/add-new-product" element={<AddProduct />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
}
