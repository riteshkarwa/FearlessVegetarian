import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTube from 'react-youtube';
import MediaQuery from 'react-responsive';

class Shakshuka extends Component {
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
            <h1>Shakshuka is believed to have originated in North Africa. Its popularity spread throughout the Middle East, especially in Israel, where it was embraced as a hearty, inexpensive, and simple dish. 
                The Israeli version is thought to include eggs served over a seasoned tomato-based sauce.
                This Recipe, made with chickpeas instead of eggs.
            </h1>
            <Row className="cooktimerow">
              <Col><span className="material-symbols-outlined">restaurant_menu</span> Yields: 2 Servings</Col>
            </Row>
            <Row className="cooktimerow">
                <Col><FontAwesomeIcon icon={faClock} />  Cooking Time: 60 minutes</Col>
            </Row>
            <div className="ingredients">Ingredients</div>
            <ol> 
                <li>1 tbsp olive or avocado oil</li> 
                <li>1/2 cup diced white onion or shallot </li> 
                <li>1/2 medium red bell pepper (chopped)</li> 
                <li>5 pieces of cloves</li> 
                <li>2 whole tomatoes</li> 
                <li>1 tsp ground cumin</li> 
                <li>2 tsp chili powder</li>
                <li>2 tsp paprika</li> 
                <li>4 tbsp tomato paste</li>
                <li>1 pinch cayenne pepper</li> 
                <li>1 pinch coriander</li> 
                <li>1 pinch each cardamom</li>
                <li>3 cup boiled and cooked chickpeas</li>
            </ol>
            <div className="ingredients">Instruction</div>
            <ol> 
                <li>Before cooking, you will need to soak the chickpeas. You can soak them overnight, if you have the time. Place them in a large bowl and cover with cold water.</li>
                <li>The chickpeas will expand to over double their size, so make sure you cover by several inches of water to allow for expansion. Cover the bowl with a clean towel 
                    and let them soak overnight. Drain the water and rinse the beans before cooking.</li>
                <li>When you are ready to cook your soaked beans, place them in a large pot and cover with several inches of water. I use about 4 cups of water per 1 cup of soaked beans. 
                    Bring to a boil, then reduce to a simmer. Add salt, if desired. I use about 1/8 teaspoon of salt for every 4 cups of water and 1 cup of soaked beans. 
                    You may like more salt to taste, or none at all.
                </li>
                <li>Let the beans cook for 60-90 minutes until desired tenderness. Certain dishes require very tender beans (like hummus), while other dishes call for firmer beans (like stews and soups that need to be cooked over long periods of time). Adjust cooking time to achieve the desired tenderness for your purposes.</li>
                <li>Heat a large rimmed metal or cast iron skillet over medium heat. Once hot, add olive oil, onion, bell pepper and garlic. Sauté for 4-5 minutes, stirring frequently, until soft and fragrant.</li>
                <li>Add tomato puree or diced tomatoes, tomato paste, coconut sugar, sea salt, paprika, cumin, chili powder, cinnamon, cayenne pepper (optional), cardamom, and coriander (optional). Stir to combine.</li>
                <li>Bring to a simmer over medium heat and cook for 2-3 minutes, stirring frequently.</li>
                <li>Add chickpeas and olives. Stir to combine. Then reduce heat to medium-low and simmer for 15-20 minutes to allow the flavors to develop and marry with the beans.</li>
                <li>Taste and adjust seasonings as needed, adding more cumin or paprika for smokiness, cayenne for heat, cardamom and coriander for earthiness (or slight curry flavor), chili powder for smoke/heat, or olives for saltiness and to balance the tomato flavor. Cook longer, as needed, to develop flavors.</li>
                <li>Serve as is or with bread, pasta, or rice.</li>
            </ol>
            <h2>Final Product</h2>
            <Image src="shakshuka.jpg" thumbnail rounded fluid></Image>
            <div>
                <h2>Shakshuka chickpea Video</h2>
                <MediaQuery maxWidth={767}>
                    <YouTube videoId="BLWyNboLlXI" opts={optsMobile} />
                </MediaQuery>
                <MediaQuery minWidth={767}>
                    <YouTube videoId="BLWyNboLlXI" opts={optsDesktop} />
                </MediaQuery>
            </div>
        </div>
      );
    }
}
     
export default Shakshuka