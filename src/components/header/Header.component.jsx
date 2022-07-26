import { Outlet } from "react-router-dom"
import ContactBar from "../contact-bar/ContactBar.component"
import './Header.styles.css'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand nav-logo" href="/"><img src="https://i.ibb.co/6ZbsB1s/techmonkey.png" alt="tech monkey" className="tech-monkey-logo me-3"></img><span className="nav-logo-text align-middle">Isuru Pathirathna</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item me-lg-5">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item me-lg-5">
                    <a className="nav-link active" href="/about">About</a>
                </li>
                <li className="nav-item me-lg-5">
                    <a className="nav-link active" href="/contact">Contact</a>
                </li>
                <li className="nav-item me-lg-5">
                    <a className="nav-link active" href="/gallery">Gallery</a>
                </li>
            </ul>
            <section className="">
                    <ContactBar/>
                </section>
            </div>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Header