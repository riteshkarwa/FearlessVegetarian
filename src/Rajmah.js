import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';

class Rajmah extends Component {
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
            <h1>Rajma is the Indian name for kidney beans. These are soaked, cooked & then simmered
                with onions, tomatoes & spices to make the dish, Rajma masala.
                Rajma are fat free and have many benefits since they are high in fiber, folate and
                magnesium. High fiber promotes digestive tract health, folate & magnesium makes them
                a heart healthy food. Considering these benefits kidney beans are widely eaten in India.</h1>
            <Row className="cooktimerow">
              <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
            </Row>
            <Row>
                <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
            </Row>
            <div className="ingredients">Ingredients</div>
                <ol>  
                    <li>1 cup dried Rajma (Red Kidney Beans)</li>
                    <li>Water for soaking and cooking</li> 
                    <li>2 tablespoons oil or ghee</li>
                    <li>1 large onion, finely chopped</li>
                    <li>2 tomatoes, finely chopped</li>
                    <li>2 teaspoons ginger-garlic paste</li>
                    <li>1-2 green chilies, finely chopped (adjust to taste)</li>
                    <li>1 teaspoon cumin seeds</li>
                    <li>1 teaspoon coriander powder</li>
                    <li>1/2 teaspoon turmeric powder</li>
                    <li>1 teaspoon red chili powder (adjust to taste)</li>
                    <li>1 teaspoon garam masala</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander leaves for garnish (optional)</li> 

                </ol>
            <div className="ingredients">Instruction</div>
                <ol> 
                    <li>Rinse 1 cup of Rajma thoroughly under cold water. Soak the Rajma in enough water overnight or for at least 8 hours. 
                        This helps in reducing the cooking time.</li>
                    <li>Discard the soaking water and rinse the Rajma again. In a stovetop pressure cooker, add the soaked Rajma with fresh water. 
                        Pour 1.5 cups of water and pressure cook for 5 whistles.
                        Cook the Rajma with a pinch of salt until they are soft and well-cooked. This usually takes around 15-20 minutes after the first whistle on medium heat. 
                        Cooking time may vary based on the type of pressure cooker and the size of Rajma.</li>
                    <li>In a separate pan, heat oil or ghee. Add cumin seeds and let them splutter. Add finely chopped onions and sauté until golden brown.</li>
                    <li>Add ginger-garlic paste and sauté until the raw smell disappears. Add finely chopped tomatoes and cook until they are soft and oil starts separating from the masala.</li> 
                    <li>Add turmeric powder, red chili powder, coriander powder, and garam masala. Sauté the spices until the oil separates.</li> 
                    <li>Transfer the prepared masala to the cooked Rajma in the pressure cooker. Mix well and simmer for 10-15 minutes, allowing the flavors to meld. Adjust salt and spices according to taste.</li> 
                    <li>Garnish with fresh coriander leaves and serve the Rajma with steamed rice or Indian bread (roti/naan).</li>
                </ol>
                <h2>Final Product</h2>
                <Image src="rajmah.jpg" thumbnail rounded fluid></Image>
                <div>
                    <h2>Rajmah Preparation Video</h2>
                    <MediaQuery maxWidth={767}>
                    <YouTube videoId="QROugaifSsE" opts={optsMobile} />
                    </MediaQuery>
                    <MediaQuery minWidth={767}>
                    <YouTube videoId="QROugaifSsE" opts={optsDesktop} />
                    </MediaQuery>
                </div>

          </div>
        );
    }
}

export default Rajmah;