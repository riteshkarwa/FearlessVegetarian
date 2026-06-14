import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

class CookingAtHome extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Why Cooking at Home Is Healthier, Cheaper, and More Rewarding | Fearless Vegetarian</title>
                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/cookingathome"
                    />
                    <meta
                        name="description"
                        content="Discover the benefits of cooking at home. Save money, eat healthier, control ingredients, and create meaningful family traditions with homemade meals."
                    />
                    <meta
                        name="keywords"
                        content="benefits of cooking at home, homemade meals, healthy eating, save money cooking, vegetarian cooking, family meals, meal preparation, cooking from scratch, Fearless Vegetarian"
                    />
                    <meta
                        property="og:title"
                        content="Benefits of Cooking at Home | Healthy Homemade Meals"
                    />
                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/cookingathome"
                    />
                    <meta
                        property="og:image"
                        content="https://fearlessvegetarian.netlify.app/cookingathome.jpg"
                    />
                    <meta
                        property="og:description"
                        content="Learn why cooking at home is one of the best investments in your health, finances, and overall well-being."
                    />
                </Helmet>

                <h1>
                    Why Cooking at Home is One of the Best Investments You Can Make
                </h1>


                <p>
                    In today's fast-paced world, it can be tempting to rely on takeout,
                    fast food, or packaged meals. While convenient, these options often
                    contain excess sodium, sugar, unhealthy fats, and preservatives.
                    Cooking at home gives you complete control over the ingredients you
                    consume and allows you to create meals that support your health and
                    lifestyle goals.
                </p>

                <h2>1. Healthier Ingredients</h2>

                <p>
                    When you cook at home, you decide exactly what goes into your food.
                    You can use fresh vegetables, whole grains, legumes, healthy fats,
                    and quality protein sources while avoiding excessive additives and
                    processed ingredients.
                </p>

                <h2>2. Save Money</h2>

                <p>
                    Restaurant meals and food delivery costs add up quickly. Preparing
                    meals at home is often significantly less expensive and can provide
                    multiple servings for the price of a single restaurant meal.
                </p>

                <h2>3. Better Portion Control</h2>

                <p>
                    Many restaurant portions are much larger than what our bodies need.
                    Home cooking allows you to serve appropriate portions and reduce
                    unnecessary calorie consumption.
                </p>

                <h2>4. More Fruits and Vegetables</h2>

                <p>
                    Home cooks naturally tend to include more vegetables and plant-based
                    ingredients in their meals. This increases fiber, vitamins,
                    minerals, and antioxidants that support overall wellness.
                </p>

                <h2>5. Strengthen Family Connections</h2>

                <p>
                    Cooking and sharing meals together creates lasting memories and
                    encourages meaningful conversations. Family meals have been linked to
                    better dietary habits and stronger relationships.
                </p>

                <h2>6. Learn Valuable Life Skills</h2>

                <p>
                    Cooking is a lifelong skill that builds confidence and creativity.
                    The more you cook, the easier it becomes to prepare healthy and
                    delicious meals from simple ingredients.
                </p>

                <h2>7. Reduce Food Waste</h2>

                <p>
                    Planning meals and cooking at home helps you make better use of
                    ingredients already in your kitchen, reducing waste and saving money.
                </p>

                <h2>Simple Ways to Start Cooking More at Home</h2>

                <ul>
                    <li>Plan meals for the week.</li>
                    <li>Keep pantry staples on hand.</li>
                    <li>Cook larger batches and save leftovers.</li>
                    <li>Try one new recipe each week.</li>
                    <li>Focus on simple meals with fresh ingredients.</li>
                </ul>

                <h2>Explore Our Favorite Homemade Recipes</h2>

                <ul>
                    <li>
                        <Link to="/aloogobi">Aloo Gobi (Potato Cauliflower Curry)</Link>
                    </li>
                    <li>
                        <Link to="/dalmakhani">Authentic Dal Makhani</Link>
                    </li>
                    <li>
                        <Link to="/blackeyedbeans">Black Eyed Peas Curry</Link>
                    </li>
                    <li>
                        <Link to="/quinoamoongdal">Quinoa Moong Dal Khichdi</Link>
                    </li>
                    <li>
                        <Link to="/spinachbesan">Spinach Gram Flour Curry</Link>
                    </li>
                </ul>

                <h2>Why Home Cooking Matters</h2>

                <p>
                    Home cooking is more than preparing food—it's an investment in your long-term
                    health, finances, and happiness. Even cooking just a few meals each week can
                    help you build healthier habits, discover new flavors, and spend more quality
                    time with loved ones.
                </p>

                <p>
                    Start with simple recipes, enjoy the process, and remember that every great
                    cook began with a single meal.
                </p>
            </div>
        );
    }
}

export default CookingAtHome;