import { Outlet } from "react-router-dom"
import MainHome from "../../components/main-home/MainHome.component"
import About from "../about/About.layout"
import Contact from "../contact/Contact.layout"

const Home = () => {
  return (
    <>
      <Outlet/>
      <MainHome/>
      <About/>
      <Contact/>
    </>
  )
}

export default Home