import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";

class Cabbage extends Component {
    render() {
        const optsDesktop = {
            height: '600',
            width: '700',
        };

        const optsMobile = {
            height: '550',
            width: '325',
        };
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Cabbage Curry Bliss: Harmony of Flavors</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/cabbage" />
                    <meta
                        name="description"
                        content="Savor the soulful harmony of flavors with our Cabbage Curry Bliss. Every bite is a delightful experience in this vegetarian dish."
                    />
                    <meta
                        name="keywords"
                        content="cabbage curry, vegan curry, Indian-inspired recipes, vegetarian dishes, cabbage recipes, homemade curry, plant-based cuisine, flavorful herbs, easy-to-make curry, nutritious meals, vegetarian comfort food, cabbage and spices, vegan curry ideas, simple and delicious"
                    />
                    <meta property="og:title" content="Cabbage Curry Bliss: Harmony of Flavors" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/cabbage" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/cabbage.jpg" />
                    <meta property="og:description" content="Savor the soulful harmony of flavors with our Cabbage Curry Bliss. Every bite is a delightful experience in this vegetarian dish." />
                </Helmet>
                <h1>Cabbage is an excellent vegetable to use in cooking as it becomes wonderfully tender when cooked, allowing it to absorb
                    the delicious flavors of the other ingredients. Despite this tenderness, the chopped cabbage leaves still provide a delightful
                    chewiness to the dish. I truly enjoy the harmonious combination of flavors that comes together in this Cabbage Curry.</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1 tablespoon olive oil</li>
                    <li>1 teaspoon salt (adjust to taste)</li>
                    <li>1 tablespoon coriander powder</li>
                    <li>1 teaspoon tumeric powder</li>
                    <li>1/2 teaspoon red chili powder (adjust to taste)</li>
                    <li>1 teaspoon cumin seeds</li>
                    <li>1 teaspoon mustard seeds</li>
                    <li>1 teaspoon Garam Masala spice found in Indian Grocery store</li>
                    <li>1 cup green peas </li>
                    <li>1 medium or large onion (finely chopped)</li>
                    <li>1 medium tomato (finely chopped)</li>
                    <li>3 cloves of garlic minced</li>
                    <li>1 inch of ginger minced </li>
                    <li>4 cups of cabbage shredded</li>
                    <li>1 teaspoon kasuri methi / dry fenugreek leaves</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>In a large non stick pan heat 3 tsp oil and saute 1 tsp cumin seed and 1 tsp mustard seeds till they turn aromatic</li>
                    <li>Add 1 onion followed by minced ginger, and minced garlic. Saute the onion till they turn translucent.</li>
                    <li>Add 1 tomato and saute until they turn soft and mushy.</li>
                    <li>Add 1 teaspoon turmeric, 1/2 teaspoon chilli powder, 1 tablespoon coriander powder and 1 teaspoon salt to the pan and saute all
                        the ingredients well.</li>
                    <li>Add 4 cups of cabbage and 1 cup of green peas.</li>
                    <li>Stir gently to combine all the ingredients. Cook for a few minutes until the cabbage is cooked and the peas are tender.</li>
                    <li>Now add 1 teaspoon garam masala powder and mix well.</li>
                    <li>Cook the ingredients in the pan for 5 minutes.</li>
                    <li>Serve the cabbage curry with Indian bread.</li>
                </ol>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image src="cabbage.jpg" alt="Soulful Cabbage Curry Image" thumbnail rounded fluid></Image>
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image src="cabbage.jpg" alt="Soulful Cabbage Curry Image" thumbnail rounded width="50%" height="50%"></Image>
                </MediaQuery>
                <div>
                    <h2>Cabbage Curry (Patta Gobi) Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="4Kw-8PPg8Zs" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="4Kw-8PPg8Zs" opts={optsDesktop} />
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default Cabbage