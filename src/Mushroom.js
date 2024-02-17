import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import { Helmet } from "react-helmet";

class Mushroom extends Component {
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Savory Delight: Mushroom Masala Curry Bursting with Flavor in Every Bite!</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/mushroom" />
                    <meta
                        name="description"
                        content="Savor Punjab's rich flavors with our one-pot mushroom curry. Simmered in tomato gravy & yogurt, it's bursting with aromatic spices. Comfort food perfected!"
                    />
                    <meta
                        name="keywords"
                        content="Punjab, flavors, one-pot, mushroom curry, tomato gravy, yogurt, aromatic spices, comfort food,white button mushrooms, creamy yogurt, traditional, comforting, easy to make, satisfying"
                    />
                </Helmet>
                <h1>This Mushroom Masala recipe is an easy, delicious Punjabi style one-pot mushroom Curry made with white button mushrooms in a spiced 
                    onion-tomato gravy. The addition of creamy yogurt adds a delightful richness to this traditional Punjabi favorite. 
                    Perfect for a comforting meal that's both easy to make and incredibly satisfying.</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row>
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>500g white button mushrooms, cleaned and sliced</li>
                    <li>2 onions, finely chopped</li>
                    <li>2 tomatoes, finely chopped</li>
                    <li>2 cloves garlic, minced</li>
                    <li>1-inch ginger, grated</li>
                    <li>2 green chilies, finely chopped</li>
                    <li>1 teaspoon cumin seeds</li>
                    <li>1 teaspoon coriander powder</li>
                    <li>1/2 teaspoon turmeric powder</li>
                    <li>1/2 teaspoon red chili powder (adjust to taste)</li>
                    <li>1 teaspoon garam masala</li>
                    <li>4 tablespoons plain yogurt</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander leaves for garnish (optional)</li>

                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Heat oil in a deep pan or skillet over medium heat. Add cumin seeds and let them splutter.</li>
                    <li>Add chopped onions and sauté until they turn golden brown.</li>
                    <li>Add minced garlic, grated ginger, and chopped green chilies. Sauté for another 2 minutes.</li>
                    <li>Stir in chopped tomatoes and cook until they soften and oil starts to separate.</li>
                    <li>Add coriander powder, turmeric powder, red chili powder, and salt. Mix well and cook for 2 minutes.</li>
                    <li>Add sliced mushrooms to the pan and mix until they are coated with the spice mixture.</li>
                    <li>Cover the pan and let the mushrooms cook for 5-7 minutes, stirring occasionally.</li>
                    <li>Once the mushrooms are cooked and tender, add plain yogurt to the pan and mix well.</li>
                    <li>Sprinkle garam masala over the curry and mix again.</li>
                    <li>Garnish with fresh coriander leaves and serve hot with rice or naan bread.</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="rajmah.jpg" thumbnail rounded fluid></Image>
                <div>
                    <h2>Rajmah Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="UcMZg6QjnuQ" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="UcMZg6QjnuQ" opts={optsDesktop} />
                    </MediaQuery>
                </div>

            </div>
        );
    }
}

export default Mushroom;