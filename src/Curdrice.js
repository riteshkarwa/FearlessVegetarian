import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';
import YouTube from 'react-youtube';
import { Helmet } from "react-helmet";


class Curdrice extends Component {
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
                    <title>Curd Rice Delight: South Indian Comfort</title>
                    <link rel="canonical" href="https://fearlessvegetarian.netlify.app/curdrice" />
                    <meta
                        name="description"
                        content="Curd Rice Delight: Enjoy South Indian comfort with this dish made with precooked rice, yogurt, herbs, and tempering spices."
                    />
                    <meta
                        name="keywords"
                        content="curd rice, South Indian dish, Indian yogurt, precooked rice, herbs, tempering spices, South Indian cuisine, traditional recipes, comfort food, cooling dish, easy-to-follow recipe, flavorful curd rice, Indian culinary delight, vegetarian dishes, fresh and aromatic"
                    />
                    <meta property="og:title" content="Curd Rice Delight: South Indian Comfort" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fearlessvegetarian.netlify.app/curdrice" />
                    <meta property="og:image" content="https://fearlessvegetarian.netlify.app/curdrice.jpg" />
                    <meta property="og:description" content="Curd Rice Delight: Enjoy South Indian comfort with this dish made with precooked rice, yogurt, herbs, and tempering spices." />
                </Helmet>
                <h1>Curd rice is a South Indian dish made with precooked rice, Curd (Indian Yogurt), herbs and tempering spices.
                    It is more often eaten by South Indians as a part of the meal, all round the year. Apart from being gut healthy,
                    Curd rice is also a comforting summer food which keeps the body cool.</h1>
                <Row className="cooktimerow">
                    <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 1 Serving</Col>
                </Row>
                <Row className="cooktimerow">
                    <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 30 minutes</Col>
                </Row>
                <div className="ingredients">Ingredients</div>
                <ol>
                    <li>1/2 cup rice</li>
                    <li>1 green chilies – chopped finely </li>
                    <li>1 teaspoon oil</li>
                    <li>1/2 teaspoon mustard seeds</li>
                    <li>1/2 teaspoon cumin seeds</li>
                    <li>1 teaspoon chana dal found in Indian Grocery Store</li>
                    <li>1 teaspoon Urad dal found in Indian Grocery Store</li>
                    <li>1/4 teaspoon hing (asafoetida) </li>
                    <li>1/2 teaspoon ginger minced</li>
                    <li>8 cashews roasted</li>
                    <li>1 cup plain yogurt</li>
                </ol>
                <div className="ingredients">Instruction</div>
                <ol>
                    <li>Add rice to a bowl and rinse it well a few times. Then pour 1.5 cups water and 0.5 teaspoon salt. Keep it in a pressure cooker.
                        Pressure cook rice for 3 whistles until soft. You can also cook the rice directly in the cooker for 2 whistles.
                        When the pressure releases, remove the rice & mash it lightly. You can also fluff up & use if you do not like mushy rice.
                        If you prefer to use milk, ad 1/4 cup hot milk. Cool it completely.</li>
                    <li>Add curd to cooled rice. Mix well until combined. If you have cooked the rice without salt, then add it now.</li>
                    <li>Stir in coriander leaves, grated carrots and cucumbers to the curd rice. Taste the curd rice & add more salt if needed.</li>
                    <li>Heat oil in a pan. Then add cumin & mustard. When they begin to splutter, add red chilli, chana dal, urad dal and cashews
                        if using. Fry until the dal turns golden.</li>
                    <li>Add ginger, green chili and curry leaves.</li>
                    <li>When the curry leaves turn crisp, add hing and turn off the stove. If using bottle gourd, add it to the hot seasoning and stir.</li>
                    <li>Pour the curd rice mixture into the pan and mix all the ingredients well</li>
                    <li>I prefer hot curd rice so I cook the mixture in the pan for 5 minutes till it gets hot.</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="curdrice.jpg" alt="A bowl of refreshing Curd Rice, a South Indian delicacy made with cooked rice, yogurt, and seasoned with mustard seeds, curry leaves, and chillies" thumbnail rounded fluid></Image>
                <div>
                    <h2>Curd Rice Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                        <YouTube videoId="Y_QJdaanMzg" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                        <YouTube videoId="Y_QJdaanMzg" opts={optsDesktop} />
                    </MediaQuery>
                </div>
            </div>
        );
    }

}

export default Curdrice