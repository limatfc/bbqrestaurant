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
import AddCategory from "./pages/admin/AddCategory";
import EditProduct from "./pages/admin/EditProduct";
import AddProduct from "./pages/admin/AddProduct";
import CategoryDetails from "./pages/admin/CategoyDetails";
import routeData from "./data/routes.json";
import "./styles/Styles.css";

export default function App() {
  const dataContext = useDataProvider();
  const { categoriesHandler, isLoggedIn } = dataContext;
  const { status } = useReadData(categoriesHandler, "menu");

  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path={routeData.home} element={<Home />} />
        <Route path={routeData.menu} element={<Menu status={status} />} />
        <Route path={routeData.category} element={<Category />} />
        <Route path={routeData.contact} element={<Contact />} />
        <Route path={routeData.product} element={<Product />} />
        <Route path={routeData.error} element={<Error />} />
        <Route path={routeData.login} element={<Login />} />
        {isLoggedIn && (
          <>
            <Route path={routeData.adminHome} element={<AdminHome />} />
            <Route path={routeData.addCategory} element={<AddCategory />} />
            <Route path={routeData.catDetails} element={<CategoryDetails />} />
            <Route path={routeData.addProduct} element={<AddProduct />} />
            <Route path={routeData.editProduct} element={<EditProduct />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
}
