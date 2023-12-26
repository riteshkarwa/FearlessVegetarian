import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';
import YouTube from 'react-youtube';
import { Helmet } from "react-helmet";


class Pavbhaji extends Component {
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
                    <title>Savor the Street-Style Magic: Homemade Pav Bhaji for a Flavorful Feast!</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/pavbhaji" />
                    <meta
                        name="description"
                        content="Experience the irresistible flavors of street-style indulgence with our Homemade Pav Bhaji recipe. This step-by-step guide will help you recreate the iconic Indian street food at home, offering a flavorful and satisfying feast. Dive into a medley of spiced vegetables served with buttery pav (bread rolls), creating a culinary delight that captures the essence of Indian street food. Elevate your dining experience and treat your taste buds to the magic of homemade Pav Bhaji. It's more than a meal; it's a street-style celebration on your plate!"
                    />
                    <meta
                        name="keywords"
                        content="pav bhaji, street-style food, homemade pav bhaji, Indian street food, flavorful feast, spiced vegetables, buttery pav, iconic Indian recipes, street food celebration, vegetarian delights, Indian cuisine at home, culinary indulgence, homemade street food, savory and satisfying, Indian culinary magic"
                    />
                </Helmet>
                <h1>Pav Bhaji is an iconic dish from Mumbai. This Pav Bhaji Recipe is going to make you fall in love with it.</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 4 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>2 cups potato</li>
                    <li>1 Whole Red Pepper chopped</li>
                    <li>1/2 cup carrots peeled and chopped</li>
                    <li>1.5 cups cauliflower </li>
                    <li>1 cup tomato</li>
                    <li>1 cup onion</li>
                    <li>1 teaspoon chilli powder</li>
                    <li>1/4 cup raw onion for finely chopped for eating with Pav Bhaji</li>
                    <li>1 whole green chilli, 1/2 if the green chilli is big in size or if you are using Jalapeno pepper</li>
                    <></>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Rinse, peel and cube 3 medium or 2 larger potatoes (about 300 grams). Mine were about 1/2 to 2 cups when measured.</li>
                    <li>Clean 1 cup cauliflower florets (optional). Rinse 1⁄2 to 3⁄4 cups green peas. If you want you can also use 1 medium carrot (Half cup chopped).</li>
                    <li>For making masala, chop 1 medium onion (3/4 to 1 cup chopped), 2 medium tomatoes (3/4 to 1 cup chopped), half bell pepper (1⁄2 cup chopped) and 1 green chilli.</li>
                    <li>Also make 1 tablespoon ginger garlic paste. Keep all of these aside.</li>
                    <li>Add potatoes, cauliflower, peas & carrots (optional) to a pressure cooker or a instant pot. Pour 1.5 cups water, it should be just enough to cover them partially.</li>
                    <li>Cook the vegetables for 12 minutes and instant release the pressure once the instant pot beeps.</li>
                    <li>After opening the instant pot. All the vegetable should be cooked. Mash them well.</li>
                    <li>Add 1 cup onion to a non stick pot.Still them till they turn translucent.</li>
                    <li>Soak chopped Red pepper in hot water for 10 minutes</li>
                    <li>Using a blender puree the red pepper along with 3 cloves of garlic and few pieces of chopped ginger</li>
                    <li>Add 1 whole chopped green chilli to the non stick pot along with red pepper puree. Fry until it smells good.</li>
                    <li>Add 1 teaspoon chilli powder, 1/4 teaspoon tumeric powder, 2 heaping tablespoon paav bhaji masala powder found in Indian  Grocery Store.</li>
                    <li>Mix well and fry for 3 minutes</li>
                    <li>Add the boiled & mashed vegetables to the non stick pot. Add 1/2 to 3/4 cups more water to bring it to a consistency.</li>
                    <li>Mix well and simmer for a while to bring out the flavor of masala. Taste test and add more salt if you want. You can also add more chili powder at this stage for brighter color.
                        Also for more flavor you may add more pav bhaji masala if you want.</li>
                    <li>Add 3 tablespoon Rani Fenugreek Leaves Dried (Kasoori Methi). When it reaches the desired consistency, add chopped coriander leaves.Turn off the gas burner. Slightly cool down and add some lemon juice before serving.</li>
                    <li>Slit the pav horizontally leaving one edge intact. On a low flame, heat 1 teaspoon
                        butter on a tawa. Add little masala powder over it.</li>
                    <li>Place the pav on the butter and toast for 1 to 2 mins until slightly crisp. You can do the same on the other side as well by adding more butter on the pan.</li>
                    <li>Garnish with coriander leaves, lemon wedges and chopped onions. You can add more butter on the hot bhaji.</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="pavbhaji.jpg" alt="Savor the Street-Style Magic: Homemade Pav Bhaji Image" thumbnail rounded fluid></Image>
                <div>
                    <h2>Pav Bhaji Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="XDmBE6aW3ZU" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="XDmBE6aW3ZU" opts={optsDesktop} />
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default Pavbhaji