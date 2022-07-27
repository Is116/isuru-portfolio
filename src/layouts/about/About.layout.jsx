import './About.styles.css'
const About = () => {
  return (
    <div className='row m-lg-5 m-sm-1 about-sizing'>
        <h2>ABOUT</h2>
            <hr/>
        <div className='col-lg-6 col-sm-12 col-md-12 mt-2 mb-lg-5 mb-sm-3 '>
            <img className='about-img img-fluid p-4 rounded w-75' src="https://i.ibb.co/BBdLXxq/177877859-1197085884082551-5807271651355511687-n-3.jpg" alt="isuru pathirathna"/>
        </div>
        <div className='col-lg-6 col-sm-12 col-md-12 mt-lg-5 mt-sm-0 mb-5 '>
            <div className='scroll row justify-content-center ml-sm-0 ml-lg-3 mr-sm-0 mr-lg-3 mt-3 p-5 mt-3'>
                <h4 className='mb-5 mt-3'>Software Developer, Guitarist, Swimmer</h4>
                <p className='p-1'>Isuru Abhiman Abeywardhana Pathirathnaborn 29 June, 
                    is a pioneer personality in Western Province, Sri Lanka. He is a recognized
                    Software Developer, Swimmer, Guitarist in Sri Lanka. He started his path as an Software Developer in 2021,
                    following a Software Engineering degree program by Plymouth University, United Kingdom.</p>

                <h2 className='mt-4'>Personal Life</h2>
                <hr/>
                <p className='p-1'>Isuru Pathirathna was born on 29 June 2002 in Colombo, Sri Lanka as the first child
                    in the family. He and his family lived in Homagama, Sri Lanka since his birth. He is a guitarist
                    and a swimmer His father is Chulan Abeywardhana Pathirathna  and mother is Inoka Priyanthi Kumari.
                    Isuru completed his primary education from Army School Panagoda and studied O/L and passed with 
                    stunning grades at Mahinda Rajapaksha College, Homagama. After that, he started following a degree
                    program at NSBM Green University. He will be graduated in 2023 with a B.Sc. in Software Engineering 
                    offered by Plymouth University, United Kingdom.</p>

                <h2 className='mt-4'>Professional Life</h2>
                <hr/>
                <p className='p-1'>Software Developer with good communication skills with the
                    ability to work hard and always interested in getting hands-on
                    experience on new technologies and application design
                    paradigms. Has good knowledge of Laravel programming with
                    experience in developing web applications. hands-on
                    experience in Laravel, MySQL, HTML5, AJAX, jQuery, React and
                    Bootstrap</p>

                    <div className="row justify-content-center mb-3">
                        <i className="fa-brands fa-laravel col-lg-3 col-sm-12 col-md-6 icon-brand mb-sm-3 p-5"></i><i className="fa-solid fa-database col-lg-3 col-sm-12 col-md-6 icon-brand p-5"></i><i className="fa-brands fa-react col-lg-3 col-sm-12 col-md-6 icon-brand p-5"></i><i className="fa-brands fa-bootstrap col-lg-3 col-sm-12 col-md-6 icon-brand p-5"></i>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About