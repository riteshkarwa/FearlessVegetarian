import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class FAQ extends Component {
    render() {
        const faqs = [
            {
                question: "What is Fearless Vegetarian?",
                answer:
                    "Fearless Vegetarian is a website dedicated to flavorful vegetarian recipes, cooking ideas, and articles about vegetarian living. Our goal is to make vegetarian cooking simple, enjoyable, and approachable for everyone."
            },
            {
                question: "Are all Fearless Vegetarian recipes vegetarian?",
                answer:
                    "Yes. Fearless Vegetarian focuses on vegetarian recipes that do not contain meat, poultry, or seafood. Some recipes may contain dairy ingredients unless a vegan substitution is provided."
            },
            {
                question: "Are the recipes vegan?",
                answer:
                    "Not all recipes are vegan. Some recipes contain dairy ingredients such as milk, yogurt, paneer, or butter. When possible, vegan alternatives and substitutions are provided."
            },
            {
                question: "Can I make the recipes vegan?",
                answer:
                    "Many recipes can be adapted using plant-based alternatives. Depending on the recipe, dairy ingredients can often be replaced with plant-based milk, yogurt, butter, or other vegan alternatives."
            },
            {
                question: "Are the recipes suitable for beginners?",
                answer:
                    "Yes. Many Fearless Vegetarian recipes are designed to be straightforward and easy to follow, with ingredient measurements and step-by-step cooking instructions."
            },
            {
                question: "Can I adjust the spice level?",
                answer:
                    "Absolutely. You can adjust chilies, spices, and other seasonings according to your taste. Start with a smaller amount and add more as needed."
            },
            {
                question: "Where can I find Indian vegetarian recipes?",
                answer:
                    "You can find a variety of Indian vegetarian recipes throughout Fearless Vegetarian, including curries, dals, breakfast dishes, snacks, street food, and traditional favorites."
            },
            {
                question: "Does Fearless Vegetarian have cooking videos?",
                answer:
                    "Yes. Fearless Vegetarian shares cooking videos demonstrating how to prepare a variety of vegetarian dishes. Recipe pages may include videos with step-by-step cooking instructions."
            },
            {
                question: "Can I suggest a recipe?",
                answer:
                    "Yes. If there is a vegetarian recipe you would like to see on Fearless Vegetarian, you can contact us and share your suggestion."
            },
            {
                question: "What is the Fearless Vegetarian Scratch Pad?",
                answer:
                    "The Scratch Pad is a simple note-taking feature that allows you to save recipe ideas, ingredients, grocery lists, cooking notes, reminders, and other general notes."
            },
            {
                question: "Do I need an account to use the Scratch Pad?",
                answer:
                    "No. The current Scratch Pad allows you to enter a username without creating a traditional account or providing an email address."
            },
            {
                question: "Is the Scratch Pad private?",
                answer:
                    "The current Scratch Pad uses a username rather than password-based authentication, so it should not be considered private storage. Please do not enter passwords, financial information, medical information, or other sensitive or confidential information."
            },
            {
                question: "Can I delete my Scratch Pad notes?",
                answer:
                    "Yes. You can use the Clear option in the Scratch Pad to remove the notes currently saved to your Scratch Pad."
            },
            {
                question: "Does Fearless Vegetarian collect personal information?",
                answer:
                    "Fearless Vegetarian does not require visitors to provide their real name, email address, telephone number, or mailing address simply to browse the website. Some features, such as the Scratch Pad, may process information voluntarily provided by visitors. Please see our Privacy Policy for more information."
            },
            {
                question: "How can I contact Fearless Vegetarian?",
                answer:
                    "You can contact Fearless Vegetarian through our Contact page. We welcome questions, suggestions, recipe ideas, and feedback."
            },
            {
                question: "Does Fearless Vegetarian have a YouTube channel?",
                answer: (
                    <>
                        Yes. Fearless Vegetarian has a YouTube channel where we share
                        vegetarian recipes, cooking tips, and step-by-step recipe videos.
                        You can follow our channel for new recipe videos and cooking
                        inspiration.{" "}
                        <a
                            href="https://www.youtube.com/@fearlessvegetarian"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="med_link"
                        >
                            Visit our YouTube channel
                        </a>
                        .
                    </>
                )
            },
            {
                question: "Does Fearless Vegetarian have a Facebook page?",
                answer: (
                    <>
                        Yes. Fearless Vegetarian has a Facebook page where we share
                        vegetarian recipes, cooking ideas, videos, and updates. Follow
                        our Facebook page to stay connected and discover new recipes.{" "}
                        <a
                            href="https://www.facebook.com/fearlessvegetarian/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="med_link"
                        >
                            Visit our Facebook page
                        </a>
                        .
                    </>
                )
            },
        ];

        return (
            <div className="faq-page">

                <Helmet>
                    <meta charSet="utf-8" />

                    <title>
                        Frequently Asked Questions | Fearless Vegetarian
                    </title>

                    <meta
                        name="description"
                        content="Find answers to frequently asked questions about Fearless Vegetarian recipes, vegetarian cooking, vegan substitutions, cooking videos, and the Fearless Vegetarian Scratch Pad."
                    />

                    <link
                        rel="canonical"
                        href="https://fearlessvegetarian.netlify.app/faq/"
                    />
                </Helmet>

                <section className="faq-header">
                    <h1>
                        <FontAwesomeIcon
                            icon={faLeaf}
                            className="faq-leaf-icon"
                        />
                        Frequently Asked Questions
                    </h1>

                    <p>
                        Have questions about Fearless Vegetarian, our recipes,
                        vegetarian cooking, or the Scratch Pad? Find answers
                        to some of the most common questions below.
                    </p>
                </section>

                <section className="faq-section">

                    <Accordion alwaysOpen>
                        {faqs.map((faq, index) => (
                            <Accordion.Item
                                eventKey={index.toString()}
                                key={index}
                            >
                                <Accordion.Header>
                                    {faq.question}
                                </Accordion.Header>

                                <Accordion.Body>
                                    {faq.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>

                </section>

                <section className="faq-contact">

                    <h2>Still Have Questions?</h2>

                    <p>
                        If you have a question that is not answered here,
                        feel free to reach out to us through our Contact page.
                    </p>

                    <a
                        href="/contact"
                        className="btn btn-success"
                    >
                        Contact Fearless Vegetarian
                    </a>

                </section>

            </div>
        );
    }
}

export default FAQ;