import ContactBar from '../contact-bar/ContactBar.component'
import './Footer.styles.css'

const Footer = () => {
  return (
        <footer className="bg-dark text-center text-light">
        <div className="container pt-5">
            <section className="mb-4">
                <ContactBar/>
            </section>

            <section className='mb-4'>
            <p className='logo-text'><img src="https://i.ibb.co/CWkq2K4/techmonkey-no-background.png" alt="tech monkey"className="tech-monkey-logo"></img> Tech Monkey</p>
            </section>
        </div>
            <div className="text-center p-2" >
                © 2022 Copyright | Isuru Pathirathna | All Rights Reserved
            </div>
        </footer>
  )
}

export default Footer