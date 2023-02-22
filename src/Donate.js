import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

class Donate extends Component {
  render() {
    return (
      <div>
        <p>
        Hello friends, I hope you are having a good time browsing the Fearless Vegetarian website. We are constantly working on the website,
        making it easy to use for our customers. If you wish to help Fearless Vegetarian, you can do so by donating any amount using the 
        "Donate" Button. It is your love and support that helps the Fearless Vegetarian team make imporvements to the website as well as help us take on new projects.
        If you have question please do not hesitate to connect with us on our <a href="https://www.facebook.com/profile.php?id=100090174171697" className="med_link" target="_blank" rel="noopener noreferrer">Facebook Page.</a><br/>
        <Button variant="dark" href="https://paypal.me/riteshkarwa">PayPal Me</Button>
        </p>
      </div>
    );
  }
}
   
export default Donate;
