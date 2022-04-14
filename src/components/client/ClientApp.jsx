import { Routes, Route } from "react-router-dom";
import useReadData from "../../hooks/useReadData";
import useDataProvider from "../../store/useDataProvider";
import Home from "../../screens/clients/Home";
import Category from "../../screens/clients/Category";
import Contact from "../../screens/clients/Contact";
import Footer from "./Footer";
import Menu from "../../screens/clients/Menu";
import NavigationBar from "./NavigationBar";
import Error from "../../screens/clients/Error";
import Product from "../../screens/clients/Product";

export default function ClientApp() {
  const dataContext = useDataProvider();
  const { categoriesHandler } = dataContext;
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
      </Routes>
      <Footer />
    </div>
  );
}
