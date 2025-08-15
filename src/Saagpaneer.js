import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";

class Saagpaneer extends Component {
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
                    <title>Saag Paneer Recipe: Rich & Flavorful North Indian Delight"</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/saagpaneer" />
                    <meta
                        name="description"
                        content="Saag Paneer: Rich and flavorful North Indian delight. Fresh spinach, aromatic spices, and creamy paneer. Perfect with naan or rice."
                    />
                    <meta
                        name="keywords"
                        content="saag paneer, Indian spinach curry, paneer recipes, vegetarian dishes, Indian cuisine, creamy spinach curry, 
                        homemade saag paneer, traditional Indian cooking, palak paneer, Indian vegetarian recipes, Indian comfort food,
                        flavorful vegetarian curry, paneer and spinach, North Indian cuisine, Indian restaurant-style saag paneer,
                        Recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan"
                    />
                    <meta property="og:title" content="Saag Paneer Recipe: Rich & Flavorful North Indian Delight" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/saagpaneer" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/saagpaneer.jpg" />
                    <meta property="og:description" content="Saag Paneer: Rich and flavorful North Indian delight. Fresh spinach, aromatic spices, and creamy paneer. Perfect with naan or rice." />
                </Helmet>
                <h1>Saag(Spinach) Paneer is a popular vegetarian dish consisting of panner(Indian cheese) in a smooth, delicious and creamy Spinach gravy.</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>2 tablespoon olive oil</li>
                    <li>1 tablespoon coriander powder </li>
                    <li>1/8 teaspoon tumeric powder</li>
                    <li>1/8 teaspoon red chili powder</li>
                    <li>1 whole Swad Paneer packet</li>
                    <li>1 teaspoon cumin powder</li>
                    <li>1 tablespoon Garam Masala spice found in Indian store</li>
                    <li>Salt as per taste</li>
                    <li>1 onion</li>
                    <li>1/8 teaspoon Amchoor Powder - Dried Mango Powder found in Indian Store</li>
                    <li>1/2 teaspoon Kitchen King Spice found in Indian Store</li>
                    <li>5 piece of cloves</li>
                    <li>2 small piece of ginger peeled</li>
                    <li>1 small box of baby spinach </li>
                    <li>2 cups of fresh cilantro levaes plucked</li>
                    <li>1 cup of mint leaves</li>
                    <li>2 Whole Tomatoes </li>
                </ol>
                <h2>All the ingredients ready to be put into a blender to make the gravy for the dish</h2>
                <Image src="saag_prep.jpg" thumbnail rounded fluid></Image>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Take 2 tablespoon olive oil in a non stick pot and heat it up.</li>
                    <li>Add pieces of ginger, whole garlic, cilantro leaves, Baby Spinach,  Mint leaves, 2 tomatoes, 1 onion,  5 pieces of clove in a mixer or food processor and turn it
                        into a fine puree.
                    </li>
                    <li>Add the onion tomato spinach puree to the non stick pot with oil heated up.</li>
                    <li>Add all the  spices to the above  puree: ginger powder, onion powder, coriander powder, chili powder(you can start with adding very
                        little in the beginning and add more towards the end of the dish), tumeric powder, curry powder.</li>
                    <li>Cover the pot with a lid and let it cook.</li>
                    <li>Let the spices cook for around 10 min.</li>
                    <li>Cut Paneer into small square pieces and add it to the pot</li>
                    <li>Cook the Paneer for about 10 minutes. Constantly stir the Paneer to mix it well with onion tomato spinach puree which
                        will act as a gravy for the curry.</li>
                    <li>Add salt as per taste.</li>
                    <li>Add little bit of Kitchen King Masala Spice, Garam Masala powder and Amchoor powder all of them can be found in Indian Grocery Store.</li>
                    <li>That is it your curry is ready. You can enjoy it with Garlic Naan or Roti(Indian bread less calories compared to Naan)</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="saagpaneer.jpg" alt="Hearty Saag Paneer: A Flavorful Journey into North Indian Cuisine" thumbnail rounded fluid></Image>
                <div>
                    <h2>Saag Paneer Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="Mo1BzUQcskM" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="Mo1BzUQcskM" opts={optsDesktop} />
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default Saagpaneer;