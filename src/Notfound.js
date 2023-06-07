import React, { Component } from "react";
import Image from "react-bootstrap/Image";

class Notfound extends Component {
    render() {
      return (
        <div>
            <Container>
                <p>
                    <Image src="nature.jpg" thumbnail rounded></Image>
                    "Oops! Looks like you've taken a wrong turn on the digital highway. Don't worry, even the best explorers get lost sometimes. 
                    While we try to figure out what went astray, why not enjoy nature pic. Take a moment to relax and we'll get you back on track soon. 
                    Thanks for your patience, and remember, detours can lead to unexpected discoveries!" 
                </p>
            </Container>
        </div>
      );
    }
}

export default Notfound;