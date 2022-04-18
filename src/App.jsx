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
import EditCategory from "./screens/admin/EditCategory";
import AddCategory from "./screens/admin/AddCategory";
import EditProduct from "./screens/admin/EditProduct";
import AddProduct from "./screens/admin/AddProduct";

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
