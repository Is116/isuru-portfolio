import './Contact.styles.css'

const Contact = () => {
  return (
    <div className="row p-lg-5 p-sm-0">
        <div className="col-lg-6 col-sm-12 my-auto">
        <i class="fa-solid fa-paper-plane contact-plane"></i>
        </div>
        <div className="col-lg-6 col-sm-12 text-start">
        <form className='mb-5 p-5'>
                <div className='mb-5'>
                    <h2>Contact Me</h2>
                    <hr/>
                </div>
                <div className="mb-3">
                    <label for="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Your Email</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                    <label for="subject" className="form-label">Your Subject</label>
                    <input type="text" className="form-control" id="subject"/>
                </div>
                <div className="mb-3">
                    <label for="subject" className="form-label">Your Message</label>
                    <textarea rows="5"className="form-control">

                    </textarea>
                </div>
                <button type="submit" className="btn btn-outline-light mt-4 w-100"><i class="fa-solid fa-paper-plane me-4"></i>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact