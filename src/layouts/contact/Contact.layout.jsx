import './Contact.styles.css'
import React, {useRef} from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_76klrfs', 'template_8df9w4h', form.current, 'yMt0kfWlxIRn555es')
      .then((result) => {
          console.log('Message Sent Successfully');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="row p-lg-5 p-sm-0 mt-5">
        <div className='mb-2 text-center'>
                     <h2>CONTACT</h2>
                     <hr/>
                 </div>
         <div className="col-lg-6 col-sm-6 my-auto">
                <i className="fa-solid fa-paper-plane contact-plane align-middle"></i>
         </div>
         <div className="col-lg-6 col-sm-12 text-start">
         <form className='mb-5 p-4 mt-3' ref={form} onSubmit={sendEmail}>
                 <div className="mb-3">
                     <label htmlFor="name" className="form-label">Your Name</label>
                     <input className="form-control" type="text" name='user_name' required/>
                 </div>
                 <div className="mb-3">
                     <label htmlFor="email" className="form-label">Your Email</label>
                     <input className="form-control" type="email" name='user_email' required/>
                 </div>
                 <div className="mb-3">
                     <label htmlFor="subject" className="form-label">Your Message</label>
                     <textarea name="message" rows="5"className="form-control" required>

                     </textarea>
                 </div>
                 <button type="submit" value="Send" className="btn btn-outline-light mt-4 w-100"><i className="fa-solid fa-paper-plane me-4"></i>Send</button>
             </form>
         </div>
     </div>
    
  );
}