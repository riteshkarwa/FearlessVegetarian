import React from 'react'
import { Helmet } from 'react-helmet';

export default function ContactForm() {
    return (
        <div className="container">
            <Helmet>
                <title>Contact Us | Fearless Vegetarian</title>

                <meta
                    name="description"
                    content="Contact Fearless Vegetarian to share your feedback, ask questions, or get in touch with us about vegetarian recipes and cooking."
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <link
                    rel="canonical"
                    href="https://fearlessvegetarian.netlify.app/contact/"
                />
            </Helmet>
            <h1> I'd love to hear from you </h1>
            <hr />
            <form name="contactusform" id="contactusform" data-netlify="true" method="post" onSubmit="submit" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contactusform" />
                <div hidden>
                    <input name="bot-field" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            <label htmlFor="name">Name:</label><br />
                            <input name="name" type="text" id="name" placeholder="Enter your name" className="form-control" required />
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            <label htmlFor="email">Email:</label><br />
                            <input name="email" type="email" id="email" placeholder="Enter E-mail address" className="form-control" required />
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            <label htmlFor="subject">Subject:</label><br />
                            <input name="subject" type="text" id="subject" placeholder="Feedback Subject" className="form-control" required />
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            <label htmlFor="message">Message:</label><br />
                            <textarea name="message" rows="5" id="message" placeholder="Enter your concerns and how we can help you out" className="form-control" required></textarea>
                        </p>
                    </div>
                </div>
                <p>
                    <button className="btn btn-dark" type="submit"> Submit</button>
                </p>
            </form>
        </div>
    );
}


