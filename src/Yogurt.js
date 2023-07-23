import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
// import YouTube from 'react-youtube';
// import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Yogurt extends Component {
    render() {
    //   const optsDesktop = {
    //     height: '800',
    //     width: '1000',
    //   };

    //   const optsMobile = {
    //     height: '550',
    //     width: '325',
    //   };
      return (
        <div>
            <h1>Homemade Yougurt made using an Instant Pot Ultra. While an Instant Pot is not a necessity for making yogurt, it excels as a yogurt maker.
                You have to careful about the amount of starter you use as it can give you undesirable results.
            </h1>
            <Row className="cooktimerow">
              <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
            </Row>
            <Row>
              <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 660 minutes</Col>
            </Row>
            <div className="ingredients">Ingredients</div>
            <ol>  
                <li>4 cups whole milk</li> 
                <li>1 tablespoon Yogurt Starter or Yogurt Culture:</li>
            </ol>
            <div className="ingredients">Instruction</div>
            <ol>
                <li>Pour the milk into the Instant Pot’s insert. Lock on the lid. It does not matter if the steam vent is open or closed. 
                    Rotate the Button to the “Yogurt” setting, then set the temperature to high the press the button. The Instant screen should
                    say Boil.Then press the start button. 
                    (The readout will depend on your model. Refer to the yogurt section of your Instant Pot manual if you need clarification.)</li>
                <li>This will heat the milk and bring it to a boil. Keep an eye on the temperature until it reaches around 180°F (82°C).</li>
                <li>Eventually it will bring the milk to 180° F (this kills off undesirable microorganisms). It usually takes about 30 minutes.
                    When it's done, the Instant Pot will beep and its readout will say “Yogurt.”</li>
                <li>I had to use the saute mode to get the temperature to 180°F.</li> 
                <li>Right after the Instant Pot beeps, turn it off and lift out the insert of hot milk. Put the thermometer in the milk and wait until it’s 116° F. 
                    This can take as long as an hour.</li> 
                <li>To speed down the cooling, set the insert of hot milk in a bath of ice water and stir the milk; the temperature will drop in about 5 minutes. 
                    (If it dips below 110°F, pop the insert back in the cooker, press “Yogurt,” then “Adjust” and monitor the thermometer until it’s back in the right zone. Remove the insert from the cooker.)</li> 
                <li>Remove the thermometer. There will be a film of coagulated milk on the surface of the milk; carefully lift this off with a spoon and discard 
                    (this film won’t ruin your yogurt, but it creates a distracting texture once it’s finished).</li> 
                <li>Put the starter in a medium bowl and add about 1/2 cup of the warm milk. Whisk until smooth, then pour into the insert of milk and whisk to combine.</li> 
                <li>Set the insert of milk back in the Instant Pot, lock on the lid (once again, the steam vent may be open or closed), 
                    and press YOGURT. On some models, such as the Ultra, you'll need to press "adjust" and change the setting from "HIGH" to "MEDIUM." 
                    After that, readout should say "8:00", add time using the rotate button button. I usually set the time to "9:00"</li>
                <li>The Instant Pot will incubate your yogurt for 8 hours before switching itself off (the display will read “Yogurt” once the 9-hour default programming is complete)</li> 
                <li>Once your yogurt is set, gently lift the insert from the cooker. Pouring it out or stirring at this point can make your yogurt runny, which you don’t want. 
                    You can set the insert on a rack to help it cool faster, but don’t pop it right in the fridge, since rapid temperature changes can also thin your yogurt. 
                    Once it’s at room temp (about 2 hours), set it in the refrigerator.</li> 
                <li>Refrigerate the yogurt for a few hours to cool and further firm up.</li>
                <li>Your homemade yogurt is now ready to enjoy! You</li>
            </ol>
            <h2>Final Product</h2>
            <Image src="yogurt.png" thumbnail rounded fluid></Image>
            {/* <div>
              <h2>Upma Preparation Video</h2>
              <MediaQuery maxWidth={767}>
                  <YouTube videoId="xH-55B5S2q4" opts={optsMobile} />
              </MediaQuery>
              <MediaQuery minWidth={767}>
                  <YouTube videoId="xH-55B5S2q4" opts={optsDesktop} />
              </MediaQuery>
            </div> */}
        </div>
      );
    }
}

export default Yogurt