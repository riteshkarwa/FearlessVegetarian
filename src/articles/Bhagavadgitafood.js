import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLeaf,
    faHeart,
    faBowlFood,
    faSeedling,
    faUtensils,
    faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

class BhagavadGitaFood extends Component {
    render() {
        return (
            <div className="recipe-page article-page">

                {/* SEO */}
                <Helmet>
                    <title>
                        What Does the Bhagavad Gita Say About Food? | Fearless Vegetarian
                    </title>

                    <meta
                        name="description"
                        content="Discover how the Bhagavad Gita classifies food as sattvic, rajasic, and tamasic. Learn about traditional Hindu perspectives on food, vegetarianism, freshness, balance, and mindful eating."
                    />

                    <meta
                        name="keywords"
                        content="Bhagavad Gita food, sattvic food, rajasic food, tamasic food, Bhagavad Gita vegetarianism, sattvic diet, Hindu food philosophy, vegetarian lifestyle"
                    />

                    <meta
                        property="og:title"
                        content="What Does the Bhagavad Gita Say About Food?"
                    />

                    <meta
                        property="og:description"
                        content="Explore the Bhagavad Gita's teachings about sattvic, rajasic, and tamasic foods and how these traditional ideas relate to vegetarian living."
                    />

                    <meta
                        property="og:type"
                        content="article"
                    />

                    <meta
                        property="og:url"
                        content="https://fearlessvegetarian.netlify.app/articles/bhagavadgitafood"
                    />

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/articles/bhagavadgitafood"
                    />
                </Helmet>

                {/* Article Header */}
                <section className="article-header">

                    <h1>
                        What Does the Bhagavad Gita Say About Food?
                    </h1>

                    <p className="article-intro">
                        Discover how the Bhagavad Gita classifies food as
                        sattvic, rajasic, and tamasic, and explore what these
                        traditional ideas can teach us about mindful vegetarian eating.
                    </p>

                </section>

                {/* Introduction */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faLeaf}
                            className="section-icon"
                        />
                        Food Is More Than Something We Eat
                    </h2>

                    <p>
                        Food is more than something we eat to satisfy hunger.
                    </p>

                    <p>
                        Across many cultures and traditions, food has been
                        connected with health, emotions, spirituality, and
                        the way we live our lives.
                    </p>

                    <p>
                        In the <strong>Bhagavad Gita</strong>, food is discussed
                        in the context of the three <strong>gunas</strong>:
                        <strong> sattva, rajas, and tamas</strong>.
                    </p>

                    <p>
                        These three qualities are used throughout the Gita to
                        describe different tendencies of nature and human behavior.
                        In Chapter 17, verses 7–10, the Gita also describes
                        food according to these qualities.
                    </p>

                    <p>
                        For someone interested in vegetarianism, this provides
                        an interesting perspective on not only
                        <strong> what we eat</strong>, but also the qualities
                        of the food we choose.
                    </p>

                    <p>
                        However, it is important to understand the original
                        teaching accurately. The Gita does not provide a modern
                        nutritional chart labeling every individual food as
                        "good" or "bad." Instead, it describes broad qualities
                        of food and their effects.
                    </p>

                </section>

                {/* Three Gunas */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faSeedling}
                            className="section-icon"
                        />
                        The Three Gunas
                    </h2>

                    <p>
                        The three gunas are:
                    </p>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="bullet-icon"
                            />
                            <strong>Sattva</strong> — clarity, harmony,
                            balance, and purity
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="bullet-icon"
                            />
                            <strong>Rajas</strong> — activity, stimulation,
                            passion, and restlessness
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="bullet-icon"
                            />
                            <strong>Tamas</strong> — heaviness, inertia,
                            and dullness
                        </li>

                    </ul>

                    <p>
                        According to the Gita, these qualities influence many
                        aspects of life, including our thoughts, actions,
                        habits, and preferences.
                    </p>

                    <p>
                        Food is one of them.
                    </p>

                    <blockquote className="article-quote">
                        What kind of effect does this food have on the
                        body and mind?
                    </blockquote>

                </section>

                {/* Sattvic */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faLeaf}
                            className="section-icon"
                        />
                        Sattvic Food — Fresh, Nourishing, and Balanced
                    </h2>

                    <p>
                        In <strong>Bhagavad Gita 17.8</strong>, foods associated
                        with sattva are described as those that promote life,
                        vitality, strength, health, happiness, and satisfaction.
                    </p>

                    <p>
                        The verse describes food as:
                    </p>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Life-promoting
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Nourishing
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Fresh
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Pleasant
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Satisfying
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Beneficial to health
                        </li>

                    </ul>

                    <p>
                        This idea is often referred to as a
                        <strong> sattvic diet</strong>.
                    </p>

                    <h3>
                        What Are Examples of Sattvic Foods?
                    </h3>

                    <p>
                        Traditional interpretations commonly associate
                        sattvic eating with fresh, wholesome foods such as:
                    </p>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Fresh fruits
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Fresh vegetables
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Whole grains
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Lentils and beans
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Nuts and seeds
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Milk and fresh dairy products
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Freshly prepared meals
                        </li>

                    </ul>

                    <p>
                        A simple meal of dal, rice, vegetables, and fresh
                        yogurt, for example, can fit naturally into a
                        traditional sattvic approach.
                    </p>

                    <p>
                        The emphasis is not necessarily on making food
                        complicated. In fact, the opposite can be true.
                    </p>

                    <p>
                        Fresh ingredients, simple preparation, moderation,
                        and balance are central ideas.
                    </p>

                </section>

                {/* Rajasic */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faUtensils}
                            className="section-icon"
                        />
                        Rajasic Food — Stimulating and Intense
                    </h2>

                    <p>
                        In <strong>Bhagavad Gita 17.9</strong>, foods associated
                        with rajas are described as excessively:
                    </p>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Bitter
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Sour
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Salty
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Hot
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Pungent
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Dry
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Burning
                        </li>

                    </ul>

                    <p>
                        The Gita associates these foods with qualities such
                        as pain, distress, and disease.
                    </p>

                    <p>
                        It's important not to interpret this as saying that
                        <strong> all spicy, sour, or salty food is unhealthy.</strong>
                    </p>

                    <p>
                        Indian cuisine, for example, uses chilies, spices,
                        sour ingredients, and salt extensively.
                    </p>

                    <p>
                        The important distinction is <strong>excess</strong>.
                    </p>

                    <p>
                        A mildly spiced vegetable curry isn't necessarily
                        the same thing as a meal designed to be overwhelmingly
                        hot, salty, or intensely stimulating.
                    </p>

                </section>

                {/* Tamasic */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faBowlFood}
                            className="section-icon"
                        />
                        Tamasic Food — Stale, Spoiled, and Impure
                    </h2>

                    <p>
                        In <strong>Bhagavad Gita 17.10</strong>, foods associated
                        with tamas are described as food that is:
                    </p>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faBowlFood}
                                className="bullet-icon"
                            />
                            Stale
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faBowlFood}
                                className="bullet-icon"
                            />
                            Tasteless
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faBowlFood}
                                className="bullet-icon"
                            />
                            Putrid
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faBowlFood}
                                className="bullet-icon"
                            />
                            Rotten
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faBowlFood}
                                className="bullet-icon"
                            />
                            Leftover
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faBowlFood}
                                className="bullet-icon"
                            />
                            Impure
                        </li>

                    </ul>

                    <p>
                        The emphasis here is on food that has lost its freshness
                        or is considered spoiled, decomposed, or otherwise
                        unsuitable.
                    </p>

                </section>

                {/* Is Tamasic Non-Vegetarian */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="section-icon"
                        />
                        Does Tamasic Mean Non-Vegetarian?
                    </h2>

                    <p>
                        This is one area where it is important to avoid
                        oversimplifying the Bhagavad Gita.
                    </p>

                    <p>
                        You will often see modern explanations claiming:
                    </p>

                    <blockquote className="article-quote">
                        Vegetarian = sattvic
                        <br />
                        Meat = tamasic
                    </blockquote>

                    <p>
                        While this idea exists within many later Hindu and
                        yogic dietary traditions, the food classification in
                        <strong> Bhagavad Gita 17.8–10</strong> does not provide
                        a simple modern food list dividing every food into
                        vegetarian, non-vegetarian, sattvic, rajasic, or tamasic.
                    </p>

                    <p>
                        The verses primarily describe qualities such as
                        freshness, nourishment, intensity, and spoilage.
                    </p>

                    <p>
                        Therefore, it is more accurate to say:
                    </p>

                    <blockquote className="article-quote">
                        The Gita describes food according to its qualities
                        and effects rather than giving us a comprehensive
                        modern food classification chart.
                    </blockquote>

                </section>

                {/* Meat Fish Eggs */}
                <section>

                    <h2>
                        What About Eggs, Meat, and Fish?
                    </h2>

                    <p>
                        The Bhagavad Gita does not specifically say in these
                        verses, "Do not eat meat."
                    </p>

                    <p>
                        Instead, the food discussion focuses on the
                        characteristics of food.
                    </p>

                    <p>
                        Later Hindu traditions, particularly various yogic
                        and Ayurvedic traditions, developed more detailed ideas
                        about which foods support a sattvic lifestyle.
                    </p>

                    <p>
                        Many traditional sattvic dietary systems emphasize
                        vegetarian foods and avoid meat, fish, and eggs.
                    </p>

                    <p>
                        This is one reason vegetarianism has become closely
                        associated with spiritual practice in many Hindu traditions.
                    </p>

                    <p>
                        But it is useful to distinguish
                        <strong> the Gita's direct teaching from later
                            dietary interpretations.</strong>
                    </p>

                </section>

                {/* Dairy */}
                <section>

                    <h2>
                        What About Dairy?
                    </h2>

                    <p>
                        Dairy is another interesting example.
                    </p>

                    <p>
                        Traditional sattvic diets often include foods such
                        as milk and fresh dairy products.
                    </p>

                    <p>
                        For many people following a lacto-vegetarian tradition,
                        foods such as:
                    </p>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Milk
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Yogurt
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Ghee
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Paneer
                        </li>

                    </ul>

                    <p>
                        can be part of their diet.
                    </p>

                    <p>
                        At the same time, modern discussions about dairy also
                        consider animal welfare, environmental impact, allergies,
                        lactose intolerance, and individual health needs.
                    </p>

                    <p>
                        Therefore, being vegetarian doesn't require everyone
                        to consume dairy.
                    </p>

                </section>

                {/* Leftovers */}
                <section>

                    <h2>
                        What About Leftovers?
                    </h2>

                    <p>
                        The Gita's description of tamasic food includes food
                        that is stale or has been left for too long.
                    </p>

                    <p>
                        This can sometimes lead to the modern statement:
                    </p>

                    <blockquote className="article-quote">
                        "The Gita says leftovers are tamasic."
                    </blockquote>

                    <p>
                        That's too simplistic.
                    </p>

                    <p>
                        The traditional verse refers to food that is stale,
                        degraded, tasteless, spoiled, or no longer fresh.
                    </p>

                    <p>
                        Modern food preservation is very different from the
                        food-storage practices of ancient India.
                    </p>

                    <p>
                        Refrigerating a properly stored meal and eating it
                        the following day isn't necessarily equivalent to
                        eating spoiled or decomposing food.
                    </p>

                    <p>
                        Food safety still matters, of course.
                    </p>

                    <p>
                        The broader traditional principle is to value
                        <strong> freshness and proper preparation.</strong>
                    </p>

                </section>

                {/* Mindful Eating */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="section-icon"
                        />
                        What Does the Gita Teach Us About Eating?
                    </h2>

                    <p>
                        Perhaps the most interesting part of this teaching
                        isn't the individual food categories.
                    </p>

                    <p>
                        It's the idea of <strong>mindful eating.</strong>
                    </p>

                    <p>
                        Instead of asking only:
                    </p>

                    <blockquote className="article-quote">
                        "How many calories are in this?"
                    </blockquote>

                    <p>
                        we can also ask:
                    </p>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="bullet-icon"
                            />
                            Is this food nourishing?
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="bullet-icon"
                            />
                            Is it fresh?
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="bullet-icon"
                            />
                            Does it leave me feeling energized or sluggish?
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="bullet-icon"
                            />
                            Am I eating because I'm hungry, or simply
                            because I'm craving something?
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="bullet-icon"
                            />
                            Am I eating with balance and moderation?
                        </li>

                    </ul>

                    <p>
                        These questions can complement modern nutrition
                        without replacing it.
                    </p>

                </section>

                {/* Sattvic Does Not Equal Healthy */}
                <section>

                    <h2>
                        Sattvic Doesn't Automatically Mean "Healthy"
                    </h2>

                    <p>
                        This is an important distinction.
                    </p>

                    <p>
                        The traditional concept of sattvic food is spiritual
                        and philosophical. It should not automatically be
                        treated as a scientific nutritional classification.
                    </p>

                    <p>
                        Modern nutrition considers things such as:
                    </p>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="bullet-icon"
                            />
                            Protein
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="bullet-icon"
                            />
                            Fiber
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="bullet-icon"
                            />
                            Vitamins
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="bullet-icon"
                            />
                            Minerals
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="bullet-icon"
                            />
                            Essential fatty acids
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="bullet-icon"
                            />
                            Calories
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="bullet-icon"
                            />
                            Added sugar
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="bullet-icon"
                            />
                            Sodium
                        </li>

                    </ul>

                    <p>
                        The healthiest diet for an individual depends on
                        many factors.
                    </p>

                    <p>
                        We can appreciate the traditional principles of
                        <strong> freshness, balance, moderation, and nourishment</strong>
                        while also using modern nutritional knowledge.
                    </p>

                </section>

                {/* Vegetarian Lifestyle */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faLeaf}
                            className="section-icon"
                        />
                        How This Fits Into a Vegetarian Lifestyle
                    </h2>

                    <p>
                        For a vegetarian, the sattvic idea can provide an
                        interesting framework for building meals.
                    </p>

                    <p>
                        Imagine a simple plate:
                    </p>

                    <blockquote className="article-quote">
                        Dal + brown rice + seasonal vegetables +
                        fresh yogurt + fruit
                    </blockquote>

                    <p>
                        You have:
                    </p>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Protein from lentils and yogurt
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Carbohydrates from rice
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Fiber from lentils and vegetables
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Vitamins and minerals from vegetables and fruit
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Healthy fats depending on preparation
                        </li>

                    </ul>

                    <p>
                        You don't need complicated ingredients to create
                        a satisfying vegetarian meal.
                    </p>

                    <p>
                        Some of the most nourishing meals are also the simplest.
                    </p>

                </section>

                {/* Vegetarian Food and Flavor */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faBowlFood}
                            className="section-icon"
                        />
                        Vegetarian Food Can Still Be Delicious
                    </h2>

                    <p>
                        Following a vegetarian lifestyle doesn't mean food
                        has to be bland.
                    </p>

                    <p>
                        Indian cooking is a wonderful example.
                    </p>

                    <p>
                        Vegetables, lentils, beans, grains, herbs, and spices
                        can create incredibly complex flavors.
                    </p>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Dal Makhani
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Chana Masala
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Rajma
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Aloo Gobi
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Vegetable Biryani
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Pav Bhaji
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Khichdi
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Palak Paneer
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Dosa and Sambar
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="bullet-icon"
                            />
                            Vegetable Hakka Noodles
                        </li>

                    </ul>

                    <blockquote className="article-quote">
                        Plants aren't boring. We just have to learn how
                        to cook them well.
                    </blockquote>

                </section>

                {/* Comparison Table */}
                <section>

                    <h2>
                        The Three Categories at a Glance
                    </h2>

                    <div className="table-responsive">

                        <Table
                            bordered
                            striped
                            hover
                            className="article-table"
                        >
                            <thead>
                                <tr>
                                    <th>Guna</th>
                                    <th>Traditional Food Characteristics</th>
                                    <th>General Idea</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>
                                        <strong>Sattvic</strong>
                                    </td>

                                    <td>
                                        Fresh, nourishing, pleasant,
                                        wholesome
                                    </td>

                                    <td>
                                        Balance and vitality
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Rajasic</strong>
                                    </td>

                                    <td>
                                        Excessively hot, spicy, salty,
                                        sour, pungent
                                    </td>

                                    <td>
                                        Stimulation and restlessness
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Tamasic</strong>
                                    </td>

                                    <td>
                                        Stale, spoiled, rotten,
                                        decomposed, impure
                                    </td>

                                    <td>
                                        Heaviness and dullness
                                    </td>
                                </tr>

                            </tbody>
                        </Table>

                    </div>

                    <p>
                        These descriptions come from the traditional framework
                        of the Bhagavad Gita and shouldn't be confused with
                        modern nutritional categories.
                    </p>

                </section>

                {/* Modern Vegetarian Perspective */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faSeedling}
                            className="section-icon"
                        />
                        A Modern Vegetarian Perspective
                    </h2>

                    <p>
                        We can appreciate the wisdom of traditional food
                        philosophies while also recognizing what modern
                        nutrition has taught us.
                    </p>

                    <p>
                        A balanced vegetarian lifestyle can include a wide
                        variety of:
                    </p>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Vegetables
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Fruits
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Beans
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Lentils
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Whole grains
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Nuts and seeds
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Soy foods
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Dairy or dairy alternatives
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                className="bullet-icon"
                            />
                            Herbs and spices
                        </li>

                    </ul>

                    <p>
                        And there's room for enjoyment too.
                    </p>

                    <p>
                        You don't have to eat perfectly every day.
                    </p>

                    <p>
                        A vegetarian lifestyle can include an occasional
                        pizza, burger, dessert, or other treat.
                    </p>

                    <p>
                        The goal is the <strong>overall pattern</strong>,
                        not perfection at every meal.
                    </p>

                </section>

                {/* Food and Life */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="section-icon"
                        />
                        Food as Part of a Bigger Life
                    </h2>

                    <p>
                        Perhaps the most valuable lesson we can take from
                        the Gita is that food is part of something larger.
                    </p>

                    <p>
                        How we eat can reflect our values.
                    </p>

                    <p>
                        It can be an opportunity to practice:
                    </p>

                    <ul className="custom-list">

                        <li>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="bullet-icon"
                            />
                            Compassion
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="bullet-icon"
                            />
                            Moderation
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="bullet-icon"
                            />
                            Gratitude
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="bullet-icon"
                            />
                            Awareness
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="bullet-icon"
                            />
                            Balance
                        </li>

                        <li>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="bullet-icon"
                            />
                            Self-discipline
                        </li>

                    </ul>

                    <p>
                        Food nourishes the body, but our relationship with
                        food can also influence the way we experience
                        everyday life.
                    </p>

                    <p>
                        For someone following a vegetarian lifestyle, that
                        can make every meal an opportunity to connect health,
                        compassion, culture, and enjoyment.
                    </p>

                </section>

                {/* Conclusion */}
                <section>

                    <h2>
                        <FontAwesomeIcon
                            icon={faLeaf}
                            className="section-icon"
                        />
                        Final Thoughts
                    </h2>

                    <p>
                        The Bhagavad Gita's discussion of food provides a
                        fascinating perspective on eating.
                    </p>

                    <p>
                        <strong>Sattvic foods</strong> are described as fresh,
                        nourishing, and pleasant.
                    </p>

                    <p>
                        <strong>Rajasic foods</strong> are characterized by
                        excessive stimulation through qualities such as heat,
                        sourness, saltiness, and pungency.
                    </p>

                    <p>
                        <strong>Tamasic foods</strong> are associated with
                        staleness, spoilage, and loss of freshness.
                    </p>

                    <p>
                        The teaching isn't a modern nutrition guide, and we
                        shouldn't force ancient categories into modern
                        dietary science.
                    </p>

                    <p>
                        But there is still something valuable in the
                        underlying message:
                    </p>

                    <blockquote className="article-quote">
                        Pay attention to what you eat, how it is prepared,
                        how it affects you, and the intentions behind your choices.
                    </blockquote>

                    <p>
                        At <strong>Fearless Vegetarian</strong>, we believe
                        vegetarian food can be compassionate, nourishing,
                        flavorful, and joyful.
                    </p>

                    <p>
                        You don't have to choose between tradition and
                        modern nutrition.
                    </p>

                    <p>
                        You can learn from both.
                    </p>

                    <p className="closing-message">
                        <strong>
                            Eat mindfully. Cook fearlessly. And enjoy every bite.
                        </strong>
                    </p>

                </section>

                {/* You May Also Like */}
                <section className="related-recipes">

                    <h2>You May Also Like</h2>

                    <p className="related-recipes-intro">
                        Explore these delicious vegetarian recipes from
                        Fearless Vegetarian:
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
                                        alt="Creamy Dal Makhani made with black lentils and kidney beans"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Dal Makhani</h3>

                                    <p>
                                        A rich and creamy North Indian lentil
                                        dish made with black lentils, kidney
                                        beans, and aromatic spices.
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
                                        alt="Aloo Gobi made with potatoes, cauliflower, and Indian spices"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Aloo Gobi</h3>

                                    <p>
                                        A flavorful vegetarian curry made
                                        with potatoes, cauliflower, and
                                        aromatic Indian spices.
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
                                        A popular Mumbai street-food favorite
                                        made with spiced mashed vegetables
                                        and toasted pav.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>

                                </Link>

                            </article>
                        </Col>

                        {/* Khichdi */}
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
                                        A nutritious and comforting one-pot
                                        vegetarian meal made with quinoa,
                                        moong dal, and aromatic spices.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>

                                </Link>

                            </article>
                        </Col>

                        {/* Chickpea Shakshuka */}
                        <Col xs={12} sm={6} md={4}>
                            <article className="related-recipe-card">

                                <Link
                                    to="/shakshuka"
                                    className="related-recipe-link"
                                >

                                    <Image
                                        src="/shakshuka.jpg"
                                        alt="Vegetarian Chickpea Shakshuka with chickpeas simmered in a flavorful tomato sauce"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Chickpea Shakshuka</h3>

                                    <p>
                                        A hearty vegetarian shakshuka made with protein-rich
                                        chickpeas simmered in a flavorful tomato and pepper sauce.
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
                                        alt="Vegetable Hakka Noodles with colorful vegetables"
                                        fluid
                                        rounded
                                        className="related-recipe-image"
                                    />

                                    <h3>Vegetable Hakka Noodles</h3>

                                    <p>
                                        Flavorful Indo-Chinese noodles tossed
                                        with fresh vegetables and savory sauces.
                                    </p>

                                    <span className="related-recipe-button">
                                        View Recipe
                                    </span>

                                </Link>

                            </article>
                        </Col>

                    </Row>

                </section>

                {/* Thank You */}
                <section className="article-footer">

                    <h2>
                        Thank You for Visiting Fearless Vegetarian
                    </h2>

                    <p>
                        Whether you're already vegetarian, exploring the
                        spiritual traditions behind vegetarian food, or
                        simply trying to add more plant-based meals to your
                        life, you're welcome here.
                    </p>

                    <p>
                        Explore the recipes, learn something new, and discover
                        how delicious vegetarian food can be.
                    </p>

                    <p className="closing-message">
                        <strong>
                            Happy cooking, and welcome to Fearless Vegetarian!
                        </strong>
                    </p>

                </section>

            </div>
        );
    }
}

export default BhagavadGitaFood;