import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'


class Main extends Component {
  render(){
    return(
      <Container className="p-3">
        <div>
          <h1>Fearless Vegetarian</h1>
          <p>In this space, I will be sharing some easy, fresh, flavorful, and  healthly recipes. These are family recipes I love and use daily. <br/>
            Growing up in a Hindu family, being vegetarian comes naturally to me. Hopefully for those who are finding it difficult to become a Vegetarian, <br/>
            Fearless Vegetarian is your friend.<br/>
          </p>
          <p>
            <h2>Why Vegetarian Diets Are Better</h2>
            Vegetarian diets, tend to be high in fiber and low in fat and cholesterol. On average, vegetarians live seven years longer than meat-eaters.  <br/>
            Over 80% of all cancers, cardiovascular diseases, and other degenerative illnesses can be prevented until a very old age, with a plant-based diet. <br/>
            Red meat and processed meats are known to cause inflammation so for people with auto immune diseases  vegetarian diet can prove to be benifical.
          </p>
          <p>
            <h2>Helping The Environment</h2>
            Recent studies show that one third of all global emissions are created by the food industry and meat production is responsible for over 50 percent of this! 
          </p>
          <p>
            <h2>Fears of Vegetarian Diet Debunked:</h2>
            <h4>1. "I wont get enough Protein"</h4>
            <Image src="https://i.pinimg.com/564x/6e/6f/57/6e6f579d3481177c7dce8ca2509dcbd9.jpg" rounded responsive alt="Protein Source for Vegetarian"/>
            <h4>2. "I wont get enough Iron"</h4>
            <Image src='https://i.pinimg.com/564x/b9/b3/6d/b9b36d8db2236f2f780c137c1bc0a22e.jpg' rounded responsive alt="Iron Source for Vegetarian"/>
          </p>
          </div>
      </Container>
    );
  }
}

export default Main;
