import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import { Helmet } from "react-helmet";

class Spinachbesan extends Component {
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
                    <title>Spinach Gram Flour Curry:Elevating Flavors with Chickpea Flour in Indian Cuisine</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/spinachbesan" />
                    <meta
                        name="description"
                        content="Experience the magic of Palak Besan Ki Sabji—Spinach Gram Flour Curry! A unique Indian fusion dish combining leafy greens with chickpea flour."
                    />
                    <meta
                        name="keywords"
                        content="Palak Besan Ki Sabji, Spinach Gram Flour Curry, Palak Nu Shaak, Indian cuisine, fusion dish, leafy greens, chickpea flour, unique, exceptional, unconventional, flavorful, culinary magic"
                    />
                </Helmet>
                <h1>Explore the delightful fusion of flavors in Palak Besan Ki Sabji, a unique and exceptional dish from Indian cuisine. 
                    This spinach gram flour curry, also known as Palak Nu Shaak, brings together the earthy goodness of leafy greens with the 
                    versatile chickpea flour. Despite its unconventional pairing, the addition of chickpea flour elevates this dish to new heights, 
                    enhancing its taste, texture, and overall flavor profile. Discover the culinary magic of Indian cuisine with this off-beat yet delicious combination.</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row>
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>300 grams Spinach</li>
                    <li>1 onions, finely chopped</li>
                    <li>1 tomatoes, finely chopped</li>
                    <li>4 cloves garlic, minced</li>
                    <li>1-inch ginger, grated</li>
                    <li>2 green chilies, finely chopped</li>
                    <li>1 tablespoon Besan also known as gram flour</li>
                    <li>1 teaspoon Hing also known as Asafoetida</li>
                    <li>1 teaspoon cumin seeds</li>
                    <li>1 teaspoon coriander powder</li>
                    <li>1/2 teaspoon turmeric powder</li>
                    <li>1/2 teaspoon red chili powder (adjust to taste)</li>
                    <li>1 teaspoon garam masala</li>
                    <li>1 teaspoon sugar</li>
                    <li>3/4 cup of water for gravy</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander leaves for garnish (optional)</li>

                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>First, wash the spinach thoroughly under the running water and strain the excess water. Finely chop the spinach and keep them aside.</li>
                    <li>Now put a pan on flame and allow it to become completely dry. Then add 3 tablespoons of oil into the pan.</li>
                    <li>Once the oil is hot, add ½ teaspoon cumin seeds, and ½ teaspoon mustard seeds, one by one into the pan for tempering and allow them to crackle. 
                        Then add 1 teaspoon hing (Asafoetida) and give a stir for a few seconds.</li>
                    <li>Add chopped garlic into the pan and fry them till golden in color.</li>
                    <li>Add the chopped onions and cook them over medium flame for around 5-6 minutes till soft and pink in color</li>
                    <li>Add 1 tablespoon ginger-garlic paste, 2-3 green chillies and cook it in low flame for another 2-3 minutes.</li>
                    <li>Add tomatoes and cover the pan. Cook it on low flame for 5-6 minutes until the tomatoes get mushy.</li>
                    <li>Add 1 tablespoon besan aka gram flour into the pan and cook it in low flame for another 3-4 minutes so it 
                        gets cooked properly and the raw smell disappears.</li>
                    <li>Add 1/2 teaspoon turmeric powder, 1/2 teaspoon chilli powder and salt, one by one into the pan and cook for couple of minutes in low flame</li>
                    <li>Add 1 teaspoon cumin powder, 1 teaspoon coriander powder into the pan and mix it. 
                        Cook it in low flame for another 2-3 minutes so the raw smell of spices goes away.</li>
                    <li>Put the flame in high and add half of the chopped spinach into the pan and give a nice mix. Then add rest of the spinach and mix it well. 
                        Put on the lid of the pan and cook it in low flame for 7-8 minutes. Stir in between if required.</li>
                    <li>Add 3/4 cup water into the pan and mix it</li>
                    <li>Add 1 teaspoon sugar and give a stir. Cover the pan and cook it in low flame for another 2-3 minutes. Stir in between if required.</li>
                    <li>Garnish with fresh coriander leaves and serve hot with rice or naan bread.</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="spinachbesan.jpg" thumbnail rounded fluid></Image>
                <div>
                    <h2>Spinach Besan Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="OLhTnVOkedk" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="OLhTnVOkedk" opts={optsDesktop} />
                    </MediaQuery>
                </div>

            </div>
        );
    }
}

export default Spinachbesan;