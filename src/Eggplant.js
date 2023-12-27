import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';
import YouTube from 'react-youtube';
import { Helmet } from "react-helmet";


class Eggplant extends Component {
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
                    <title>Savor the Smoky Goodness: Homemade Baingan Bharta (Eggplant Curry) for an Authentic Delight!</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/eggplant" />
                    <meta
                        name="description"
                        content="Indulge in the smoky goodness of our Homemade Baingan Bharta, a traditional Indian delight that captures the essence of authentic flavors. This step-by-step guide will help you create a flavorful masterpiece, featuring roasted eggplant and aromatic spices. Elevate your culinary experience with this homemade Baingan Bharta, perfect for those seeking an authentic taste of India. Immerse yourself in the rich, smoky aroma and relish every bite of this classic dish that brings a touch of tradition to your dining table."
                    />
                    <meta
                        name="keywords"
                        content="baingan bharta, smoky goodness, homemade Indian recipes, authentic delights, roasted eggplant, Indian cuisine at home, vegetarian dishes, flavorful bharta, traditional cooking, homemade delights, smoky eggplant recipe, Indian culinary experience, savory and aromatic, easy Indian cooking, baingan bharta delight, eggplant curry"
                    />
                </Helmet>
                <h1>Mashed Eggpplant Curry, a popular dish from North India, is made with roasted mashed eggplant sauteed in onion, garlic, tomatoes, and Indian spices.</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 30 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>2 Eggplant (Baingan) large, about 450-500 grams</li>
                    <li>3 green chilies – chopped finely </li>
                    <li></li>
                    <li>2 tablespoon oil</li>
                    <li>2 teaspoon Coriander powder</li>
                    <li>1 teaspoon cumin seeds</li>
                    <li>2 cups onion diced</li>
                    <li>2 cups tomatoes diced</li>
                    <li>1 teaspoon Salt</li>
                    <li>1/4 teaspoon hing (asafoetida) </li>
                    <li>1 inch of ginger minced</li>
                    <li>1 teaspoon turmeric powder</li>
                    <li>1 teaspoon red chilli powder</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Rinse and dry the eggplant. Apply oil over the eggplant using your palms or a brush. Roast eggplant.</li>
                    <li>Place an aluminum foil over a metal baking tray. Make 6 slits on the eggplant. Insert the garlic cloves and green chilies deep inside the slits.
                        Place the eggplants & tomatoes in the tray.</li>
                    <li>Apply oil over the eggplant using your palms or a brush.</li>
                    <li>Broil/Grill them at 460°F in oven for 20 minutes. When done, the skin of the eggplant is completely charred.
                        The whole eggplant becomes soft. Test by piercing a fork inside the eggplant. The fork goes ib smoothly if it is  cooked completely.</li>
                    <li>Transfer the eggplant to a plate, let it cool slightly. Now with your fingers, remove the skin completely.
                        Then chop/mash the eggplant using a knife/fork. You can also use a potato masher.</li>
                    <li>In a large pan on medium-high flame, heat oil and add cumin seeds. Sauté for 30 seconds until the cumin seeds sizzle.</li>
                    <li>Add green chili pepper, ginger and garlic. Sauté for a minute.</li>
                    <li>Add onions and saute for 5-7 minutes until they are light golden. You don't want to brown them.</li>
                    <li>Add 1 cup of chopped tomatoes and 1 teaspoon salt. Cook until the tomatoes break down and become soft. I used grilled tomatoes here.</li>
                    <li>Add mashed grilled tomatoes.</li>
                    <li>Then add 1⁄2 teaspoon red chilli powder and cook until the raw smell of tomatoes goes away. This takes about 2 to 3 mins.</li>
                    <li>Add mashed grilled garlic, green chilli and eggplant. You can use only half of the green chilies at this point. Taste test and add later.</li>
                    <li>Mix and mash a bit with spatula to blend everything well. Add 1 teaspoon garam masala.</li>
                    <li>Mix well and cook for 3 to 4 mins on a medium heat. Taste test and add more salt if needed.</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="eggplant.jpg" alt="Savor the Smoky Goodness: Homemade Baingan Bharta (Eggplant Curry) Image" thumbnail rounded fluid></Image>
                <div>
                    <h2>Curd Rice Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="Q29mav0GfK8" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="Q29mav0GfK8" opts={optsDesktop} />
                    </MediaQuery>
                </div>
            </div>
        );
    }

}

export default Eggplant