import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';

class Chorizorice extends Component {
    render() {
        const optsDesktop = {
            height: '600',
            width: '600',
        };

        const optsMobile = {
            height: '550',
            width: '325',
        };
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>One-Pot Soy Chorizo Rice: A Flavorful Feast in a Single Pot</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/chorizorice" />
                    <meta
                        name="description"
                        content="Discover the simplicity and vibrant flavors of this quick, one-pot recipe. Packed with beans, corn, peppers, and more—a delightful blend of fresh ingredients."
                    />
                    <meta
                        name="keywords"
                        content="One-Pot Soy Chorizo Rice, Flavorful Feast, Simple and Quick Dish, Beans, Corn, Bell Pepper, Jalapeño, Garlic, Fresh Vegetables, Frozen Vegetables"
                    />
                    <meta property="og:title" content="One-Pot Soy Chorizo Rice: A Flavorful Feast in a Single Pot" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/chorizorice" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/chorizorice.jpg" />
                    <meta property="og:description" content="Discover the simplicity and vibrant flavors of this quick, one-pot recipe. Packed with beans, corn, peppers, and more—a delightful blend of fresh ingredients." />
                </Helmet>
                <h1>One-Pot Soy Chorizo Rice: A Flavorful Feast in a Single Pot. There are numerous aspects I adore about this recipe.
                    Despite featuring a variety of flavors, it remains a simple and quick dish to assemble. With ingredients like beans,
                    corn, bell pepper, jalapeño, garlic, and more, this meal delivers a burst of flavors using fresh (or frozen!) vegetables.
                </h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 4 Servings</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
                </Row>
                <ol>
                    <li>1/2 tbsp olive oil</li>
                    <li>2 cloves garlic minced </li>
                    <li>1 yellow onion finely diced</li>
                    <li>1 tbsp double concentrated tomato paste</li>
                    <li>1 cup rice</li>
                    <li>1/2 tsp chili powder</li>
                    <li>1 tsp cumin</li>
                    <li>2 cups vegetable broth</li>
                    <li>1 jalapeno finely chopped, optional</li>
                    <li>1 bell pepper chopped</li>
                    <li>1/2 package Trader Joe's Soy Chorizo</li>
                    <li>1 cup black beans pressure cooked</li>
                    <li>1/2 cup corn frozen or fresh</li>
                    <li>2 tbsp cilantro finely chopped</li>
                    <li>1/2 tbsp lime juice</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Heat the olive oil in a pan or pot over medium heat. Saute the onion and garlic in the oil for
                        about 2 minutes until you can smell the garlic</li>
                    <li>Add the tomato paste and cook another 2-3 minutes, stirring with a spatula frequently.</li>
                    <li>Add the rice, chili powder, and cumin. Cook for another 2-3 minutes, stirring frequently.</li>
                    <li>Add the vegetable broth, jalapeno, bell pepper, soy chorizo, black beans, and corn and stir in.
                        Bring the rice to a boil and then let simmer, covered, for 12-14 minutes, or until the broth has boiled off.</li>
                    <li>Stir well</li>
                </ol>
                <h2>Final Product</h2>
                <MediaQuery maxWidth={767}>
                    <Image src="chorizorice.jpg" alt="One-Pot Soy Chorizo Rice: A Flavorful Feast in a Single Pot" thumbnail rounded fluid></Image>
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <Image src="chorizorice.jpg" alt="One-Pot Soy Chorizo Rice: A Flavorful Feast in a Single Pot" thumbnail rounded width="50%" height="50%"></Image>
                </MediaQuery>
                <div>
                    <h2>One-Pot Soy Chorizo Rice Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="3CjZ_gHg-k4" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="3CjZ_gHg-k4" opts={optsDesktop} />
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default Chorizorice;
