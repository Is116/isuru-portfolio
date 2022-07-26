import './ContactBar.styles.css'

const ContactBar = () => {
  return (
    <>
        <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/isuru.pathirathna" role="button">
            <i className="fab fa-facebook"></i></a>

        <a className="btn btn-outline-light btn-floating m-1" href="mailto:isuru2002@gmail.com" role="button">
             <i className="fab fa-google"></i></a>

        <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/isuru_abhiman" role="button">
            <i className="fab fa-instagram"></i></a>

        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/isuru-pathirathna-b3b9a4138" role="button">
            <i className="fab fa-linkedin"></i></a>

        <a className="btn btn-outline-light m-1 me-3" href="https://github.com/Is116" role="button">
            <i className="fab fa-github"></i></a>
        <a className=' btn btn-outline-light m-1' href="tel:071 217 5228"><i className="fa-solid fa-phone me-2"></i>(+94) 71 217 5228</a>
    </>
  )
}

export default ContactBar