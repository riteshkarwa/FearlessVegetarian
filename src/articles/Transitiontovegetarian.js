import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLeaf,
    faCarrot,
    faHeart,
    faBowlFood,
    faSeedling,
    faCheckCircle,
    faUtensils
} from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class TransitionToVegetarian extends Component {
    render() {
        return (
            <div className="recipe-page vegetarian-lifestyle-page">

                <Helmet>
                    <title>
                        Why I’m Vegetarian and How to Make the Switch Easy | Fearless Vegetarian
                    </title>

                    <meta
                        name="description"
                        content="Discover why vegetarianism can be a compassionate, healthy, and delicious lifestyle. Learn practical tips for becoming vegetarian, getting enough protein, enjoying vegetarian food, and making vegan substitutions."
                    />

                    <meta
                        name="keywords"
                        content="why become vegetarian, vegetarian lifestyle, benefits of vegetarian diet, how to become vegetarian, vegetarian food, healthy vegetarian diet, vegan substitutions, Fearless Vegetarian"
                    />

                    <meta
                        property="og:title"
                        content="Why I’m Vegetarian and How to Make the Switch Easy"
                    />

                    <meta
                        property="og:description"
                        content="Learn how to make the transition to vegetarian living easier, healthier, and more enjoyable with practical tips and delicious food ideas."
                    />

                    <meta
                        property="og:type"
                        content="article"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/transitiontovegetarian"
                    />

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/transitiontovegetarian"
                    />
                </Helmet>

                {/* Page Header */}
                <section className="recipe-header">
                    <h1>Why I’m Vegetarian — And How to Make the Switch Easy</h1>

                    <p className="recipe-intro">
                        Vegetarianism doesn't have to mean giving up delicious food.
                        It can be a compassionate, flavorful, healthy, and enjoyable
                        way of eating.
                    </p>
                </section>

                {/* Introduction */}
                <section>
                    <h2>
                        <FontAwesomeIcon
                            icon={faLeaf}
                            className="section-icon"
                        />
                        Why I’m Vegetarian
                    </h2>

                    <p>
                        I’ve been vegetarian all my life, and I genuinely love it.
                    </p>

                    <p>
                        I don’t see vegetarianism as a restrictive way of eating.
                        For me, it’s a way to enjoy delicious food while making
                        choices that align with compassion, health, and a more
                        mindful way of living.
                    </p>

                    <p>
                        At <strong>Fearless Vegetarian</strong>, I believe vegetarian
                        food should be flavorful, satisfying, accessible, and enjoyable.
                        You shouldn't have to give up the foods you love to discover
                        the benefits of eating more plants.
                    </p>

                    <p>
                        Let me start by sharing why vegetarianism matters to me,
                        and then I’ll share a few simple tips for anyone who is
                        thinking about making the switch.
                    </p>
                </section>

                {/* Compassion */}
                <section>
                    <h2>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="section-icon heart-icon"
                        />
                        Vegetarianism and Compassion
                    </h2>

                    <p>
                        For me, vegetarianism begins with <strong>compassion</strong>.
                    </p>

                    <p>
                        Animals are living beings, and I believe they deserve to
                        be treated with kindness and respect. Growing up, many of
                        us learn to think of meat as simply another item on a plate.
                        We don't always stop to think about where it came from or
                        the animal behind it.
                    </p>

                    <p>
                        Becoming vegetarian encouraged me to think more deeply
                        about that connection.
                    </p>

                    <p>
                        It made me ask a simple question:
                    </p>

                    <blockquote className="vegetarian-quote">
                        If I can enjoy a delicious and nutritious meal without
                        requiring an animal to be killed for it, why wouldn't I
                        choose that option?
                    </blockquote>

                    <p>
                        That question eventually became an important part of
                        my food choices.
                    </p>

                    <p>
                        But compassion isn't the only reason to consider
                        vegetarianism.
                    </p>

                    <p>
                        A diet centered around vegetables, fruits, beans, lentils,
                        whole grains, nuts, seeds, and other plant foods can provide
                        a wide variety of nutrients while giving you an incredible
                        range of flavors and cuisines to explore.
                    </p>

                    <p>
                        There are also environmental benefits to eating more
                        plant-based foods. Choosing plants more often can reduce
                        the environmental impact associated with producing
                        animal foods.
                    </p>
                </section>

                {/* Delicious Food */}
                <section>
                    <h2>
                        <FontAwesomeIcon
                            icon={faBowlFood}
                            className="section-icon"
                        />
                        Vegetarian Food Doesn't Have to Feel Like a Sacrifice
                    </h2>

                    <p>
                        One of the biggest misconceptions about vegetarianism
                        is that you have to give up everything you enjoy.
                    </p>

                    <p>
                        <strong>You don't.</strong>
                    </p>

                    <p>
                        If you love pizza, you can make vegetarian pizza.
                    </p>

                    <p>
                        If you love burgers, you can make a delicious veggie burger.
                    </p>

                    <p>
                        If you enjoy Indian food, you have an enormous variety
                        of vegetarian dishes to explore.
                    </p>

                    <p>
                        If you love Mexican food, pasta, Thai food, Chinese food,
                        Mediterranean food, or American comfort food, there are
                        countless vegetarian possibilities.
                    </p>

                    <h3>Some Favorite Vegetarian Foods</h3>

                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            Dal and rice
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            Vegetable biryani
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            Aloo gobi
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            Pav bhaji
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            Chana masala
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            Vegetable noodles
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            Stuffed parathas
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            Vegetable curries
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            Khichdi
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            Dosa and sambar
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            Fresh salads
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            Roasted vegetables
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            Homemade vegetarian soups
                        </li>
                    </ul>

                    <p>
                        And occasionally, there's nothing wrong with enjoying
                        vegetarian pizza, burgers, fries, cookies, cakes, or
                        other treats.
                    </p>

                    <p>
                        <strong>
                            Vegetarian doesn't automatically mean healthy,
                            and healthy doesn't have to mean boring.
                        </strong>
                    </p>
                </section>

                {/* Balanced Diet */}
                <section>
                    <h2>
                        <FontAwesomeIcon
                            icon={faSeedling}
                            className="section-icon"
                        />
                        A Balanced Vegetarian Lifestyle
                    </h2>

                    <p>
                        A healthy vegetarian diet doesn't have to be complicated.
                    </p>

                    <p>
                        I focus on eating a wide variety of foods rather than
                        obsessing over individual nutrients.
                    </p>

                    <h3>Foods to Include in a Vegetarian Diet</h3>

                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Vegetables and leafy greens
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Fruits
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Beans and lentils
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Whole grains
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Nuts and seeds
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Tofu and other plant proteins
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Yogurt and other dairy products
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Milk and cheese
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Herbs and spices
                        </li>
                    </ul>

                    <p>
                        I also believe that a healthy lifestyle involves more
                        than food. Regular physical activity, adequate sleep,
                        hydration, and taking care of your overall well-being
                        are just as important.
                    </p>

                    <p>
                        If you choose a vegetarian diet, pay attention to nutrients
                        that can sometimes require extra consideration, such as
                        vitamin B12, vitamin D, iron, calcium, iodine, omega-3
                        fatty acids, and protein.
                    </p>

                    <p>
                        Individual nutritional needs can vary. If you're unsure
                        whether you're meeting your nutritional needs, consider
                        speaking with a qualified healthcare professional or
                        registered dietitian.
                    </p>
                </section>

                {/* Easy Way */}
                <section>
                    <h2>
                        <FontAwesomeIcon
                            icon={faUtensils}
                            className="section-icon"
                        />
                        The Easy Way to Become Vegetarian
                    </h2>

                    <p>
                        You don't have to wake up tomorrow and completely change
                        everything you eat.
                    </p>

                    <p>
                        In fact, for many people, making the transition gradually
                        can make it much easier.
                    </p>

                    {/* Step 1 */}
                    <h3>1. Start Gradually</h3>

                    <p>
                        Begin with one meal or one type of food.
                    </p>

                    <p>
                        For example, you could start with:
                    </p>

                    <p>
                        <strong>Meatless Mondays.</strong>
                    </p>

                    <p>
                        Or decide that breakfast will always be vegetarian.
                        Once that feels normal, add another vegetarian meal.
                        Then another.
                    </p>

                    <p>
                        Eventually, eating vegetarian becomes your normal routine
                        rather than something that requires constant effort.
                    </p>

                    {/* Step 2 */}
                    <h3>2. Start With Foods You Already Love</h3>

                    <p>
                        You don't need to completely reinvent your palate.
                    </p>

                    <p>
                        Take foods you already enjoy and make vegetarian
                        versions of them.
                    </p>

                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            Love chili? Try a bean and vegetable chili.
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            Love pasta? Add vegetables, lentils, mushrooms,
                            or your favorite vegetarian sauce.
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            Love burgers? Try a homemade bean burger or
                            plant-based burger.
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            Love Indian food? Explore its incredible variety
                            of naturally vegetarian dishes.
                        </li>
                    </ul>

                    <p>
                        The easiest transition is often the one where
                        <strong> your favorite foods come with you.</strong>
                    </p>

                    {/* Step 3 */}
                    <h3>3. Learn a Few Reliable Recipes</h3>

                    <p>
                        You don't need 100 recipes.
                    </p>

                    <p>
                        Start with five or ten dishes that you genuinely enjoy
                        and know how to prepare.
                    </p>

                    <p>
                        Once you have a handful of reliable meals, vegetarian
                        cooking becomes much less intimidating.
                    </p>

                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            One lentil dish
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            One bean dish
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            One vegetable curry
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            One rice dish
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            One pasta dish
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            One soup
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            One breakfast recipe
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCarrot} />
                            One quick weeknight meal
                        </li>
                    </ul>

                    <p>
                        Then gradually expand your recipe collection.
                    </p>

                    <p>
                        This is one of the reasons I created
                        <strong> Fearless Vegetarian</strong> ; to make
                        vegetarian cooking easier for anyone who wants
                        delicious recipes without feeling overwhelmed.
                    </p>

                    {/* Step 4 */}
                    <h3>4. Don't Be Afraid of Vegetarian Substitutes</h3>

                    <p>
                        There are plenty of vegetarian meat alternatives
                        available today.
                    </p>

                    <p>
                        Some are highly processed, so I don't consider them
                        automatically "health foods." But they can be incredibly
                        useful.
                    </p>

                    <p>
                        A vegetarian burger, meatless sausage, plant-based
                        chicken, or other meat alternative can make transitioning
                        easier, especially when you're craving a familiar meal.
                    </p>

                    <p>
                        Think of these products as <strong>tools</strong>,
                        not requirements.
                    </p>

                    {/* Step 5 */}
                    <h3>5. Make Sure You're Getting Enough Protein</h3>

                    <p>
                        One of the most common questions people ask about
                        vegetarian diets is:
                    </p>

                    <blockquote className="vegetarian-quote">
                        "Where do you get your protein?"
                    </blockquote>

                    <p>
                        The answer is simple: there are many vegetarian
                        sources of protein.
                    </p>

                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Lentils
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Beans
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Chickpeas
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Tofu
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Tempeh
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Paneer
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Greek yogurt
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Milk
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Nuts and seeds
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Soy products
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Whole grains
                        </li>
                    </ul>

                    <p>
                        Try including a protein-rich food in your meals rather
                        than thinking about protein as something you have to
                        get from meat.
                    </p>
                </section>

                {/* Don't Waste Food */}
                <section>
                    <h2>
                        <FontAwesomeIcon
                            icon={faLeaf}
                            className="section-icon"
                        />
                        You Don't Have to Throw Everything Away
                    </h2>

                    <p>
                        If you're becoming vegetarian, you don't need to suddenly
                        throw away everything in your kitchen.
                    </p>

                    <p>
                        Use what you already have. Replace foods gradually as
                        you finish them.
                    </p>

                    <p>
                        This approach is easier on your wallet and avoids
                        unnecessary waste.
                    </p>

                    <p>
                        Making a compassionate change doesn't mean you have
                        to completely reinvent your life overnight.
                    </p>
                </section>

                {/* Don't Be Perfect */}
                <section>
                    <h2>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="section-icon heart-icon"
                        />
                        Don't Worry About Being Perfect
                    </h2>

                    <p>
                        This might be the most important piece of advice.
                    </p>

                    <p>
                        Your journey doesn't have to be perfect.
                    </p>

                    <p>
                        If you accidentally eat something containing meat,
                        don't decide that you've failed.
                    </p>

                    <p>
                        If you go to a restaurant and the vegetarian options
                        are limited, do the best you can.
                    </p>

                    <p>
                        If you have a craving and make a choice you weren't
                        planning to make, simply continue with your next meal.
                    </p>

                    <blockquote className="vegetarian-quote">
                        One meal doesn't define your entire lifestyle.
                    </blockquote>

                    <p>
                        What matters is the direction you're moving in.
                    </p>
                </section>

                {/* Flavor */}
                <section>
                    <h2>
                        <FontAwesomeIcon
                            icon={faBowlFood}
                            className="section-icon"
                        />
                        Vegetarian Doesn't Mean Giving Up Flavor
                    </h2>

                    <p>
                        Vegetarian cooking is an opportunity to explore flavor.
                    </p>

                    <p>
                        Spices, herbs, aromatics, sauces, chilies, roasted
                        vegetables, fermented foods, and different cooking
                        techniques can completely transform simple ingredients.
                    </p>

                    <p>
                        Indian cuisine alone demonstrates how exciting
                        vegetarian food can be.
                    </p>

                    <p>
                        You can take humble ingredients such as potatoes,
                        cauliflower, chickpeas, spinach, tomatoes, lentils,
                        or eggplant and turn them into something completely
                        different with the right combination of spices and
                        cooking techniques.
                    </p>

                    <blockquote className="vegetarian-quote">
                        Plants aren't boring. We just have to learn how
                        to cook them well.
                    </blockquote>
                </section>

                {/* Vegan Substitutions */}
                <section className="vegan-substitutions">
                    <h2>
                        <FontAwesomeIcon
                            icon={faSeedling}
                            className="section-icon"
                        />
                        Vegetarian Meals Can Be Vegan Too
                    </h2>

                    <p>
                        One of the wonderful things about vegetarian cooking
                        is that many recipes can easily be adapted to a
                        vegan lifestyle.
                    </p>

                    <p>
                        With a few simple substitutions, many vegetarian
                        recipes can become completely plant-based.
                    </p>

                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            Replace milk with almond, soy, oat, or other
                            plant-based milk.
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            Replace dairy yogurt with plant-based yogurt.
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            Replace paneer with tofu in many recipes.
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            Replace butter with plant-based butter or oil.
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            Replace dairy cheese with vegan cheese or
                            simply omit it when appropriate.
                        </li>
                    </ul>

                    <p>
                        Whether you're vegetarian, vegan, flexitarian, or
                        simply trying to eat more plants, many Fearless
                        Vegetarian recipes can be adapted to fit your
                        preferences.
                    </p>
                </section>

                {/* Kindness */}
                <section>
                    <h2>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="section-icon heart-icon"
                        />
                        Be Kind to Yourself and Others
                    </h2>

                    <p>
                        Choosing vegetarianism is a personal decision.
                    </p>

                    <p>
                        You may encounter people who don't understand your
                        choices. You may hear jokes. Someone might tell you
                        that they could "never give up meat."
                    </p>

                    <p>
                        That's okay.
                    </p>

                    <p>
                        You don't have to convince everyone.
                    </p>

                    <p>
                        I believe the best way to encourage others is to
                        <strong> model the lifestyle you enjoy.</strong>
                    </p>

                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            Eat delicious food.
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            Share recipes.
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            Invite people to dinner.
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            Show others that vegetarian food can be satisfying,
                            flavorful, affordable, and fun.
                        </li>
                    </ul>

                    <p>
                        And most importantly, don't judge someone simply because
                        they aren't where you are yet.
                    </p>

                    <p>
                        Everyone's journey is different.
                    </p>
                </section>

                {/* Conclusion */}
                <section>
                    <h2>
                        <FontAwesomeIcon
                            icon={faLeaf}
                            className="section-icon"
                        />
                        The Goal Is to Make Vegetarian Living Easy
                    </h2>

                    <p>
                        You don't need complicated meal plans.
                    </p>

                    <p>
                        You don't need an expensive pantry full of specialty
                        ingredients.
                    </p>

                    <p>
                        You don't need to become a professional chef.
                    </p>

                    <p>
                        And you definitely don't need to give up enjoying food.
                    </p>

                    <p>
                        Start small.
                    </p>

                    <p>
                        Learn a few recipes.
                    </p>

                    <p>
                        Keep your favorite foods.
                    </p>

                    <p>
                        Experiment with new ingredients.
                    </p>

                    <p>
                        Eat a variety of plant foods.
                    </p>

                    <p>
                        Pay attention to your nutrition.
                    </p>

                    <p>
                        And give yourself time to develop new habits.
                    </p>

                    <p>
                        Eventually, something interesting happens.
                    </p>

                    <p>
                        You stop thinking about what you're giving up.
                    </p>

                    <p>
                        You start thinking about <strong>everything you've gained.</strong>
                    </p>

                    <ul className="ingredient-list">
                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            More vegetables
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            More flavors
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            More recipes
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faLeaf} />
                            More creativity in the kitchen
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faHeart} />
                            The satisfaction of making food choices
                            that reflect your values
                        </li>
                    </ul>

                    <p>
                        Vegetarian living doesn't have to be restrictive.
                        It can be joyful, flavorful, compassionate, and
                        completely satisfying.
                    </p>

                    <p>
                        That's what <strong>Fearless Vegetarian</strong> is all about.
                    </p>

                    <p className="closing-message">
                        <strong>
                            Eat well. Explore fearlessly. And enjoy every bite.
                        </strong>
                    </p>
                </section>

                {/* You May Also Like */}
                <section className="related-recipes">
                    <h2>You May Also Like</h2>

                    <p className="related-recipes-intro">
                        Ready to start cooking? Try these delicious vegetarian recipes
                        from Fearless Vegetarian:
                    </p>

                    <Row className="g-4">

                        {/* Dal Makhani */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/dalmakhani"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/dalmakhani.jpg"
                                        alt="Creamy Dal Makhani made with black lentils and aromatic Indian spices"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Dal Makhani</h3>

                                    <p>
                                        A rich and creamy North Indian lentil dish made with
                                        black lentils, kidney beans, and aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Aloo Gobi */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/aloogobi"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/aloogobi.jpg"
                                        alt="Indian Aloo Gobi made with potatoes, cauliflower, and spices"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Aloo Gobi</h3>

                                    <p>
                                        A flavorful vegetarian curry made with potatoes,
                                        cauliflower, and aromatic Indian spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Pav Bhaji */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/pavbhaji"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/pavbhaji.jpg"
                                        alt="Mumbai-style vegetarian Pav Bhaji served with toasted pav"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Pav Bhaji</h3>

                                    <p>
                                        A popular Mumbai street-food favorite made with
                                        spiced mashed vegetables and buttery toasted pav.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Besan Curry (Chickpea Flour Curry) */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/besan"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/besan.jpg"
                                        alt="Vegetarian chickpea flour yogurt curry with Indian spices"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Besan Curry (Chickpea Flour Curry)</h3>

                                    <p>
                                        A flavorful vegetarian curry made with chickpea flour,
                                        yogurt, and aromatic Indian spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Vegetable Hakka Noodles */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/hakkanoodle"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/hakkanoodle.jpg"
                                        alt="Vegetarian Vegetable Hakka Noodles with colorful vegetables"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Vegetable Hakka Noodles</h3>

                                    <p>
                                        Flavorful Indo-Chinese noodles tossed with fresh
                                        vegetables and savory sauces.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                        {/* Quinoa Moong Dal Khichdi */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">
                                <Link
                                    to="/quinoamoongdal"
                                    className="related-recipe-link"
                                >
                                    <Image
                                        src="/quinoamoongdal.jpg"
                                        alt="Quinoa Moong Dal Khichdi with lentils and aromatic spices"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Quinoa Moong Dal Khichdi</h3>

                                    <p>
                                        A nutritious and comforting one-pot vegetarian meal
                                        made with quinoa, moong dal, and aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>
                                </Link>
                            </article>
                        </Col>

                    </Row>
                </section>

                {/* Final Message */}
                <section className="recipe-footer-message">
                    <h2>
                        Thank You for Visiting Fearless Vegetarian
                    </h2>

                    <p>
                        Whether you're already vegetarian or simply trying
                        to add more plant-based meals to your life, you're
                        welcome here.
                    </p>

                    <p>
                        Explore the recipes, try something new, and discover
                        just how delicious vegetarian food can be.
                    </p>

                    <p>
                        <strong>
                            Happy cooking, and welcome to Fearless Vegetarian!
                        </strong>
                    </p>
                </section>

            </div>
        );
    }
}

export default TransitionToVegetarian;