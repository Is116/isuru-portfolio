import { Outlet } from "react-router-dom"
import MainHome from "../../components/main-home/MainHome.component"
import About from "../about/About.layout"
import Contact from "../contact/Contact.layout"
import Gallery from "../gallery/Gallery.layout"

const Home = () => {
  return (
    <>
      <Outlet/>
      <MainHome/>
      <About/>
      <Gallery/>
      <Contact/>
    </>
  )
}

export default Home