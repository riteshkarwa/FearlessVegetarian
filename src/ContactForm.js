import React from 'react'

export default function ContactForm() {
  return (
    <div className="container">
	    <h1> I'd love to hear from you </h1>
        <hr/>
        <form  name="contactusform" id="contactusform" data-netlify="true"  method="post" onSubmit="submit" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contactusform" />
            <div hidden>
                <input name="bot-field" />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p>
                        <label htmlFor="name">Name:</label><br/>
                        <input  name="name" type="text"  id="name"  placeholder="Enter your name"  className="form-control"/>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p>
                        <label htmlFor="email">Email:</label><br/>
                        <input  name="email" type="email" id="email"  placeholder="Enter E-mail address" className="form-control"/>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p>
                        <label htmlFor="subject">Subject:</label><br/>
                        <input  name="subject" type="text" id="subject"  placeholder="Feedback Subject" className="form-control"/>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p>
                        <label htmlFor="message">Message:</label><br/>
                        <textarea  name="message"  rows="5" id="message"  placeholder="Enter your concerns and how we can help you out" className="form-control"></textarea>
                    </p>
                </div>
            </div>  
            <p>
                <button className="btn btn-dark" type="submit">
                </button>
            </p>
        </form>
    </div>
  );
}


