import React, { Component } from "react";

class Donate extends Component {
  render() {
    return (
      <div>
        <p>
        Hello friends, I hope you are having a good time browsing the Fearless Vegetarian. We are constantly working on the website,
        making it easy to use for our customers. If you wish to help Fearless Vegetarian, you can do so by donating any amount using the 
        "Donate" Button. It is your love and support that helps the SFearless Vegetarian team make imporvements to the website as well as help us take on new projects.
        If you have question please do not hesitate to connect with us on our <a href="https://www.facebook.com/profile.php?id=100090174171697" className="med_link" target="_blank" rel="noopener noreferrer">Facebook Page.</a>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="hosted_button_id" value="J4HQJ9QC536B8" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>

        </p>
      </div>
    );
  }
}
   
export default Donate;
