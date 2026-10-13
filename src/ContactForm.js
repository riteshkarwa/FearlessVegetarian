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
            <div className="contact-header">
                <h1>I'd Love to Hear from You</h1>
                <div className="contact-title-underline"></div>
                <p>
                    Have a question, feedback, or suggestion? We'd love to hear from you!
                    Get in touch with Fearless Vegetarian.
                </p>
            </div>
            <form
                name="contactusform"
                id="contactusform"
                data-netlify="true"
                method="post"
                data-netlify-honeypot="bot-field"
                className="contact-form"
            >
                <input type="hidden" name="form-name" value="contactusform" />

                <div hidden>
                    <label>
                        Don't fill this out:
                        <input name="bot-field" />
                    </label>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="contact-label">
                            Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="form-control contact-input"
                            autoComplete="name"
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="contact-label">
                            Email Address
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Enter your email address"
                            className="form-control contact-input"
                            autoComplete="email"
                            required
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="subject" className="contact-label">
                        Subject
                    </label>
                    <input
                        name="subject"
                        type="text"
                        id="subject"
                        placeholder="What would you like to discuss?"
                        className="form-control contact-input"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="contact-label">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows="6"
                        id="message"
                        placeholder="Share your questions, feedback, or suggestions..."
                        className="form-control contact-input contact-textarea"
                        required
                    />
                </div>

                <button className="btn contact-submit" type="submit">
                    Send Message
                </button>
            </form>
        </div>
    );
}


