import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AboutUs from "../../features/about/AboutUs";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactUs from "../../features/contact/ContactUs";
import Home from "../../features/home/Home";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css';
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";

function App() {

  return (
    <>
      <ToastContainer theme="colored" position="bottom-right" autoClose={3000} hideProgressBar />
      <Header />
      <Box sx={{ mt: 7, mb: 2, px: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:id" element={<ProductDetails />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="server-error" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
