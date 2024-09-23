import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import { Helmet } from "react-helmet";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Fearless Vegetarian, Plant-Powered Living, Delicious Vegetarian Recipes</title>
          <link rel="canonical" href="https://fearlessvegetarian.netlify.app/" />
          <meta
            name="description"
            content="Fearless Vegetarian: Embrace bold, plant-powered living with delicious, cruelty-free choices for a healthier and sustainable lifestyle!"
          />
          <meta
            name="keywords"
            content="Fearless Vegetarian, Plant-Powered Living, Delicious Vegetarian Recipes, Cruelty-Free Choices, Healthy Lifestyle, Sustainable Living, Bold Vegetarianism, Plant-Based Diet, Vegan Living"
          />
          <meta property="og:title" content="Fearless Vegetarian Living: Plant-Powered Passion" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fearlessvegetarian.netlify.app/" />
          <meta property="og:image" content="https://fearlessvegetarian.netlify.app/spices.jpg" />
          <meta property="og:description" content="Fearless Vegetarian: Embrace bold, plant-powered living with delicious, cruelty-free choices for a healthier and sustainable lifestyle!" />
        </Helmet>
        <p className="bugs_text">
          In this space, I will be sharing some easy, fresh, flavorful, and healthy recipes—family favorites that I love and use daily.
          Growing up in a Hindu family, being vegetarian comes naturally to me. Hopefully, for those finding it difficult to adopt a vegetarian lifestyle,
          Fearless Vegetarian is here as your friend. Remember, healthy doesn't have to mean boring. So, let's prioritize our health,
          get creative in the kitchen, and start cooking.
          If you have any questions, feel free to reach out to us on our <a href="https://www.facebook.com/fearlessvegetarian" className="med_link" target="_blank" rel="noopener noreferrer">Facebook Page</a>.
          I wish I had someone to connect with or seek advice from when I started cooking.
          If you find yourself in the same situation, reach out to us. Let's support each other on this journey towards healthier and more delicious living.<br />
        </p>
        <p>
          <h2>Why Vegetarian Diets Are Better</h2>
          Vegetarian diets, tend to be high in fiber and low in fat and cholesterol. On average, <a href="https://pubmed.ncbi.nlm.nih.gov/11434797/" className="med_link" target="_blank" rel="noopener noreferrer">vegetarians live ten years longer than meat-eaters. </a>
          Over 80% of all cancers, cardiovascular diseases, and other degenerative illnesses can be kept in check with a plant-based diet.
          Red meat and processed meats are known to cause inflammation so for people with auto immune diseases vegetarian diet can prove to be beneficial.
        </p>
        <p>
          <h2>Helping The Environment</h2>
          Recent studies show that one third of all global emissions are created by the food industry and meat production is responsible for over 50 percent of this!
          Meat has a heavy carbon footprint.
        </p>
        <p>
          <h2>Excellent For Meal Prep</h2>
          Vegetarian especially Indian Food is excellent for meal prep. Time allows the flavours to blend and mature making the food tastes better the next
          day so you can make it in large quantity. The ingredients for most of the meals that I will be sharing on Fearless Vegetarian will be super cheap
          compared to eating out in restaurant. Also you can control what is added to your food especially the spice level.
        </p>
        <p>
          <h2>Fears of Vegetarian Diet Debunked:</h2>
          <h4>1. "I wont get enough Protein"</h4>
          <Image src="https://i.pinimg.com/564x/6e/6f/57/6e6f579d3481177c7dce8ca2509dcbd9.jpg" className="pro_veg" rounded responsive alt="Protein Source for Vegetarian" />
          <h4>2. "I wont get enough Iron"</h4>
          <Image src='https://i.pinimg.com/564x/b9/b3/6d/b9b36d8db2236f2f780c137c1bc0a22e.jpg' className="pro_veg" rounded responsive alt="Iron Source for Vegetarian" />
          <h4>3. "I wont get enough Calcium"</h4>
          <Image src="https://i.pinimg.com/564x/5c/c0/c1/5cc0c1be8d110aa24d87a68420f8de88.jpg" className="pro_veg" rounded responsive alt="Calcium Source for Vegetarian" />
          <h4>4. "I wont get enough Fiber"</h4>
          <Image src="https://i.pinimg.com/564x/a6/c4/69/a6c46996b5b84484889493827ffd608a.jpg" className="pro_veg" rounded responsive alt="Fiber Source for Vegetarian" />
        </p>
      </div>
    );
  }
}

export default Home;