import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet";

class Donate extends Component {
  render() {
    return (
      <div className="donate-page container py-4">
        <Helmet>
          <title>Support Fearless Vegetarian | Donate</title>
          <meta
            name="description"
            content="Support Fearless Vegetarian and help us continue creating vegetarian recipes, cooking videos, and healthy lifestyle content for our community."
          />
          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/donate"
          />
        </Helmet>

        <h1>Support Fearless Vegetarian ❤️</h1>

        <p className="lead">
          Thank you for visiting Fearless Vegetarian! We are passionate about
          sharing delicious vegetarian recipes, cooking tutorials, and healthy
          lifestyle inspiration with food lovers around the world.
        </p>

        <p>
          Creating new recipes, producing videos, maintaining the website, and
          continuously improving the user experience requires time and
          resources. If you enjoy our content and would like to support our
          mission, please consider making a donation.
        </p>

        <h2>How Your Support Helps</h2>

        <ul>
          <li>Create new vegetarian and vegan recipes.</li>
          <li>Produce high-quality cooking videos and tutorials.</li>
          <li>Improve website performance and accessibility.</li>
          <li>Keep Fearless Vegetarian free and available to everyone.</li>
        </ul>

        <p>
          Every contribution, no matter the amount, helps us continue sharing
          healthy, flavorful, and easy-to-follow recipes with our growing
          community.
        </p>

        <div className="text-center my-4">
          <Button
            variant="success"
            size="lg"
            href="https://paypal.me/riteshkarwa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate via PayPal
          </Button>
        </div>

        <h2>Connect With Us</h2>

        <p>
          Have questions, suggestions, or recipe requests? We'd love to hear
          from you. Connect with us on our Facebook page:
        </p>

        <p>
          <a
            href="https://www.facebook.com/fearlessvegetarian"
            className="med_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fearless Vegetarian Facebook Page
          </a>
        </p>

        <hr />

        <p className="text-center">
          <strong>
            Thank you for your support and for being part of the Fearless
            Vegetarian community!
          </strong>
        </p>
      </div>
    );
  }
}

export default Donate;