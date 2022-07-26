import ContactBar from '../contact-bar/ContactBar.component'
import './Footer.styles.css'

const Footer = () => {
  return (
        <footer className="bg-dark text-center text-light mt-5 ">
        <div className="container pt-5">
            <section className=" mx-auto my-auto">
                <ContactBar/>
            </section>
            <div className="mx-auto my-auto mb-4">
                <div className='logo-text d-flex mt-5'><img src="https://i.ibb.co/CWkq2K4/techmonkey-no-background.png" alt="tech monkey" className="mt-3 tech-monkey-logo me-3 "></img> Tech Monkey</div>
            </div>
            <div className="text-center my-auto" >
                <div className="col-md-12 col-lg-12 col-sm-12 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                </h6>
                    <p><i className="fas fa-home me-3"></i> 573, Pitipan North, Homagama</p>
                    <p><i className="fas fa-envelope me-3"></i>isuru2002@gmail.com</p>
                    <p><i className="fas fa-phone me-3"></i> (+94) 71 217 5228</p>
                </div>
            </div>
            
        </div>
            <div className="text-center p-2 pb-5" >
                © 2022 Copyright | Made With ❤️ By Isuru Pathirathna | All Rights Reserved
            </div>
        </footer>
  )
}

export default Footer