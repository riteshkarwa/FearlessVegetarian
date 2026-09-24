import React, { Component } from "react";

class NewsletterSignup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            submitting: false,
            success: false,
            error: ""
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email } = this.state;

        if (!email) {
            this.setState({
                error: "Please enter your email address."
            });
            return;
        }

        this.setState({
            submitting: true,
            success: false,
            error: ""
        });

        try {
            const formData = new FormData();

            formData.append("EMAIL", email);
            formData.append("email_address_check", "");
            formData.append("locale", "en");

            const response = await fetch(
                "https://2444e2b1.sibforms.com/serve/MUIFAMlDQNErW2BPqxowY3Aub0Y38aSzvb_CWW6GMro3ZMFrDunHW0DwI1W4WZ3jN41lpcQgwhUVPvEGBMgZc3k0y1AAMsYSwlDLT6FI0_QgEAO4-eGPFqLOyEFly48ODMBMi0LXso8MELKRTlAFVRe95Pn2MNzm1Yi4rcS8T3F95DedJbkXTZqB5bOUI5zeV_8Ufl3j_J0i58K0vA==",
                {
                    method: "POST",
                    body: formData
                }
            );

            if (response.ok) {
                this.setState({
                    email: "",
                    submitting: false,
                    success: true,
                    error: ""
                });
            } else {
                throw new Error("Subscription failed");
            }
        } catch (error) {
            this.setState({
                submitting: false,
                success: false,
                error:
                    "Your subscription could not be saved. Please try again."
            });
        }
    };

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
            error: "",
            success: false
        });
    };

    render() {
        const {
            email,
            submitting,
            success,
            error
        } = this.state;

        return (
            <section className="newsletter-section">

                <div className="newsletter-card">

                    <div className="newsletter-icon">
                        🌿
                    </div>

                    <h2>
                        Get New Vegetarian Recipes
                    </h2>

                    <p className="newsletter-description">
                        Sign up for new vegetarian recipes, cooking tips,
                        and Fearless Vegetarian updates delivered to your inbox.
                    </p>

                    {success && (
                        <div className="newsletter-success">
                            Your subscription has been successful! 🌿
                        </div>
                    )}

                    {error && (
                        <div className="newsletter-error">
                            {error}
                        </div>
                    )}

                    <form
                        className="newsletter-form"
                        onSubmit={this.handleSubmit}
                    >

                        <label htmlFor="newsletter-email">
                            Email Address
                        </label>

                        <div className="newsletter-input-row">

                            <input
                                type="email"
                                id="newsletter-email"
                                name="EMAIL"
                                value={email}
                                onChange={this.handleEmailChange}
                                placeholder="Enter your email address"
                                autoComplete="email"
                                required
                            />

                            <button
                                type="submit"
                                className="newsletter-button"
                                disabled={submitting}
                            >
                                {submitting
                                    ? "Subscribing..."
                                    : "Subscribe"}
                            </button>

                        </div>

                        <p className="newsletter-note">
                            Join us for delicious vegetarian recipes
                            and cooking inspiration.
                        </p>

                    </form>

                </div>

            </section>
        );
    }
}

export default NewsletterSignup;