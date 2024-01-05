import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class DalMakhani extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Authentic Dal Makhani: A Slow Cooked Delight</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/dalmakhani" />
                    <meta
                        name="description"
                        content="Indulge in the rich flavors of authentic Dal Makhani—slow-cooked perfection with whole black gram and red kidney beans. A North Indian culinary delight."
                    />
                    <meta
                        name="keywords"
                        content="Dal Makhani, Authentic flavors, Indian-inspired recipes, vegetarian dishes, Slow-cooked perfection, homemade curry, plant-based cuisine, flavorful herbs, easy-to-make curry, nutritious meals, vegetarian comfort food, Red kidney beans, black gram, simple and delicious, North Indian cuisine"
                    />
                    <meta property="og:title" content="Authentic Dal Makhani: A Slow Cooked Delight" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/dalmakhani" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/dalmakhani.jpg" />
                    <meta property="og:description" content="Indulge in the rich flavors of authentic Dal Makhani—slow-cooked perfection with whole black gram and red kidney beans. A North Indian culinary delight." />
                </Helmet>
                <h1>Dal Makhani is a classic North Indian dish made with whole black gram (Urad dal) found in Indian Store, red kidney beans, butter and other Indian Spices.
                    It is one of dishes that takes a longer time to cook more than 2 hours. Also the more you cook the better the curry is going to taste.
                </h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 4 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>2 tablespoon Dal Makhani masala found in Indian store</li>
                    <li>1 tablespoon coriander powder </li>
                    <li>1/8 teaspoon red chili powder</li>
                    <li>1 teaspoon cumin seeds</li>
                    <li>1 tablespoon Garam Masala spice found in Indian store</li>
                    <li>Salt as per taste</li>
                    <li>1 onion</li>
                    <li>1 tablespoon Kitchen King Spice found in Indian Store</li>
                    <li>5 piece of cloves</li>
                    <li>2 small piece of ginger peeled</li>
                    <li>2 Bay Leaves </li>
                    <li>2 green cardamoms</li>
                    <li>1 black cardamom </li>
                    <li>2 Whole Tomatoes </li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Add 1 cup urad dal (black lentils) & 1⁄4 cup rajma (red kidney beans) to
                        a large pot and rinse thoroughly a few times. Drain the water and pour 3 to 4 cups fresh water.
                        Soak them for at least 6 to 8 hours. I usually soak them overnight.</li>
                    <li>After they are soaked well, drain the water and pour 4 cups fresh water. Pressure cook on a medium heat for about 35 to 40 mins. </li>
                    <li>When the pressure releases naturally, open the lid and check if the dal is well cooked.
                        Both Red kidney beans and urad dal have to be softened. Press down a rajma and few urad dal in between your thumb and fore finger. They should get mashed very well easily.
                    </li>
                    <li>Add 1 tablespoon of olive oil in a non stick pan and heat it up.</li>
                    <li>Add pieces of ginger, whole garlic, 2 tomatoes, 1 onion,  5 pieces of clove in a mixer or food processor and turn it
                        into a fine puree.
                    </li>
                    <li>Add the puree to the non stick pan with oil heated up.</li>
                    <li>Add 1 bay leaf, 1 black cardamom crushed in mortar and pestle, 2 green cardamoms crushed in mortar and pestle  and 1 tablespoon of cumin seeds to the pan. </li>
                    <li>Saute them for half a minute. Then add 1 medium onion finely chopped. Saute until golden or light brown.</li>
                    <li>Add tomato puree to the pan.</li>
                    <li>Add 1 tablespoon chilli powder ,1 tablespoon garam masala, 1 tablespoon coriander powder, 1 tablespoon Kitchen King Masala
                        (found in Indian store) to the pan
                    </li>
                    <li>Mix all the contents in the pan.</li>
                    <li>Cover the pan with a lid and cook it for 10 minutes.</li>
                    <li>Mash the cooked lentils slightly and transfer to the pan.</li>
                    <li>Stir well and add 1 cup of water.</li>
                    <li>Cook the lentils for 60 minute on low flame. Keep stiring the contents of the pan in between.</li>
                    <li>Taste the dal makhani. Add more salt as needed. Take 1⁄2 teaspoon kasuri methi (dried fenugreek leaves) and crush it in between your palms. Then add it. This brings out the flavor.</li>
                    <li>Add 1 cup of water, some butter and cook the lentils for another 60 minutes.</li>
                    <li>That is it your curry is ready. You can enjoy it with Garlic Naan or Roti(Indian bread less calories compared to Naan)</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="dalmakhani.jpg" thumbnail rounded fluid></Image>
            </div>
        );
    }
}

export default DalMakhani