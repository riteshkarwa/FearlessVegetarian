import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faCarrot,
  faHeart,
  faBowlFood,
  faSeedling
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

class About extends Component {
  render() {
    return (
      <div className="about-page">

        {/* =========================
                    SEO
                ========================== */}
        <Helmet>

          <title>
            About Fearless Vegetarian | Easy Vegetarian Recipes & Healthy Living
          </title>

          <meta
            name="description"
            content="Learn about Fearless Vegetarian and discover easy, flavorful vegetarian recipes, Indian cooking, healthy plant-based meals, and practical inspiration for everyday vegetarian living."
          />

          <meta
            name="keywords"
            content="Fearless Vegetarian, vegetarian recipes, easy vegetarian recipes, Indian vegetarian recipes, healthy vegetarian meals, vegetarian cooking, plant-based meals"
          />

          <meta
            property="og:title"
            content="About Fearless Vegetarian | Vegetarian Recipes & Healthy Living"
          />

          <meta
            property="og:description"
            content="Discover the story behind Fearless Vegetarian and explore flavorful vegetarian recipes, healthy meals, Indian cooking, and inspiration for everyday vegetarian living."
          />

          <meta
            property="og:type"
            content="website"
          />

          <meta
            property="og:url"
            content="https://fearlessvegetarian.netlify.app/about"
          />

          <link
            rel="canonical"
            href="https://fearlessvegetarian.netlify.app/about"
          />

        </Helmet>


        {/* =========================
                    PAGE INTRODUCTION
                ========================== */}
        <section className="about-intro">

          <h1>
            About Fearless Vegetarian
          </h1>

          <p className="about-intro-text">
            Easy Vegetarian Recipes, Healthy Eating, and
            Plant-Based Living
          </p>

          <p>
            Welcome to Fearless Vegetarian! This website was
            created to share the joy of simple, delicious, and
            nutritious vegetarian cooking.
          </p>

          <p>
            Growing up in a vegetarian family, I learned
            firsthand that vegetarian food can be incredibly
            flavorful, satisfying, and diverse. Through Fearless
            Vegetarian, I hope to inspire others to discover the
            many possibilities of vegetarian cooking and enjoy
            wholesome meals without sacrificing flavor.
          </p>

        </section>


        {/* =========================
                    OUR MISSION
                ========================== */}
        <section className="about-section">

          <h2>
            <FontAwesomeIcon
              icon={faLeaf}
              className="section-icon"
            />

            Our Mission
          </h2>

          <p>
            Our goal is to make vegetarian cooking approachable,
            enjoyable, and accessible to everyone. Whether you're
            a lifelong vegetarian, exploring plant-based eating,
            or simply looking to add more meatless meals to your
            routine, Fearless Vegetarian is here to help.
          </p>

          <p>
            We believe that vegetarian cooking should be
            flavorful, satisfying, and practical for everyday
            life. You don't need complicated ingredients or
            advanced cooking skills to prepare a delicious
            vegetarian meal.
          </p>

        </section>


        {/* =========================
                    WHAT YOU'LL FIND
                ========================== */}
        <section className="about-section">

          <h2>
            <FontAwesomeIcon
              icon={faBowlFood}
              className="section-icon"
            />

            What You'll Find at Fearless Vegetarian
          </h2>

          <p>
            Fearless Vegetarian features a growing collection of
            vegetarian recipes inspired by a variety of cuisines
            and cooking traditions.
          </p>

          <ul className="custom-list">

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="bullet-icon"
              />
              Traditional Indian vegetarian recipes
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="bullet-icon"
              />
              Easy everyday vegetarian meals
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="bullet-icon"
              />
              Healthy and nutritious recipes
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="bullet-icon"
              />
              Vegetarian comfort foods
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="bullet-icon"
              />
              International vegetarian dishes
            </li>

            <li>
              <FontAwesomeIcon
                icon={faCarrot}
                className="bullet-icon"
              />
              Practical cooking tips and vegetarian guidance
            </li>

          </ul>

          <p>
            Each recipe is designed to be easy to follow and
            packed with flavor, using ingredients that are
            generally easy to find.
          </p>

        </section>


        {/* =========================
                    VEGETARIAN COOKING
                ========================== */}
        <section className="about-section">

          <h2>
            <FontAwesomeIcon
              icon={faLeaf}
              className="section-icon"
            />

            Vegetarian Cooking Should Never Be Boring
          </h2>

          <p>
            At Fearless Vegetarian, we believe that healthy eating
            should never be boring. Vegetarian cooking is not
            about giving things up. It's about discovering new
            flavors, ingredients, cooking techniques, and culinary
            traditions.
          </p>

          <p>
            Vegetables, legumes, grains, herbs, nuts, seeds, and
            spices provide an incredible variety of ingredients
            to work with. From comforting Indian curries to quick
            weeknight meals, vegetarian food can be both nourishing
            and deeply satisfying.
          </p>

        </section>


        {/* =========================
                    HEALTH & WELLNESS
                ========================== */}
        <section className="about-section">

          <h2>
            <FontAwesomeIcon
              icon={faSeedling}
              className="section-icon"
            />

            Healthy Eating and Plant-Based Living
          </h2>

          <p>
            Beyond recipes, Fearless Vegetarian is about making
            thoughtful food choices that can support a healthy
            and enjoyable lifestyle.
          </p>

          <p>
            Eating more plant-based meals can be one part of a
            balanced lifestyle. We encourage choosing a variety
            of vegetables, fruits, legumes, whole grains, nuts,
            seeds, and other nourishing foods while enjoying the
            foods you love.
          </p>

          <p>
            We also believe that small, sustainable changes can
            make a meaningful difference. You don't have to
            change everything overnight. Every additional
            vegetarian meal is an opportunity to discover
            something new.
          </p>

        </section>


        {/* ====================================
                    COMPASSION & SUSTAINABILITY
          ====================================== */}
        <section className="about-section">

          <h2>
            <FontAwesomeIcon
              icon={faHeart}
              className="section-icon"
            />

            Food With Compassion
          </h2>

          <p>
            Vegetarian living can mean different things to
            different people. For some, it is about health. For
            others, it may be about animals, the environment,
            culture, or simply enjoying delicious food.
          </p>

          <p>
            At Fearless Vegetarian, we believe everyone can
            approach vegetarian cooking in their own way. Our
            goal is to provide practical recipes and information
            without judgment and to encourage people to discover
            the benefits and enjoyment of eating more plant-based
            foods.
          </p>

        </section>


        {/* ===============================
                    VEGETARIAN JOURNEY
            ============================= */}
        <section className="about-section">

          <h2>
            <FontAwesomeIcon
              icon={faLeaf}
              className="section-icon"
            />

            Your Vegetarian Journey
          </h2>

          <p>
            Whether you're just beginning to explore vegetarian
            food or have been vegetarian for years, there is
            always something new to discover.
          </p>

          <p>
            Try a new recipe, experiment with an unfamiliar
            ingredient, learn a new cooking technique, or simply
            enjoy a favorite meal with family and friends.
            Vegetarian cooking is a journey, and there is no
            single right way to enjoy it.
          </p>

        </section>


        {/* =========================
                    YOUTUBE
                ========================== */}
        <section className="about-section">

          <h2>
            Explore Fearless Vegetarian on YouTube
          </h2>

          <p>
            Want to see these recipes in action? Visit the
            Fearless Vegetarian YouTube channel for recipe videos,
            cooking demonstrations, and more vegetarian food
            inspiration.
          </p>

          <p>

            <a
              href="https://www.youtube.com/@fearlessvegetarian"
              className="med_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Fearless Vegetarian on YouTube"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="me-2"
              />
              Visit our YouTube Channel
            </a>

          </p>

          <p>
            If you enjoy our recipes and videos, please consider
            liking, sharing, subscribing, and leaving a comment.
            Your support helps Fearless Vegetarian grow.
          </p>

        </section>


        {/* =========================
                    CONTACT
                ========================== */}
        <section className="about-section">

          <h2>
            Get in Touch
          </h2>

          <p>
            Have a question, recipe suggestion, or simply want
            to say hello? We'd love to hear from you.
          </p>

          <p>
            Email us at{" "}
            <a href="mailto:fearlessvegetarian62@gmail.com">
              fearlessvegetarian62@gmail.com
            </a>
            .
          </p>

        </section>


        {/* =========================
                    CLOSING
                ========================== */}
        <section className="about-section about-closing">

          <h2>
            Thank You for Visiting Fearless Vegetarian
          </h2>

          <p>
            Thank you for being part of the Fearless Vegetarian
            community. We hope this website becomes a trusted
            companion on your vegetarian journey and inspires you
            to cook, explore, and enjoy more delicious vegetarian
            meals.
          </p>

          <p>
            <strong>
              Happy cooking!
            </strong>
          </p>

          <p>
            With gratitude,
            <br />
            The Fearless Vegetarian Team
          </p>

        </section>

      </div>
    );
  }
}

export default About;
