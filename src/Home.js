import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
 
class Home extends Component {
  render() {
    return (
      <div>
        <p className="bugs_text">
          In this space, I will be sharing some easy, fresh, flavorful, and  healthy recipes. These are family recipes I love and use daily.
          Growing up in a Hindu family, being vegetarian comes naturally to me. Hopefully for those who are finding it difficult to become a Vegetarian, 
          Fearless Vegetarian is your friend. Remember, healthy doesn’t have to equal boring. So let’s get healthier, let’s get creative and let’s get cooking. If you have 
          any questions reach out to us on our <a href="https://www.facebook.com/profile.php?id=100090174171697" className="med_link" target="_blank" rel="noopener noreferrer">Facebook Page</a>.
          I wish I had someone to reach out to, or talk to about when I started cooking if you find yourself in the same situation reach out to us.<br/>
        </p>
        <p>
          <h2>Why Vegetarian Diets Are Better</h2>
          Vegetarian diets, tend to be high in fiber and low in fat and cholesterol. On average, <a href="https://pubmed.ncbi.nlm.nih.gov/11434797/" className="med_link" target="_blank" rel="noopener noreferrer">vegetarians live ten years longer than meat-eaters. </a>  
          Over 80% of all cancers, cardiovascular diseases, and other degenerative illnesses can be kept in check with a plant-based diet.
          Red meat and processed meats are known to cause inflammation so for people with auto immune diseases vegetarian diet can prove to be benifical.
        </p>
        <p>
          <h2>Helping The Environment</h2>
          Recent studies show that one third of all global emissions are created by the food industry and meat production is responsible for over 50 percent of this! 
        </p>
        <p>
          <h2>Excellent For Meal Prep</h2>
          Vegetarian especially Indian Food is excellent for meal prep. Time allows the flavours to blend and mature making the food tastes better the next 
          day so you can make it in large quantity. The ingredients for most of the meals that I will be sharing on Fearless Vegetarian will be super cheap 
          compared to eating out in restaurant. Also you can control what is added to your food espically the spice level.
        </p>
        <p>
          <h2>Fears of Vegetarian Diet Debunked:</h2>
          <h4>1. "I wont get enough Protein"</h4>
          <Image src="https://i.pinimg.com/564x/6e/6f/57/6e6f579d3481177c7dce8ca2509dcbd9.jpg" className="pro_veg" rounded responsive alt="Protein Source for Vegetarian" />
          <h4>2. "I wont get enough Iron"</h4>
          <Image src='https://i.pinimg.com/564x/b9/b3/6d/b9b36d8db2236f2f780c137c1bc0a22e.jpg' className="ir_veg" rounded responsive alt="Iron Source for Vegetarian" />
        </p>
      </div>
    );
  }
}

export default Home;