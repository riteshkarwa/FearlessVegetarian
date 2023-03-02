import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

class Donate extends Component {
  render() {
    return (
      <div>
        <p>
        Hello friends, I hope you are having a good time browsing the Fearless Vegetarian website. We are constantly working on the website,
        making it easy to use for our customers. If you wish to help Fearless Vegetarian, you can do so by donating any amount using the 
        "PayPal Me" Button. It is your love and support that helps the Fearless Vegetarian team make improvements to the website and keep it running.
        If you have question please do not hesitate to connect with us on our <a href="https://www.facebook.com/fearlessvegetarian" className="med_link" target="_blank" rel="noopener noreferrer">Facebook Page.</a><br/><br/>
        <Button variant="dark" href="https://paypal.me/riteshkarwa">PayPal Me</Button>
        </p>
      </div>
    );
  }
}
   
export default Donate;
