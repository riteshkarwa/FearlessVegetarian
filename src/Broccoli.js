import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';

class Broccoli extends Component {
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
                    <title>Delicious Homemade Broccoli Soup Recipe!</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/potatobhurji" />
                    <meta
                        name="description"
                        content="Delicious Homemade Broccoli Soup Recipe: Comfort in Every Spoonful!"
                    />
                    <meta
                        name="keywords"
                        content="Broccoli Soup, Homemade Recipe, Pine Nuts, Comforting Soup, Culinary Delight, Healthy Cooking, 
                        Easy Soup Recipe, Nutritious Ingredients, Cooking Tutorial, Pine Nut Garnish, Wholesome Comfort Food, 
                        Kitchen Delights, Soup with Texture, Recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan, 
                        Flavorful Broccoli Dish, Cooking Inspiration, Simple Recipe, Cooking at Home, Tasty Broccoli Soup, 
                        Pine Nut Crunch, Step-by-Step Cooking, Comfort Food Creations, Culinary Adventure, Delicious Soup Ideas, Soup Season, Nutty Broccoli Flavor."
                    />
                    <meta property="og:title" content="Delicious Homemade Broccoli Soup Recipe!" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/potatobhurji" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/potatobhurji.jpg" />
                    <meta property="og:description" content="Delicious Homemade Broccoli Soup Recipe: Comfort in Every Spoonful!" />
                </Helmet>
                <h1>Delicious homemade broccoli soup recipe.This broccoli soup is a perfect balance of nutritious ingredients and indulgent flavor, providing a comforting experience that soothes the soul. </h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1 large head of broccoli, chopped into florets</li>
                    <li>1 onion, diced</li>
                    <li>1 tablespoon garlic minced</li>
                    <li>1 medium potato, peeled and diced</li>
                    <li>1 cup milk (or a dairy-free alternative)</li>
                    <li>2 Cups Water</li>
                    <li>Salt and pepper to taste</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <h2>White sauce Preparation</h2>
                <ol>
                    <li>In a sauce pan add milk, corn flour, butter, and then turn on the flame. Keep stirring it continuously.</li>
                    <li>Once the milk starts thickening, continuing stirring for 2 minutes and then turn off the flame.</li>
                </ol>
                <ol>
                    <li>Wash and chop the broccoli into florets. Peel and dice the potato, dice the onion, and mince the garlic.</li>
                    <li>In a large pot, add diced onion, minced garlic, diced potato and 2 cups of water. Boil all the ingredients for 10 minutes</li>
                    <li>Add the chopped broccoli, give it a stir and add water if required</li>
                    <li>Close the lid and let it cook for 4-5 minutes.</li>
                    <li>After 5 minutes check if the vegetables are cooked, switch off the flame.</li>
                    <li>Take down the vessel and let it cool for 10-15 minute.</li>
                    <li>With the help of a blender blend the vegetables into a smooth puree.</li>
                    <li>Mix the broccoli stock with the white sauce.</li>
                    <li> Mix well and bring it to a boil.</li>
                    <li>Taste the soup and adjust the salt if required.</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="broccoli.jpg" alt="Wholesome Broccoli Soup Recipe with Pine Nuts" thumbnail rounded fluid></Image>
                <div>
                    <h2>Broccoli Soup Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="64gHB7n5cBw" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="64gHB7n5cBw" opts={optsDesktop} />
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default Broccoli;