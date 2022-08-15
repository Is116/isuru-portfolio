import './MainHome.styles.css'

const MainHome = () => {
  return (
    <div className='row m-lg-5 m-sm-1'>
        <div className='col-lg-6 col-sm-12 mt-5 mb-lg-5 mb-sm-3 mr-3'>
            <img className='monkey-img img-fluid p-2 w-50 mt-4' src="https://i.ibb.co/CWkq2K4/techmonkey-no-background.png" alt="isuru pathirathna"/>
        </div>
        <div className='col-lg-6 col-sm-12 mt-lg-5 mt-sm-0 mb-5'>
            <div className='row justify-content-center ml-sm-0  mt-4 mb-3 p-4'>
                <h1 className='name mt-lg-4'>Isuru <span className='last-name'>Pathirathna.</span></h1>
                <h3 className='main-text mb-4 mt-5'>
                  Software Developer
                </h3>
                <div className="row justify-content-center mb-3 mt-3">
                        <i className="fa-solid fa-code col-lg-4 icon-brand mb-sm-3 p-5"></i><i className="fa-solid fa-guitar col-lg-4 icon-brand p-5"></i><i className="fa-solid fa-person-swimming col-lg-4 icon-brand p-5"></i>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default MainHome