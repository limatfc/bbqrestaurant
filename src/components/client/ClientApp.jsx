import { Routes, Route } from "react-router-dom";
import Home from "../../screens/clients/Home";
import Category from "./Category";
import Contact from "./Contact";
import Footer from "./Footer";
import Menu from "./Menu";
import NavigationBar from "./NavigationBar";

export default function ClientApp() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
