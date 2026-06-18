import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import RecipeSchema from "./RecipeSchema";
import { Link } from "react-router-dom";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";


class Yogurt extends Component {
    render() {
        const optsDesktop = {
            height: '800',
            width: '1000',
        };

        const optsMobile = {
            height: '550',
            width: '325',
        };
        return (
            <div>
                <RecipeSchema
                    name="Homemade Instant Pot Yogurt"
                    description="Creamy homemade yogurt made in an Instant Pot using whole milk and a yogurt starter culture. A healthy probiotic-rich recipe perfect for breakfast, smoothies, and snacks."
                    image="https://fearlessvegetarian.netlify.app/yogurt.jpg"
                    url="https://fearlessvegetarian.netlify.app/yogurt"
                    prepTime="PT15M"
                    cookTime="PT11H"
                    totalTime="PT11H15M"
                    recipeYield="4 Servings"
                    ingredients={[
                        "4 cups whole milk",
                        "1 tablespoon yogurt starter culture"
                    ]}
                />
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Homemade Instant Pot Yogurt Recipe | Easy Creamy Yogurt | Fearless Vegetarian</title>

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/yogurt"
                    />

                    <meta
                        name="description"
                        content="Learn how to make thick, creamy homemade yogurt in an Instant Pot with just milk and yogurt starter. An easy probiotic-rich recipe perfect for breakfast, snacks, and healthy meals."
                    />

                    <meta
                        name="keywords"
                        content="instant pot yogurt, homemade yogurt, yogurt recipe, yogurt starter culture, probiotic yogurt, homemade curd, Indian yogurt, healthy breakfast, easy yogurt recipe, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Homemade Instant Pot Yogurt Recipe"
                    />

                    <meta
                        property="og:type"
                        content="website"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/yogurt"
                    />

                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/yogurt.jpg"
                    />

                    <meta
                        property="og:description"
                        content="Make creamy homemade yogurt in your Instant Pot with only milk and a starter culture. Easy, healthy, and probiotic-rich."
                    />
                </Helmet>
                <h1>Homemade Instant Pot Yogurt (Easy & Creamy)</h1>

                <p>
                    Learn how to make thick, creamy homemade yogurt using an Instant Pot.
                    With only two ingredients—milk and a yogurt starter culture—you can
                    create delicious probiotic-rich yogurt that is healthier and more
                    economical than store-bought versions.
                </p>
                <p>
                    Homemade yogurt is rich in probiotics, protein, and calcium.
                    It can be enjoyed on its own or used in recipes such as Curd Rice,
                    Chukauni, smoothies, raita, and Indian curries.
                </p>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 4 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 11 Hours</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>4 cups whole milk</li>
                    <li>1 tablespoon Yogurt Starter or Yogurt Culture:</li>
                </ol>
                <div className="ingredients">Instructions</div>
                <ol>
                    <li>Pour the milk into the Instant Pot’s insert. Lock on the lid. It does not matter if the steam vent is open or closed.
                        Rotate the Button to the “Yogurt” setting, then set the temperature to high the press the button. The Instant screen should
                        say Boil.Then press the start button.
                        (The readout will depend on your model. Refer to the yogurt section of your Instant Pot manual if you need clarification.)</li>
                    <li>This will heat the milk and bring it to a boil. Keep an eye on the temperature until it reaches around 180°F (82°C).</li>
                    <li>Eventually it will bring the milk to 180° F (this kills off undesirable microorganisms). It usually takes about 30 minutes.
                        When it's done, the Instant Pot will beep and its readout will say “Yogt.”</li>
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
                    <li>Your homemade yogurt is now ready to enjoy. Serve plain,
                        sweeten with honey, or use it in smoothies, curries, and desserts.
                    </li>
                </ol>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image
                        src="/yogurt.jpg"
                        alt="Creamy homemade Instant Pot yogurt served in a bowl"
                        thumbnail
                        rounded
                        fluid
                    />
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image
                        src="/yogurt.jpg"
                        alt="Creamy homemade Instant Pot yogurt served in a bowl"
                        thumbnail
                        rounded
                        fluid
                        width="50%"
                        height="50%"
                    />
                </MediaQuery>
                <div>
                    <h2>Yogurt Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="oNdlGyFYxT0" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="oNdlGyFYxT0" opts={optsDesktop} />
                    </MediaQuery>
                </div>
                <div className="related-recipes" style={{ marginTop: "40px" }}>
                    <h2>Related Healthy Vegetarian Recipes</h2>

                    <p>
                        If you enjoyed this Homemade Instant Pot Yogurt recipe,
                        you may also enjoy these healthy vegetarian dishes:
                    </p>

                    <ul className="custom-list">
                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/curdrice" className="recipe-link">
                                South Indian Curd Rice
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/potatosalad" className="recipe-link">
                                Chukauni – Nepali Yogurt Potato Salad
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/ashwagandhaapplejuice" className="recipe-link">
                                Ashwagandha Apple Chaat Masala Juice
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/poha" className="recipe-link">
                                Poha – Indian Flattened Rice Breakfast
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/quinoamoongdal" className="recipe-link">
                                Quinoa Moong Dal Khichdi
                            </Link>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faUtensils} className="bullet-icon" />
                            <Link to="/broccoli" className="recipe-link">
                                Creamy Broccoli Soup
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Yogurt