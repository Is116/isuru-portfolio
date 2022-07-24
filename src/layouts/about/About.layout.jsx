import './About.styles.css'
const About = () => {
  return (
    <div className='row m-lg-5 m-sm-1'>
        <div className='col-lg-6 col-sm-12 mt-5 mb-lg-5 mb-sm-3 mr-3'>
            <img className='img-fluid p-4 rounded w-75' src="https://i.ibb.co/BBdLXxq/177877859-1197085884082551-5807271651355511687-n-3.jpg" alt="isuru pathirathna"/>
        </div>
        <div className='col-lg-6 col-sm-10 mt-lg-5 mt-sm-0 mb-5'>
            <div className='row justify-content-center ml-sm-0 ml-lg-3 mr-sm-0 mr-lg-3 mt-3 mb-2 p-4'>
                <h2>ABOUT</h2>
                <hr/>
                <h4 className='mb-5 mt-4'>Software Developer, Guitarist, Swimmer</h4>
                <p className='p-1'>Software Developer with good communication skills with the
                    ability to work hard and always interested in getting hands-on
                    experience on new technologies and application design
                    paradigms. Has good knowledge of Laravel programming with
                    experience in developing web applications. Gained hands-on
                    experience in Laravel, MySQL, HTML5, AJAX, jQuery, React and
                    Bootstrap.</p>
                    <div className="row justify-content-center mb-3">
                        <i class="fa-brands fa-laravel col-lg-3 col-sm-12 icon-brand mb-sm-3 p-5"></i><i class="fa-solid fa-database col-lg-3 col-sm-12 icon-brand p-5"></i><i class="fa-brands fa-react col-lg-3 col-sm-12 icon-brand p-5"></i><i class="fa-brands fa-bootstrap col-lg-3 col-sm-12 icon-brand p-5"></i>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About