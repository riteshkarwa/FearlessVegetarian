import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import { Helmet } from "react-helmet";

class Riceandbeans extends Component {
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
                    <title>Zesty Mexican Rice with Black Beans, Corn, and Peppers</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/riceandbeans" />
                    <meta
                        name="description"
                        content="Indulge in a culinary fiesta with our Zesty Mexican Rice recipe! A flavorful blend of black beans, corn, and peppers in every mouthful."
                    />
                    <meta
                        name="keywords"
                        content="Mexican rice, black beans, corn, peppers, zesty rice recipe, flavorful Mexican cuisine, easy Mexican rice, vegetarian Mexican dishes, vibrant side dishes, 
                        Mexican-inspired cooking, homemade rice and beans, fiesta-worthy recipes, Tex-Mex flavors, step-by-step cooking, delicious rice dishes, colorful and tasty,
                        Recipes, cooking, cooking tutorial, Fearless Vegetarian, Vegan"
                    />
                    <meta property="og:title" content="Zesty Mexican Rice with Black Beans, Corn, and Peppers" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/riceandbeans" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/ricebeans.jpg" />
                    <meta property="og:description" content="Indulge in a culinary fiesta with our Zesty Mexican Rice recipe! A flavorful blend of black beans, corn, and peppers in every mouthful." />
                </Helmet>
                <h1>Zesty Mexican Rice with Black Beans, Corn, and Peppers: A Flavorful Fiesta in Every Bite Recipe</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row>
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 45 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1 cup long-grain white rice</li>
                    <li>1 can black beans, drained and rinsed</li>
                    <li>1 cup corn (fresh or frozen)</li>
                    <li>1 red bell pepper, diced</li>
                    <li>1 green bell pepper, diced</li>
                    <li>1 small onion, finely chopped</li>
                    <li>2 cloves garlic, minced</li>
                    <li>2 tablespoons olive oil</li>
                    <li>Fresh cilantro for garnish</li>
                    <li>Green onion for garnish</li>
                    <li>1 teaspoon chili powder</li>
                    <li>Salt and pepper to taste</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Rinse the white rice under cold water until the water runs clear. This helps remove excess starch.</li>
                    <li>Discard the soaking water and rinse the Rajma again. In a stovetop pressure cooker, add the soaked black beans with fresh water.
                        Pour 1.5 cups of water and pressure cook for 3 whistles.
                        Cook the black beans with a pinch of salt until they are soft and well-cooked. This usually takes around 8 minutes after the first whistle on medium heat.
                        Cooking time may vary based on the type of pressure cooker.</li>
                    <li>In a large skillet, heat 2 tablespoons of olive oil over medium heat. Add the chopped onion and garlic. Sauté until they become translucent.</li>
                    <li>Add the diced red and green bell peppers. Sauté for another 2-3 minutes until the peppers are slightly softened.</li>
                    <li>Stir in the pressure cooked black beans, corn, and diced tomatoes with green chilies. Mix everything well</li>
                    <li>Add the rinsed rice to the skillet. Stir and cook for 2-3 minutes until the rice is lightly toasted. Add cumin powder, chili powder, paprika, salt, and pepper. Mix well to coat the rice with the spices.</li>
                    <li>Pour 2 cups of water into the skillet. Bring the mixture to a boil, then reduce the heat to low, cover, and let it simmer for 15-20 minutes or until the rice is cooked and the liquid is absorbed.</li>
                    <li>Once the rice is cooked, fluff it with a fork. Garnish with fresh cilantro and green onion.</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="ricebeans.jpg" thumbnail rounded fluid></Image>
                <div>
                    <h2>Rice and Beans Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="azLCdgLpDjY" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="azLCdgLpDjY" opts={optsDesktop} />
                    </MediaQuery>
                </div>

            </div>
        );
    }
}

export default Riceandbeans;