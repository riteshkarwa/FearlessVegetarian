import React from 'react'


const ContactForm = () => {
  const [formStatus] = React.useState('Send')
  const onSubmit = (e) => {
    const { name, email, subject, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    }
    console.log(conFom)
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(conFom)
    })
    .then(() => {
        document.getElementById("contactusform").reset();
    })
    .catch(error => {
        console.log(error);
    })
    e.preventDefault();
  }
  return (
    <div className="container">
	    <h1> I'd love to hear from you </h1>
        <hr/>
        <form action="/thank-you" name="contactusform" id="contactusform" method="POST" data-netlify="true" onSubmit={onSubmit}>
            <input type="hidden" name="form-name" value="contactusform" />
            <div className="row">
                <div className="col-md-6">
                    <p>
                        <label htmlFor="name">Name:</label><br/>
                        <input  name="name" type="text"  id="name"  placeholder="Enter your name"  />
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p>
                        <label htmlFor="email">Email:</label><br/>
                        <input  name="email" type="email" id="email"  placeholder="Enter E-mail address"/>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p>
                        <label htmlFor="subject">Subject:</label><br/>
                        <input  name="subject" type="text" id="subject"  placeholder="Feedback Subject"/>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p>
                        <label htmlFor="message">Message:</label><br/>
                        <textarea  name="message"  rows="5" id="message"  placeholder="Enter your concerns and how we can help you out"></textarea>
                    </p>
                </div>
            </div>  
            <p>
                <button className="btn btn-dark" type="submit">
                {formStatus}
                </button>
            </p>
        </form>
    </div>
  );
}
export default ContactForm