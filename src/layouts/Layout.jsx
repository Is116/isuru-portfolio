import { Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer.component";
import Header from "../components/header/Header.component";
import About from "./about/About.layout";
import Contact from "./contact/Contact.layout";
import Gallery from "./gallery/Gallery.layout";
import Home from "./home/Home.layout";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<><Header/><Footer/></>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="gallery" element={<Gallery/>} />
        </Route>
    </Routes>
  )
}

export default Layout