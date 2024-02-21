import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';
import { Helmet } from "react-helmet";

class Shahipaneer extends Component {
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
                    <title>Succulent Shahi Paneer: Creamy Delight</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/mushroom" />
                    <meta
                        name="description"
                        content="Indulge in the rich flavors of Shahi Paneer, a creamy delight featuring soft, pillowy paneer floating in a luscious gravy"
                    />
                    <meta
                        name="keywords"
                        content="Punjab, flavors, Shahi Paneer, creamy, soft, pillowy, paneer, luscious gravy, Indian cuisine, tomato gravy, yogurt, aromatic spices, comfort food, creamy yogurt, traditional, comforting, easy to make, satisfying"
                    />
                </Helmet>
                <h1>Shahi Paneer is a succulent Indian dish featuring soft, pillowy paneer floating in a creamy gravy.</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
                </Row>
                <Row>
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>250g paneer (Indian cottage cheese), cubed</li>
                    <li>2 onions, finely chopped</li>
                    <li>2 tomatoes, finely chopped</li>
                    <li>1/2 cup cashew nuts, soaked in water for 30 minutes</li>
                    <li>2 cloves garlic, minced</li>
                    <li>1-inch ginger, grated</li>
                    <li>2 green chilies, finely chopped</li>
                    <li>1 teaspoon cumin seeds</li>
                    <li>1 teaspoon coriander powder</li>
                    <li>1/2 teaspoon turmeric powder</li>
                    <li>1/2 teaspoon red chili powder (adjust to taste)</li>
                    <li>1 teaspoon garam masala</li>
                    <li>1/4 cup plain yogurt</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander leaves for garnish (optional)</li>

                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>If you're using store bought paneer,soak it in warm water for 15 to 20 min and pat dry.</li>
                    <li>Heat oil or ghee in a pan over medium heat.</li>
                    <li>Add 12 whole or split cashews, and 2 to 3 green cardamoms. Shallow fry them for 1 to 2 mins.</li>
                    <li>Add 1 cup of cubed onions and 1 slit green chilli. Sauté until the onions turn transparent. 
                        If you prefer hot and spicy shahi paneer, use green chili at this stage. If you prefer a 
                        tomato based dish then add the optional cubed tomatoes (1 or 2) if using.</li>
                    <li>Cook the onion nuts mixture until the onion turns soft</li>
                    <li>Transfer all the ingredients to the blender and add one whole tomato. Blend the mixture until it becomes a smooth paste.</li>
                    <li>In the same pan, heat 1 tablespoon of oil or ghee. Add 1/2 teaspoon of cumin (jeera) or shahi jeera, along with 
                        2 to 3 cloves and 1 to 2-inch cinnamon. Allow the whole spices to sauté on low heat for about a minute 
                        until they release their fragrant aroma.</li>
                    <li>Add 1 teaspoon of chopped ginger and garlic to the pan, then sauté them well for 1 to 2 minutes until the raw smell dissipates.</li>
                    <li>Next, add the onion, tomato, and cashew paste to the pan, along with 1/4 teaspoon of red chili powder, 
                        3/4 to 1 teaspoon of garam masala, 1/2 teaspoon of turmeric, and 1/2 teaspoon of salt (adjust to taste)</li>
                    <li>Mix the ingredients thoroughly and cook for 3 to 4 minutes until the spices raw aroma fades and the mixture thickens. 
                        While cooking, beat 1/2 cup of thick curd or plain yogurt until smooth. Then, reduce the heat to low and gradually 
                        incorporate the beaten curd into the mixture in the pan</li>
                    <li>Allow the paneer gravy to simmer until it thickens.</li>
                    <li>Add 3/4 cup of water. Add pinch of saffron strands. Mix well</li>
                    <li>Cook the paneer gravy until it thickens or until the gravy releases oil on the surface. Taste-test the gravy to adjust seasoning if needed</li>
                    <li>Garnish with fresh coriander leaves and serve hot with rice or naan bread.</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="paneer.jpg" thumbnail rounded fluid></Image>
                <div>
                    <h2>Shahi Paneer Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="QVkVreW4dPw" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="QVkVreW4dPw" opts={optsDesktop} />
                    </MediaQuery>
                </div>

            </div>
        );
    }
}

export default Shahipaneer;