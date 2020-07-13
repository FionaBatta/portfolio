import React from 'react';
import emailjs from 'emailjs-com';

import './Form.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'test_mailing', e.target, 'user_YxQVcqydwkZdkP9CBXkkW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
            <input type="hidden" name="contact_number" />
            <label className="label">Name</label>
            <input type="text" className="form-control" name="user_name" />
        </div>
        <div className="form-group">
            <label className="label">Email</label>
            <input type="email" className="form-control" name="user_email" />
        </div>
        <div className="form-group">
            <label className="label">Message</label>
            <textarea name="message" className="form-control" />
        </div>
      <input className="btn-submit" type="submit" value="Send" />
    </form>
  );
}
